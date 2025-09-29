import React, { useEffect } from "react";
import Navbar from "./Navbar";
import SplitText from "./Split";
import profile from "../assets/images/my_profile.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <div style={{ height: "8vh" }}>
        <Navbar />
      </div>
      <div
        style={{
          overflowY: "scroll",
          height: "92vh",
          position: "absolute",
          width: "100%",
        }}
      >
        <div style={{ position: "relative", top: "10px", zIndex: "0" }}>
          <div
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              top: "0px",
              position: "relative",
            }}
          >
            <SplitText
              text="About Me"
              className="text-2xl font-semibold text-center"
              delay={50} // ms between letters
              duration={0.6} // each letter animation duration
              ease="power3.out"
              splitType="chars" // or "words"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              tag="h1" // can be "p", "h1", "h2", etc.
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>
          <div
            className="container  w-100"
            style={{ color: "white", top: "10px", position: "relative" }}
          >
            <div className="row">
              <div className="col-lg-6  w-50">
                <div className="p-2 d-flex justify-content-center">
                  <img
                    src={profile}
                    alt=""
                    width="400"
                    height="450"
                    style={{ borderRadius: "100%" }}
                  />
                </div>
              </div>
              <div className="col-lg-6  w-50">
                <div className="p-2 h-100 d-flex justify-content-center align-items-center">
                  <h5 id="h5">
                    {" "}
                    BCA undergraduate with strong skills in web development,
                    programming, and database management. Experienced in
                    building responsive applications using React.js and MERN
                    stack. Seeking an entry-level IT role to apply and expand
                    technical expertise while contributing to innovative
                    projects.
                  </h5>
                </div>
              </div>
            </div>
          </div>
          {/* technical skills */}
          <br />
          <br />
          <div className="text-white container" data-aos="fade-right">
            <p className="text-white bg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              facere dolorem amet repellat nesciunt reiciendis necessitatibus
              mollitia vitae incidunt quo expedita veritatis, deleniti tempore,
              soluta voluptatibus cum molestias, culpa doloremque excepturi
              officia sequi! Et voluptatibus deleniti, eligendi autem
              repellendus ipsum voluptas repellat magni, corporis repudiandae
              fuga eum sequi dolorum velit! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Odit asperiores eum, quasi expedita
              eaque, quae aspernatur officiis libero laborum praesentium optio
              autem ut neque architecto nemo quia saepe mollitia cumque! Nisi
              consequatur provident dolore, magni omnis suscipit neque dolorem
              adipisci eligendi sint natus, tenetur accusantium, in deserunt ea
              exercitationem cumque nihil fugit quas ratione aliquid laboriosam
              aperiam. Architecto aliquid neque quae. Natus iste autem
              voluptatem soluta, distinctio adipisci dicta pariatur voluptates
              ipsum? Ducimus nesciunt nobis aperiam, molestiae dolor ab
              assumenda quos maxime rem eveniet provident vel culpa, molestias
              eum distinctio tenetur rerum reiciendis ut vitae. Perspiciatis
              distinctio voluptas consequuntur reiciendis?Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Odio dignissimos laboriosam
              nostrum veniam blanditiis voluptates consequuntur quo quae
              possimus nesciunt officiis corrupti excepturi ad, maxime ipsa
              error eaque perferendis corporis, qui numquam? Quam quis ipsum
              dolor, dolorem doloremque quos at rem. Eveniet deserunt nam
              repellendus sint fuga hic atque eligendi ullam architecto
              recusandae amet, neque perferendis nulla ipsam magni tenetur
              facilis! Quibusdam doloribus non praesentium saepe facere eligendi
              libero rem, nihil est facilis minima esse in itaque consequuntur
              eaque et cum perspiciatis possimus. Facilis incidunt consequuntur
              corporis odit sapiente eum dolore reiciendis, nam, delectus
              recusandae quaerat amet quis consectetur? Amet, iste debitis unde
              optio numquam aspernatur quisquam sequi modi non consequuntur
              ducimus, alias quod quidem! Perferendis aliquam tempore maxime,
              ipsa sunt natus ipsum! Amet blanditiis dolores alias omnis. Dolore
              ex quas eaque similique quidem, nesciunt placeat labore modi
              libero. Error ad modi ex repellat doloremque, fuga vitae eius,
              facilis quis alias, blanditiis dolorum! Eveniet similique tenetur,
              suscipit nemo et neque ullam dicta velit expedita ipsam hic
              adipisci esse voluptatibus commodi assumenda eligendi quibusdam in
              corporis numquam! Tempore aut sequi et facilis ut adipisci
              accusantium nihil, ex fugit voluptatum distinctio blanditiis nisi
              id quis necessitatibus, eaque aliquam totam, quas corporis illum
              est voluptate. Voluptatibus eaque itaque fugiat sunt alias fuga
              sapiente maxime quasi, expedita quibusdam inventore laborum
              temporibus cupiditate adipisci molestias atque repellendus ut
              magnam quos placeat, nisi pariatur. Rerum at impedit ea sed
              cupiditate. Ducimus non repellendus nobis possimus earum
              provident? Maiores dolorem fuga hic reprehenderit architecto
              officia, nihil quo consequatur libero, eius, doloremque tempore
              nisi pariatur non. Aut in similique eaque, labore nemo qui esse
              minus eos voluptate temporibus ratione culpa nesciunt. Commodi,
              quam inventore? Est aliquam rerum impedit reprehenderit unde nemo
              minima quod magnam quam, beatae quas nihil praesentium asperiores
              aut obcaecati ab magni sed aperiam eius hic, ex enim. Minus fugit
              repellat adipisci, eius eveniet reiciendis sapiente dolore quod
              eum itaque eaque. Nisi aperiam quos atque possimus fuga ad sint
              modi dicta ea iste quidem sunt, in totam natus beatae perspiciatis
              aliquid eum ab id ducimus tempora illum libero. Laudantium
              perspiciatis alias voluptates assumenda iusto, laboriosam
              aspernatur sit voluptatum impedit eaque. Delectus eveniet incidunt
              officia asperiores rerum dolorem pariatur, natus ab dicta ipsam
              libero maiores vero autem aliquid voluptate animi vel dolor
              mollitia hic quas nam. Veniam vitae error excepturi illo
              assumenda? Iusto excepturi nam quam commodi deserunt incidunt
              ratione quidem, dolorem reiciendis cupiditate pariatur sint
              magnam. Laborum eaque possimus nisi animi suscipit cupiditate enim
              delectus soluta quasi architecto ea minus corrupti, reprehenderit
              modi recusandae incidunt ut consequuntur aliquam numquam
              dignissimos accusamus, quam quaerat illo? Magnam earum assumenda
              dolore, similique non officia quia amet at veniam molestias
              quibusdam vero! Ratione aliquid a iste, distinctio illo rem harum
              dicta voluptates autem vero laborum perspiciatis eum neque, nihil
              suscipit! Distinctio natus quo numquam impedit rem eveniet
              voluptatem. Harum doloremque maxime quis quibusdam, odit itaque
              impedit voluptates dignissimos beatae aperiam fugit commodi
              molestiae consequuntur? Nam sint id reprehenderit hic, iusto velit
              ab, perspiciatis, earum et delectus quas quasi tempora doloribus
              quae officiis expedita amet praesentium suscipit tenetur vero quam
              a illo minus? Officiis voluptatem vero tempore veniam reiciendis
              illum, repellendus dicta quam asperiores ducimus temporibus natus
              consectetur. Fuga dignissimos recusandae repudiandae sint impedit
              nam veritatis voluptate! Et repellendus quaerat ullam excepturi
              laborum ea, molestias voluptas cum fuga ab eius doloribus a cumque
              quae doloremque sed natus nisi odit, dolores nesciunt? Eius
              numquam voluptate animi neque quas, minus officiis sequi ipsam
              recusandae deserunt. Sequi reprehenderit earum adipisci impedit
              tenetur! Excepturi, nostrum. Doloribus ipsum voluptatem amet
              corrupti, ab ipsam quas vitae nesciunt libero architecto.
              Asperiores, ipsam. Quisquam hic dolor rem reprehenderit illo cum
              non ipsa ducimus saepe quae qui laudantium, commodi, molestiae
              deserunt? Possimus, natus placeat praesentium amet fugit quo eaque
              error alias harum modi accusamus molestiae reprehenderit dolorum
              reiciendis optio nesciunt commodi perferendis sint distinctio ut,
              perspiciatis consectetur atque eveniet? Recusandae, magni! Sed
              dolores voluptatem molestias sunt cupiditate error corrupti? Fuga
              temporibus similique harum voluptatibus adipisci fugiat, sint
              tempore animi nobis eos cum minus, ex cupiditate cumque reiciendis
              odit distinctio molestias repellendus pariatur doloribus dolore
              est. Totam ullam nemo cum aut aliquid numquam, ipsam quia!
              Maiores, corrupti sed perferendis doloremque excepturi porro odio
              enim fuga soluta dolor officia sit nisi! Hic architecto, nostrum
              maiores id nesciunt, in sapiente pariatur ducimus nulla cumque
              recusandae dicta consequatur debitis corrupti iure exercitationem,
              saepe assumenda. Dolores, provident repellendus! Laudantium
              sapiente necessitatibus nobis exercitationem, aliquam autem magnam
              velit, atque recusandae fugiat asperiores eum. Eligendi, delectus.
              Accusantium libero iure suscipit neque vitae, officiis saepe
              aliquam fuga delectus. Quibusdam et esse modi maxime officia porro
              explicabo corporis molestiae nulla libero iste doloribus
              excepturi, doloremque aperiam suscipit dolor non optio sed
              voluptatibus ipsam incidunt voluptatum officiis neque. Rerum culpa
              est illo recusandae illum vel dolores rem labore dignissimos!
              Mollitia culpa, dolore, eum tempore voluptas adipisci quaerat
              error, repellat dicta eos vero officiis! Suscipit repellat
              ratione, ipsum ad provident sequi ipsam voluptatem ex tenetur
              dignissimos doloremque accusamus iure laborum placeat distinctio
              debitis saepe deserunt officiis aperiam voluptate praesentium amet
              corrupti. Numquam omnis reiciendis maiores quas doloribus facilis
              quasi. Iste, eligendi veritatis provident repellat in cupiditate
              similique iusto qui dolorem. Cumque dolores id libero corrupti
              optio alias error! Magnam quia beatae aut laudantium repellendus?
              Possimus, eaque placeat. Assumenda quibusdam nemo, cumque ab ex
              temporibus accusantium laudantium earum nam explicabo obcaecati
              similique quos, vero, aperiam voluptas! Ratione at eligendi cumque
              minima optio officiis quos sunt maiores, qui tenetur. Quibusdam
              non inventore nemo obcaecati iste et ut, tenetur saepe, voluptatum
              soluta in, quisquam quod maiores. Natus labore debitis repellendus
              tenetur nesciunt, voluptatum, dolorum, blanditiis reprehenderit
              quia assumenda eum. Aliquam nulla sed quibusdam saepe iusto?
              Itaque quidem voluptas cupiditate quod natus earum nobis enim
              alias doloremque minima possimus nisi fugiat commodi, repellendus
              qui, voluptatum nostrum veniam reiciendis tenetur consectetur
              ullam deleniti. Quis, sint? Molestiae maiores adipisci veritatis
              sit? Necessitatibus quibusdam enim nesciunt saepe, earum
              voluptates sapiente in quod, assumenda quis reiciendis voluptas,
              doloribus iusto minima dignissimos molestiae nobis similique natus
              blanditiis! Voluptas, asperiores, dignissimos odio doloribus a
              veniam vel suscipit atque fuga illum amet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
