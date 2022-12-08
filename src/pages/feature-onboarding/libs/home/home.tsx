import { IonApp, IonCol, IonContent, IonGrid, IonRow } from "@ionic/react";
import UiHeader from "../../../../components/ui-header/ui-header";
import "./home.css";

const Home: React.FC = () => {
  return (
    <IonApp>
      <UiHeader url="/onboarding" />
      <IonContent>
        <IonGrid className="custom__main">
          <IonRow>
            <IonCol size="12">
              <section className="custom_header__titles">
                <h2>Welcome 👋🏼</h2>
                <p>Prueba</p>
              </section>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonApp>
  );
};

export default Home;
