import {
  IonApp,
  IonButton,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonIcon,
  IonInput,
  IonItem,
  IonRow,
  useIonLoading,
} from "@ionic/react";
import { useState } from "react";
import { useHistory } from "react-router";
import UserIcon from "../../assets/icons/app-auth-user.svg";
import PasswordIcon from "../../assets/icons/app-auth-password.svg";
import RightIcon from "../../assets/icons/app-auth-go-next.svg";
import "./login.css";
import UiHeader from "../../../../components/ui-header/ui-header";

const Login: React.FC = () => {
  const history = useHistory();

  const [user, setUser] = useState<any>();
  const [password, setPassword] = useState<any>();
  const [present, dismiss] = useIonLoading();
  const [validate, setValidate] = useState<boolean>(true);

  const validInputDefault = {
    email: "prueba@gmail.com",
    password: "12345",
  };

  const onLoadScreen = () => {
    present({
      message: "Please wait...",
      duration: 2000,
      mode: "ios",
    });
    setValidate(true);
    setTimeout(() => {
      history.push("/home");
    }, 2000);
    dismiss();
  };

  const onHandleGoToHome = (e: any) => {
    e.preventDefault();
    validInputDefault.email === user ? onLoadScreen() : setValidate(false);
  };

  return (
    <IonApp>
      <UiHeader url={"/onboarding"} />
      <IonContent>
        <IonGrid className="section_auth__container">
          <IonRow>
            <IonCol size="12">
              <IonGrid>
                <IonRow>
                  <IonCol size="12">
                    <div>
                      <p className="title">
                        Sign In <b>Vurotron</b>
                      </p>
                    </div>
                  </IonCol>
                </IonRow>
              </IonGrid>
              <IonGrid>
                <IonRow>
                  <IonCol size="12">
                    <form method="POST">
                      <section className="section_auth__box">
                        <IonItem lines="none">
                          <IonInput
                            placeholder="Your email"
                            type="text"
                            inputmode="text"
                            mode="ios"
                            onIonChange={(e) => setUser(e.detail.value!)}
                          ></IonInput>
                          <IonButton mode="ios">
                            <IonIcon
                              slot="start"
                              icon={UserIcon}
                              className="user__icon"
                            />
                          </IonButton>
                        </IonItem>
                      </section>
                      <section className="section_auth__box">
                        <IonItem lines="none">
                          <IonInput
                            placeholder="Your password"
                            type="password"
                            inputmode="text"
                            minlength={1}
                            maxlength={7}
                            mode="ios"
                            onIonChange={(e) => setPassword(e.detail.value!)}
                          ></IonInput>
                          <IonButton slot="start" mode="ios">
                            <IonIcon
                              slot="start"
                              icon={PasswordIcon}
                              className="password__icon"
                            />
                          </IonButton>
                        </IonItem>
                        {!validate && (
                          <p className="invalidate_auth__text">
                            Your user or password aren't validates, please try
                            again!
                          </p>
                        )}
                      </section>
                    </form>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton
            color="dark"
            onClick={(e) => onHandleGoToHome(e)}
            disabled={!user}
          >
            <IonIcon icon={RightIcon} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonApp>
  );
};
export default Login;