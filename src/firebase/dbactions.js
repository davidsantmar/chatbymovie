import { db } from ".";

export async function addMessage(movieId, message) {
  await db.collection(`messages_${movieId}`).add(message);


}
