import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {FaSearch,FaGoogle,FaArrowRight,FaLinkedin,FaFacebook,FaTwitter,FaYoutube} from "react-icons/fa";
import VideoLooper from "react-video-looper";
import "./index.css";
function App(){

    const columnOne=[{id:1,title:"WHY SLACK ?"},{id:2,desc:"Slack vs email"},{id:3,desc:"Channels"},{id:4,desc:"Engagement"},{id:5,desc:"Scale"},{id:6,desc:"Watch the demo"},]
    const columnTwo=[{id:1,title:"PRODUCT"},{id:2,desc:"Features"},{id:3,desc:"Integrations"},{id:4,desc:"Solutions"},{id:5,desc:"Enterprise"}]
    const columnThree=[{id:1,title:"PRICING"},{id:2,desc:"Subscriptions"},{id:3,desc:"Paid vs Free"}]
    const columnFour=[{id:1,title:"RESOURCES"},{id:2,desc:"Partners"},{id:3,desc:"Developers"},{id:4,desc:"Community"},{id:5,desc:"Apps"},{id:6,desc:"Blog"},{id:7,desc:"Help centre"},{id:8,desc:"Evnets"}]
    const columnFive=[{id:1,title:"COMPANY"},{id:2,desc:"About us"},{id:3,desc:"Leadership"},{id:4,desc:"Investor relations"},{id:5,desc:"Media kit"},{id:6,desc:"News"},{id:7,desc:"Careers"}]

window.onscroll = () => {
    const atom = document.getElementById("nav");
    if (
      document.documentElement.scrollTop>10 || document.body.scrollTop>10) {
      atom.classList.add("styles");
      atom.style.position='fixed';
    } else {
      atom.classList.remove("styles");
    }
  };
    const handleChange=()=>{
        const elem=document.getElementById("frame");
        if(!document.fullScreenElement){
       elem.requestFullscreen();
    }
    else{
        elem.exitFullscreen();
    }
}

    return(<>
           <div className="container-fluid">
  
           <div className="main">    
           <nav className="navbar navbar-expand-sm navbar-dark"id="nav">
  <div className="container-fluid">
    <img className="navbar-brand"id="logo" src="https://logosmarcas.net/wp-content/uploads/2020/11/Slack-Logo.png"alt=""/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item ">
          <a className="nav-link text-dark" href="javas">Product</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="jr">Solution</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#ee">Enterprises</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#ee">Resources</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#ee">Pricing</a>
        </li>
      </ul>
      <form className="d-flex">
      <button class="btn"><FaSearch/></button>
    <button class="btn" id="bat">sign up</button>
    <button class="btn"id="bet">TALK  TO SALES</button>
    <button class="btn"id="bed">TRY FOR FREE</button>
      </form>
    </div>
  </div>
</nav>

<div className="d-flex flex-wrap justify-content-around align-items-center pt-5">
    <div>
        <h1>Slack is Your<br/> Digital HQ</h1>
        <p>Transform the way that you work with one place for<br/> everyone and everything that you need to get things<br/> done.</p>
        <button className="btn"id="bad">TRY FOR FREE</button>
        <button className="btn"id="google"><FaGoogle/> Sign up with Google</button>
    </div>
    <div>
        <img className="rounded"src="https://a.slack-edge.com/13f94ee/marketing/img/homepage/self-serve-campaign/hero/img-campaign-hero.IN.jpg"alt=""/>
    </div>
</div>
<div className=" mt-5">
    <div className=" mt-3 d-flex flex-wrap justify-content-around">
    <a className="mt-3" href="#dd"><img src="https://a.slack-edge.com/ce67d/marketing/img/logos/company/_color/fox.png"alt=""/></a>
    <a href="#dd"><img src="https://a.slack-edge.com/ce67d/marketing/img/logos/company/_color/lonelyplanet.png"alt=""/></a>
 <a className="mt-3"  href="#dd"><img src="https://a.slack-edge.com/e2fa17/marketing/img/logos/company/_color/intuit.png"alt=""/></a>
    <a className="mt-3" href="#dd"><img src="https://a.slack-edge.com/ce67d/marketing/img/logos/company/_color/carvana.png"alt=""/></a>
    <a className="mt-3" href="#dd"><img src="https://a.slack-edge.com/ce67d/marketing/img/logos/company/_color/kiva.png"alt=""/></a>
    <a className="mt-3" href="#dd"><img src="https://a.slack-edge.com/80588/marketing/img/logos/company/_color/target-logo.png"alt=""/></a>
    <a className="mt-3" href="#dd"><img src="https://a.slack-edge.com/ce67d/marketing/img/logos/company/_color/devacurl.png"alt=""/></a>
       
    </div>
</div>
<div className="d-flex  flex-wrap justify-content-around align-items-center mt-5">
    <div>
<iframe className="ms-4"id="frame" allow="fullscren" src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/connectedness.webm"/>
    </div>
    <div>
<h2>Now is your moment to build a better tomorrow</h2>
<p>We’ve seen what the future can be. Now it’s time to decide<br/>what it will be.</p>
<button className="btn"id="bug"onClick={handleChange}>WATCH VIDEO</button>
    </div>
</div>

<div className="d-flex flex-wrap justify-content-around align-items-center mt-5">
    <div>
        <h2 className="ms-3">Move faster by organising your<br/> work life</h2>
        <p className="ms-3">The key to productivity in Slack is organised spaces called<br/> channels – a different one for everything that you’re working<br/> on. With all the people, messages and files related to a topic in<br/> one place, you can move much faster.</p>
        <a className="nav-link"id="navi"href="#">Learn more about channels <FaArrowRight/></a>
        <iframe src="https://www.youtube.com/embed/RKicXaGKSI0"id="frame1"/>
        <iframe src="https://www.youtube.com/embed/DSTUwdvHCOI"id="frame1"/>
    </div>
    <div>
        <VideoLooper className="ms-5" src="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/inline-images/video/img-hp-section-01.mp4"start={0}end={true}id="loop"/>
    </div>
</div>

<div className="d-flex  flex-wrap justify-content-around align-items-center mt-5">
    <div>
        <VideoLooper className="ms-3"src="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/inline-images/video/img-hp-section-02.mp4"start={0}end={true}id="loop"/>
    </div>
    <div className="col-sm-6">
        <h2>Focus your time, on your own terms</h2>
        <p>Give yourself the flexibility to work when, where and how you<br/> work best. Take control of notifications, collaborate live or on<br/> your own time, and find answers in conversations from across<br/> your company.</p>
        <a className="nav-link"id="navi"href="#ee">Support a more flexible work schedule in Slack <FaArrowRight/></a>
        <iframe src="https://www.youtube.com/embed/-9jW7ZTxBaU"id="frame1"/>
    </div>
</div>
<div className="d-flex flex-wrap justify-content-around align-items-center mt-5">
    <div>
        <h2 className="ms-3">Simplify teamwork for everyone</h2>
        <p className="ms-3">Give everyone that you work with – both inside and outside<br/> your company – a more productive way to stay in sync.<br/> Respond faster with emoji, keep conversations focused in<br/> channels and simplify all your communication into one place.</p>
        <a className="nav-link"id="navi"href="#ee">Learn how to work with external partners in Slack <FaArrowRight/></a>
        <iframe src="https://www.youtube.com/embed/ZXxrTMaQhK4"id="frame1"/>
        <iframe src="https://www.youtube.com/embed/QhSHYFkQYaI"id="frame1"/>
    </div>
    <div>
        <VideoLooper className="ms-5"src="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/inline-images/video/img-hp-section-03.mp4"start={0}end={true}id="loop"/>
    </div>
</div>
<div className="part mt-5">
<h1 className="text-center mt-4">GET STARTED WITH SLACK</h1>
<div className="row ms-5 mt-3">
<div className="col-sm-3 ms-5 ">
<div className="bot">1</div>
<h4>Sign Up</h4>
<h5>Create a new Slack workspace in just a<br/> few moments. It’s free to try for teams of<br/> any size.</h5>
</div>
<div className="col-sm-3 ms-5 ">
<div className="bot">2</div>
<h4>invite your colleagues</h4>
<h5>Slack is better together (no, really, it’s a<br/> bit underwhelming by yourself), and it’s<br/> easy to invite your team.</h5>
</div>
<div className="col-sm-3 ms-5">
<div className="bot">3</div>
<h4>Give it a go</h4>
<h5>Run a project, coordinate with your team<br/> or just talk things through. Slack is a blank<br/> canvas for teamwork.</h5>
</div>
</div>
<div className="d-flex  flex-wrap justify-content-around align-items-center mt-5 ">
    <div>
        <div className="card">
<div className="header">
    <img src="https://a.slack-edge.com/db0aea0/marketing/img/homepage/self-serve-campaign/promos/img-promo-what-is-slack.jpg"alt=""/>
    <p className="ms-1">Webinar</p>
        <h3 className="ms-1">What is Slack ?</h3>
        <div className="footer">
            <a className="nav-link float-left"id="ros"href="#ee">WATCH NOW</a>
            <FaArrowRight id="thor"/>
        </div>
</div>
        </div>
    </div>
    <div>
        <div className="card">
<div className="header">
    <img src="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-02.jpg"alt=""/>
    <div className="body">
    <p className="ms-1">Customer Stories</p>
        <h3 className="ms-1">Get inspired by real slack customers</h3>
    </div>
    <a className="nav-link float-left"id="ras"href="#jj">READ STORIES</a>
    <FaArrowRight id="thor"/>
</div>
        </div>
    </div>
    <div>
        <div className="card">
<div className="header">
    <img src="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-03.jpg"alt=""/>
<div className="body">
<p className="ms-1">Solutions</p>
        <h3 className="ms-1">Learn how Slack can work for Your team</h3>
</div>
<a className="nav-link float-left"id="res"href="#dd">EXPLORE SOLUTIONS</a>
<FaArrowRight id="thor"/>
</div>
        </div>
    </div>
    <div>
        <div className="card">
<div className="header">
    <img src="https://a.slack-edge.com/96dd309/marketing/img/homepage/self-serve-campaign/promos/img-promo-04.jpg"alt=""/>
<div className="body">
<p className="ms-1">How to ?</p>
        <h3 className="ms-1 ">Start off on the right foot with Slack 101</h3>
</div>
<a className="nav-link float-left"id="res"href="#bb">LEARN HOW</a>
<FaArrowRight id="thor"/>
</div>
        </div>
    </div>
</div>
   </div>
        
   
       <div id="polo">
           <h1 className="text-center text-white mt-5">Welcome To Where the future Works</h1>
           <div className="d-flex justify-content-center gap-2 mt-5 pb-3">
           <button className="btn"id="loki">TRY FOR FREE</button>
           <button className="btn"id="tony">TALK TO SALES</button>
           </div>
        </div>
       </div>
   </div>
   <div className="d-flex flex-wrap justify-content-around align-items-start mt-4">

    <img id="logo"src="https://webdesigntips.blog/wp-content/uploads/2019/02/Slack-sparks-further-outrage-with-tweak-to-new-logo.jpg"alt=""/>

<div>
    {columnOne.map((item)=>{
        return(<>
        <div key={item.id}>
            <h6 className="text-black">{item.title}</h6>
            <p className="text-secondary">{item.desc}</p>
        </div>
        </>);
    })}
</div>
<div>
{columnTwo.map((item)=>{
        return(<>
        <div key={item.id}>
            <h6 className="text-black">{item.title}</h6>
            <p className="text-secondary">{item.desc}</p>
        </div>
        </>);
    })}
</div>
<div>
{columnThree.map((item)=>{
        return(<>
        <div key={item.id}>
            <h6 className="text-black">{item.title}</h6>
            <p className="text-secondary">{item.desc}</p>
        </div>
        </>);
    })}
</div>

<div>
{columnFour.map((item)=>{
        return(<>
        <div key={item.id}>
            <h6 className="text-black">{item.title}</h6>
            <p className="text-secondary">{item.desc}</p>
        </div>
        </>);
    })}
</div>
<div>
{columnFive.map((item)=>{
        return(<>
        <div key={item.id}>
            <h6 className="text-black">{item.title}</h6>
            <p className="text-secondary">{item.desc}</p>
        </div>
        </>);
    })}
</div>
   </div>
   <div className="progress">   
   </div>
   <nav class="navbar navbar-expand-sm mt-3">
       <ul className="navbar-nav">
           <li className="nav-item"><a className="nav-link text-dark"href="#tt">Status</a></li>
           <li className="nav-item"><a className="nav-link text-dark"href="#tt">Privacy</a></li>
           <li className="nav-item"><a className="nav-link text-dark"href="#tt">Terms</a></li>
           <li className="nav-item"><a className="nav-link text-dark"href="#tt">Cookie preferences</a></li>
           <li className="nav-item"><a className="nav-link text-dark"href="#tt">Contact us</a></li>
       </ul>
<div className="d-flex ms-auto">
<button className="btn text-dark">Download slack</button>
<button className="btn"><FaFacebook/></button>
<button className="btn"><FaTwitter/></button>
<button className="btn"><FaYoutube/></button>
<button className="btn"><FaLinkedin/></button>
</div>
   </nav>

   <p className="size-10">©2022 Slack Technologies, LLC, a Salesforce company. All rights reserved. Various trademarks held by their respective owners.</p>
   
    </>);
}
export default App
