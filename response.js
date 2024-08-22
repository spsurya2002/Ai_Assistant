document.getElementById('generate-btn').addEventListener('click', async function(event) {
    const prompt = document.getElementById('request').innerHTML;
    console.log(prompt);

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer <api_key>`
        },
        body: JSON.stringify({
            messages: [
                {
                    role: 'system',
                    content: `You are a multi-modal AI voice assistant...`
                },
                {
                    role: 'user',
                    content: `${prompt} in minimum 3 lines.`
                }
            ],
            model: 'llama3-8b-8192',
            temperature: 1,
            top_p: 1,
            stream: false,
            stop: null
        })
    });

    if (response.ok) {
        const data = await response.json();
        const answer = data.choices[0].message?.content;
        const responseDiv = document.getElementById('response');
        responseDiv.innerHTML = answer;

        // Automatically speak the response
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            let utterance = new SpeechSynthesisUtterance(answer);
            window.speechSynthesis.speak(utterance);
        } else {
            alert('Sorry, your browser does not support text to speech!');
        }
    } else {
        console.error(await response.json());
    }
});
