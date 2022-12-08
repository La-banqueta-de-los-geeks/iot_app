import { IonBackButton, IonButtons, IonHeader, IonToolbar } from "@ionic/react";
import "./ui-header.css";

export interface UiHeaderProps {
  url: string;
}

export function UiHeader({ url }: UiHeaderProps) {
  return (
    <IonHeader mode="ios" className="ion-no-border">
      <IonToolbar mode="md">
        <IonButtons slot="start">
          <IonBackButton defaultHref={`${url}`} />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
}

export default UiHeader;
