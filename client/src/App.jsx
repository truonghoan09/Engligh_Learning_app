import AppProvider from "./provider/appProvider/indexAppProvider"
import AppRoutes from "./route/AppRoutes/indexAppRoutes"
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBZ6eo7x-Lrk5X_8B2EHNC52HlLhV9VP6U",
  authDomain: "english-learning-ce6f5.firebaseapp.com",
  databaseURL: "https://english-learning-ce6f5-default-rtdb.firebaseio.com",
  projectId: "english-learning-ce6f5",
  storageBucket: "english-learning-ce6f5.appspot.com",
  messagingSenderId: "203201765556",
  appId: "1:203201765556:web:0c931a8d0403ad152c77e1",
  measurementId: "G-0K3CBF6CTC"
};

initializeApp(firebaseConfig);

export const storage = getStorage();

function App() {

  return (
    <AppProvider >
      <AppRoutes />
    </AppProvider>
  )
}

export default App
