import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faMedkit,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;

export default function Home() {
  return (
    <>
      <header className="flex justify-between">
        <h1 className="m-10 text-2xl font-bold">Consult Doc</h1>
        <Button className="m-10">Call us</Button>
      </header>
      <main>
        <div className="flex justify-around">
          <Card>
            <h1 className="text-6xl font-bold pt-10 px-10">
              Transform
              <br />
              your health
              <br />
              with expert
              <br />
              care
            </h1>
            <h3 className="text-lg px-10 pt-5">
              Our goal is to empower you with the
              <br />
              knowledge and resources you need to make
              <br />
              informed decisions about your health.
            </h3>

            <div>
              <Button className="m-10 mr-2">Call us</Button>
              <Button className="my-10" variant="outline">
                Book an appointment
              </Button>
            </div>
          </Card>

          <div
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              width: "500px",
              height: "550px",
            }}
          >
            <Image
              src="/doctor.jpg"
              width={500}
              height={400}
              objectFit="cover"
              alt="Picture of a Doctor"
            />
          </div>
        </div>

        <Separator className="my-20" />
        <div>
          <h1 className="text-4xl font-bold text-center">How We Work</h1>
          <p className="text-base text-center my-5">
            We understand that time and experience are your
            <br />
            priority, so we simplify the whole process.
          </p>
          <div className="flex flex-row justify-evenly mt-20">
            <div className="flex flex-col">
              <Card className="p-5 w-20 grid justify-items-center">
                <FontAwesomeIcon className="" icon={faVideo} />
              </Card>
              <h1 className="text-xl font-bold pt-5">Virtual Consultation</h1>
              <h3 className="text-base pt-2">
                Talk to your doctor via video
                <br />
                or audio chat. Ask questions, and
                <br />
                get the answers you need.
              </h3>
            </div>
            <div className="flex flex-col">
              <Card className="p-5 w-20 grid justify-items-center">
                <FontAwesomeIcon className="" icon={faMedkit} />
              </Card>
              <h1 className="text-xl font-bold pt-5">
                Prescriptions and Advice
              </h1>
              <h3 className="text-base pt-2">
                After your chat, your doctor will
                <br />
                provide any necessary prescriptions
                <br />
                or recommendations.
              </h3>
            </div>
            <div className="flex flex-col">
              <Card className="p-5 w-20 grid justify-items-center">
                <FontAwesomeIcon className="" icon={faCalendar} />
              </Card>
              <h1 className="text-xl font-bold pt-5">Follow-Up Appointments</h1>
              <h3 className="text-base pt-2">
                If needed, set up follow-up
                <br />
                appointments with your chosen
                <br />
                doctor or another specialist
              </h3>
            </div>
          </div>

          <Separator className="my-20" />
        </div>
      </main>
    </>
  );
}
