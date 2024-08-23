export async function getUserPermission() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      // Microphone permission granted
      stream.getTracks().forEach(track => track.stop()); // Stop the track to avoid keeping the microphone on
      console.log("Microphone access granted");
    } catch (error) {
      console.error("Error requesting microphone permission", error);
    }
  }
  
  // Call the function to request microphone permission
  getUserPermission();
  