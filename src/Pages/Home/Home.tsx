import React, { useRef } from "react";

import { Button } from "react-bootstrap";

import Frame from "../Components/Frame";
import GreyCard from "../Components/GreyCard";
import WhiteCard from "../Components/WhiteCard";

const Home = () => {
  const myRef = useRef<HTMLDivElement>(null);

  const executeScroll = () => myRef.current?.scrollIntoView();
  return (
    <Frame footerRef={myRef}>
      <div className="landing">
        <div className="body">
          <div className="title">COMING SOON</div>
          <div className="sub-title">Ready for Endless Possibilities?</div>
          <div className="detail">
            Monerce is an Online-To-Offline (O2O) commerce digital solution that enable people to buy and sell goods and
            services via existing text based messaging services using integration with USSD based services.
          </div>
          <div className="btn">
            <Button className="join-btn" type="button" onClick={executeScroll}>
              Join the wait list
            </Button>
          </div>
        </div>
        <div className="image">
          <img src="assets/images/moko.png" alt="moko" />
        </div>
      </div>
      <div className="offering">
        <div className="title">What will Monerce be Offering?</div>
        <div className="sub-title">
          Here are the few things you will be able to accomplish with our value-added product:
        </div>
        <div className="cards">
          <WhiteCard icon="buy" title="Buy" detail="Make a purchase of goods/services from merchants via SMS" />
          <WhiteCard icon="book" title="Book" detail="Reserve a spot for an  event all by just sending an SMS" />
          <WhiteCard
            icon="give"
            title="Give"
            detail="Make a donation towards a cause you truly believe and support without hazzles."
          />
          <WhiteCard
            icon="reward"
            title="Reward"
            detail="Rewards your loyal customers to increase user acquisition for your products or services"
          />
          <WhiteCard
            icon="campaign"
            title="Campaign"
            detail="Want to carry out social campaign? We wil manage the task for you while you monitor the growth of your campaign analytics."
          />
          <WhiteCard
            icon="invoice"
            title="Invoice"
            detail="Create customer invoices  all by sending the keyword “Invoice” to our SMS gateway and quickly receive well structured invoice"
          />
        </div>
      </div>
      <div className="channel">
        <div className="title">Our Channels of Communication</div>
        <div className="sub-title">These are the various channels to which our users will interact with Monerce</div>
        <div className="cards">
          <GreyCard icon="messages" title="SMS" detail="Send a text message to our SMS Gateway number" />
          <GreyCard icon="whatsapp" title="Whatsapp" detail="Send a WhatsApp message to our Platform Number" />
          <GreyCard
            icon="Facebook"
            title="Facebook"
            detail="Message us on Facebook @Monerce for an instant response."
          />
          <GreyCard
            icon="twitter"
            title="Twitter"
            detail="You will be able to transact via our twitter channel @MonerceHQ"
          />
          <GreyCard
            icon="telegram"
            title="Telegram"
            detail="Got Telegram? Sure we are there as well to help you continue your transaction."
          />
          <GreyCard
            icon="instagram"
            title="Instagram"
            detail="We are not forgetting the Instagram lovers. You will be able to continue on instagram as well."
          />
        </div>
      </div>
    </Frame>
  );
};

export default Home;
