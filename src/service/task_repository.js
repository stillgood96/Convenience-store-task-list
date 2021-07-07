import { firebaseData } from "./firebase.js";

class taskList {
  getTask(time, onUpdate) {
    const tasks = firebaseData.ref(`${time}`);
    tasks.on("value", (snapshot) => {
      const data = snapshot.val();
      data && onUpdate(data);
    });

    return () => {
      tasks.off();
    };
  }

  getOnce(time, onUpdate) {
    const dbRef = firebaseData.ref(`/${time}/`);
    dbRef
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          onUpdate(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export default taskList;
