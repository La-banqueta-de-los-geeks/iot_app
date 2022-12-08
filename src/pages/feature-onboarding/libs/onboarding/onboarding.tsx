import { IonApp, IonButton, IonContent, useIonLoading } from "@ionic/react";
import { useHistory } from "react-router";
import background from "../../assets/images/background.svg";
import "./onboarding.css";

const OnBoarding: React.FC = () => {
  const [present, dismiss] = useIonLoading();
  const history = useHistory();
  const onLoadScreen = () => {
    present({
      message: "Please wait...",
      duration: 2000,
      mode: "ios",
    });
    setTimeout(() => {
      history.push("/auth/login");
    }, 2000);
    dismiss();
  };
  return (
    <IonApp>
      <IonContent>
        <div
          style={{
            background: `rgba(0, 0, 0, .40)  url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="app"
        >
          <section className="container-app">
            <h1>Vurotron</h1>
            <p>Find our best features for switch on/off vurotron bot</p>
            <IonButton
              expand="full"
              shape="round"
              onClick={onLoadScreen}
              mode="ios"
            >
              Go to there
            </IonButton>
          </section>
        </div>
      </IonContent>
    </IonApp>
  );
};

export default OnBoarding;
