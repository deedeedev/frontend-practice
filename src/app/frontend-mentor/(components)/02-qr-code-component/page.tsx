import QRCode from "@/components/QRCode/QRCode";
import qrCodeImage from "./image-qr-code.png";

export default function Page() {
  return <QRCode image={qrCodeImage} />;
}
