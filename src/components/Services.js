import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Web Development" img="card1.png" text="Web design and web based application development." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Salesforce Solutions" img="card2.png" text="Experienced in making end to end salesforce solutions." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Social Media Marketing" img="card3.png" text="Team with innovative ways to drive traffic to your business both online and offline." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
