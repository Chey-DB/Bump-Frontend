import React from "react";
import "./styles.css";
// import Accordion from '../../components/Accordion'

const FAQsPage = () => {
  const accordionButton = () => {
    // Get all accordion buttons
    let accordions = Accordion.getElementsByClassName("accordion");

    // Attach click event listener to each accordion button
    for (let i = 0; i < accordions.length; i++) {
      accordions[i].addEventListener("click", function () {
        this.classNameList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    }
  };

  return (
    <>
      {/* <button 
      className="accordion" 
      onClick={accordionButton}>Section 1
  <div className="panel">
  <p>Content for section 1...</p>
</div>
</button>
<button className="accordion" onClick={accordionButton}>Section 2</button>
<div className="panel">
  <p>Content for section 2...</p>
</div>
<button className="accordion" onClick={accordionButton}>Section 3</button>
<div className="panel">
  <p>Content for section 3...</p>
</div> */}
      <div className="containerFaqs">
        <div id="accordion">
          <div className="row">
            <div className="card">
              <div className="card-header">
                <a
                  className="btn"
                  data-bs-toggle="collapse"
                  href="#collapseOne"
                >
                  <strong>Am I pregnant?</strong>
                </a>
              </div>
              <div
                id="collapseOne"
                className="collapse show"
                data-bs-parent="#accordion"
              >
                <div className="card-body">
                  <p>
                    The earliest and most reliable sign of pregnancy is a missed
                    period. If you have a regular monthly cycle, normally you
                    get your period about 4 weeks from the start of your last
                    period.
                    <br />
                    <strong>Take a home pregnancy test</strong>
                    <br />
                    To find out if you're pregnant, you can do a pregnancy test
                    from the first day you miss your period. Home pregnancy
                    tests are very reliable, but see your GP to be sure and also
                    to start your antenatal care.
                    <br />
                    <strong>Early signs and symptoms</strong>
                    <br />
                    Many women still feel fine at 4 weeks, but others may notice
                    sore breasts, fatigue, frequent urination, and nausea
                    (feeling sick). Sometimes pregnant women have some very
                    light bleeding, called "spotting", at the time when their
                    period would be due. This is also known as implantation
                    bleeding, which is when the foetus plants itself into the
                    wall of your womb. Spotting is completely normal and does
                    not need any medical treatment. You may be sick or feel sick
                    – this is commonly known as morning sickness, but it can
                    happen at any time of day. If you feel nauseous and can't
                    keep anything down, contact your GP. You may also notice
                    changes in your breasts. They may become larger and feel
                    tender, like they might do before your period. The veins may
                    show up more and the nipples may darken and stand out. Every
                    woman is different and not all women will notice all these
                    symptoms. If you're eagerly looking out for any hints that
                    you might be pregnant, other early signs of pregnancy
                    include:
                  </p>

                  <li>
                    needing to pee more often – you may find you have to get up
                    in the night
                  </li>
                  <li>being constipated</li>
                  <li>
                    increased vaginal discharge without any soreness or
                    irritation
                  </li>
                  <li>feeling tired</li>
                  <li>
                    having a strange taste in your mouth – many women describe
                    it as metallic
                  </li>
                  <li>
                    "going off" some things, such as tea, coffee, tobacco smoke
                    or fatty food
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <a
                className="collapsed btn"
                data-bs-toggle="collapse"
                href="#collapseTwo"
              >
                When do pregnancy cravings start?
              </a>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              data-bs-parent="#accordion"
            >
              <div className="card-body">
                <p>
                  There isn't a specific time when pregnancy food cravings
                  start. It's different for every woman – and you may not
                  necessarily have any cravings. If you do start having
                  cravings, it'll probably be in your first trimester (it could
                  be as early as 5 weeks into pregnancy). They'll get stronger
                  in your second trimester, and then eventually stop in your
                  third trimester. Cravings come in all shapes and sizes. Some
                  women crave fatty foods like chips. Others get pregnancy
                  cravings for things they didn't like before they got pregnant,
                  or strange combinations of food such as mars bars with bacon.
                  Try to eat as healthily as possible – keep those unhealthy
                  temptations to a minimum! If you find yourself craving things
                  that aren't food, like toothpaste, coal or even soil, speak to
                  your midwife or doctor, as this may be a sign of a vitamin
                  deficiency.
                </p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <a
                className="collapsed btn"
                data-bs-toggle="collapse"
                href="#collapseThree"
              >
                How much weight should I gain in pregnancy?
              </a>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              data-bs-parent="#accordion"
            >
              <div className="card-body">
                <p>
                  Weight gain in pregnancy varies from person to person. It also
                  depends on your weight before you become pregnant. Most
                  pregnant women gain between 10kg and 12.5kg (22lb to 26lb),
                  putting on most of the weight after week 20. Much of the extra
                  weight is due to your baby growing, but your body will also be
                  storing fat, ready to make breast milk after your baby is
                  born. Putting on too much or too little weight while you're
                  pregnant can lead to health problems for you or your unborn
                  baby. But don't worry, it's easy to make healthy food choices.
                  Find out what to eat when pregnant and what foods to avoid.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <a
                className="collapsed btn"
                data-bs-toggle="collapse"
                href="#collapseFour"
              >
                What prenatal vitamins should I take?
              </a>
            </div>
            <div
              id="collapseFour"
              className="collapse"
              data-bs-parent="#accordion"
            >
              <div className="card-body">
                <p>
                  You'll get most of the vitamins and minerals you need by
                  eating a healthy, varied diet. But when you're pregnant (and
                  while you are trying to get pregnant) you also need to take a
                  folic acid supplement. To keep bones and muscles healthy, we
                  need vitamin D. From late March/early April to the end of
                  September, most people make enough vitamin D from sunlight on
                  their skin. However, between October and early March we should
                  consider taking a daily vitamin D supplement because we cannot
                  make it from sunlight. Just 10 micrograms a day is all you
                  need – it's the same for kids and grown-ups. Some people
                  should take a vitamin D supplement all year round, find out if
                  this applies to you on the NHS website. Along with the
                  vitamins you should take, there are also some to watch out for
                  and avoid. You should avoid supplements and multivitamins
                  containing vitamin A (retinol) – as too much of it can harm
                  your baby's development. You should also avoid liver and liver
                  products (including fish liver oil), as they are high in
                  vitamin A. Find out more about vitamins and supplements in
                  pregnancy.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <a
                className="collapsed btn"
                data-bs-toggle="collapse"
                href="#collapseFive"
              >
                How do I stay fit in pregnancy?
              </a>
            </div>
            <div
              id="collapseFive"
              className="collapse"
              data-bs-parent="#accordion"
            >
              <div className="card-body">
                <p>
                  Keeping active and doing exercise while you're pregnant is
                  great for you and your baby. You can keep up your normal level
                  of daily activity and exercise regime, as long as it still
                  feels comfortable. Tips for exercising You should be able to
                  hold a conversation while you exercise. Always warm up and
                  cool down to keep you from pulling any muscles. Stay hydrated
                  - drink lots of water. You can find online workouts that are
                  safe during pregnancy, check out Sport England's
                  #StayInWorkOut exercises (scroll to the pregnancy section).
                  Other good activities to try while pregnant include walking,
                  yoga, pilates, aerobics and pelvic floor exercises. Some
                  exercises, like running and weight training, will need to be
                  modified as your belly grows. The best combination of exercise
                  is aerobic and muscle-strengthening, as this helps you breathe
                  properly and allows to deal with the increased weight you'll
                  be carrying around. If you're not already active, try building
                  it into your daily life by taking the stairs, doing housework
                  or gardening. For a few pregnancy exercises, read about
                  exercises for a fitter pregnancy. What to avoid Try not to lie
                  on your back for long periods, as your bump will press on a
                  big blood vessel that brings blood back to your heart, which
                  can make you feel faint. Avoid anything that risks you
                  falling, for example: horse riding, skiing and gymnastics.
                  Contact sports are not a good idea either – things like
                  squash, tennis, martial arts, football and rugby. where
                  there's a risk of your bump being hit.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <a
                className="collapsed btn"
                data-bs-toggle="collapse"
                href="#collapseSix"
              >
                How should I sleep in pregnancy?
              </a>
            </div>
            <div
              id="collapseSix"
              className="collapse"
              data-bs-parent="#accordion"
            >
              <div className="card-body">
                <p>
                  Depending on how you normally like to snooze, you might have
                  to rethink your favourite position while you're pregnant. If
                  you sleep on your back, it's safe to continue during the first
                  trimester, but as your bump gets bigger and heavier you'll
                  need to sleep on your side, so it's best to get into the habit
                  as soon as you can. By the third trimester (after 28 weeks of
                  pregnancy), sleeping on your side is the safest position for
                  your baby as it helps prevent the risk of stillbirth. Don't
                  worry, if your pregnancy is uncomplicated your risk of
                  stillbirth is low (1 in 200 babies are stillborn) and going to
                  sleep on your side will make it even lower. It's ok if you end
                  up in all sorts of positions when you are asleep. The
                  important thing to remember is to fall asleep on your side, as
                  this means you are sleeping safely for your baby. If you wake
                  up on your back, don't be alarmed, just turn onto your side
                  and go back to sleep. Try sleeping on one side with your knees
                  bent, it'll help reduce the amount of pressure on your uterus
                  and help you breathe better. Plus, this position can help
                  relieve backache. You can use pillows under your belly,
                  between your legs, and behind your back if you like. You
                  should go to sleep on your side whenever you have a snooze,
                  including: going to sleep at night getting back to sleep,
                  after waking up at night daytime naps
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <a
                className="collapsed btn"
                data-bs-toggle="collapse"
                href="#collapseSeven"
              >
                What happens in an antenatal className?
              </a>
            </div>
            <div
              id="collapseSeven"
              className="collapse"
              data-bs-parent="#accordion"
            >
              <div className="card-body">
                <p>
                  Antenatal classNamees are available to give you and your
                  partner lots of helpful information on labour, birth and early
                  parenthood. They're usually informal, fun and sociable, which
                  makes them a great place to meet other parents-to-be. The
                  friends you make at antenatal classNamees can become a great
                  support network. You can now find many antenatal courses and
                  workshops online. Antenatal classNamees usually start 8 to 10
                  weeks before your baby is born, and happen once a week for
                  about 2 hours. You can choose classNamees that are just for
                  pregnant women, or classNamees that welcome a partner or a
                  friend. There are sometimes classNamees especially designed
                  for single mothers or teenagers. Antenatal classNamees may
                  include info on: diet: how to stay healthy and have a good
                  diet while you're pregnant exercise: what types of exercise
                  are good for keeping fit in pregnancy labour: what to expect
                  relaxation: how to relax while you're pregnant and after
                  you've had your baby delivery methods: different birth methods
                  and interventions after the birth: how to look after your
                  newborn, and how you can stay healthy emotional wellbeing: how
                  you might feel during and after your pregnancy Find an
                  antenatal className near you through the NCT or Our Place
                  online courses.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <a
                className="collapsed btn"
                data-bs-toggle="collapse"
                href="#collapseEight"
              >
                What are the different types of breast pump?
              </a>
            </div>
            <div
              id="collapseEight"
              className="collapse"
              data-bs-parent="#accordion"
            >
              <div className="card-body">
                <p>
                  There are 2 different types of breast pump: electric and
                  manual. They're both designed to mimic the sucking action your
                  baby makes when they're breastfeeding. Manual breast pumps
                  When you use a manual pump, you squeeze the plunger by hand.
                  This type of pump takes a bit longer to use than an electric
                  pump but is: cheaper than an electric pump simple to use
                  lightweight quiet Electric breast pumps An electric pump does
                  the hard work for you. This type of pump is quicker than using
                  a manual pump, but can be noisy and more expensive. Mums often
                  say that a manual breast pump is better if you're only
                  expressing occasionally, while an electric pump is more
                  efficient if you need to express milk quickly and often, for
                  example if you've gone back to work.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <a
                className="collapsed btn"
                data-bs-toggle="collapse"
                href="#collapseNine"
              >
                How do I prepare for breastfeeding?
              </a>
            </div>
            <div
              id="collapseNine"
              className="collapse"
              data-bs-parent="#accordion"
            >
              <div className="card-body">
                <p>
                  It's a good idea to read as much as you can about
                  breastfeeding before the birth. This will help you feel more
                  confident and prepared. There is lots of useful information
                  and practical tips in our feeding your baby section. Read
                  about breastfeeding positions, how to express your breast
                  milk, and practical tips on dealing with common breastfeeding
                  issues. If you have any breastfeeding questions, you can
                  always ask the Breastfeeding Friend voice assistant from Start
                  for Life, available on Amazon Alexa, Facebook Messenger and
                  Google Home, 24/7.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <a
                className="collapsed btn"
                data-bs-toggle="collapse"
                href="#collapseTen"
              >
                Which type of baby bottle should I buy?
              </a>
            </div>
            <div
              id="collapseTen"
              className="collapse"
              data-bs-parent="#accordion"
            >
              <div className="card-body">
                <p>
                  If you're giving your baby expressed or formula milk, you'll
                  need to buy some bottles. The choice of baby bottles can be
                  overwhelming as there are quite a few options. When you start
                  bottle feeding, don't buy loads as your baby may not
                  necessarily like the ones you've chosen. Better to start off
                  with a few and, if your baby approves, you can always buy
                  more. Examples of bottle types Standard: widely available, and
                  the least expensive option. Wide-necked: easier to clean, but
                  take up more space. Anti-colic: reduce the amount of air your
                  baby takes in while they're drinking. Shaped: some bottles
                  come with holes in the middle or special handles to make them
                  easier for your baby to hold. Heat-sensitive: change colour if
                  the milk is too hot. Self-sterilising: you just need a
                  microwave to sterilise these bottles. Disposable: sterilised
                  bags that fit inside bottles and are thrown away after feeds.
                  Glass: more environmentally friendly than plastic bottles, but
                  more breakable. Teats You can choose between silicone and
                  latex teats for most of these bottle types. Silicone is more
                  durable, while latex is softer and more flexible, but needs to
                  be replaced more often. The teats come in a bell shape, or a
                  bulbous shape that's designed to feel more like a nipple. You
                  might want to try both shapes when your baby first starts
                  bottle feeding to see which one they prefer. The teats often
                  come with different flow rates. To find out which flow rate is
                  best for your baby takes a bit of trial and error. If they're
                  spluttering or choking with their current bottle, they need a
                  slower flow. But if they're sucking quite hard and seem to be
                  getting frustrated while they're feeding, you might want to
                  try a faster flow. You can also get variflow teats – some of
                  these can be manually adjusted, while others automatically
                  increase in flow as your baby's sucking gets stronger.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <a
                className="collapsed btn"
                data-bs-toggle="collapse"
                href="#collapseEleven"
              >
                What is a birth plan?
              </a>
            </div>
            <div
              id="collapseEleven"
              className="collapse"
              data-bs-parent="#accordion"
            >
              <div className="card-body">
                <p>
                  A birth plan is a way of letting your midwife, nurses and
                  doctors know what you want to happen during your labour. It's
                  a chance to plan things like where you want to give birth,
                  who's going to be with you during the birth, and what
                  facilities you'd like to use. If you're concerned about how
                  coronavirus might affect your birth plan, visit the Royal
                  College of Obstetricians and Gynaecologists for the most
                  up-to-date advice. It's important to remember that giving
                  birth doesn't always go perfectly to plan, and things may have
                  to change at the last minute (but your midwife will be there
                  to help you make the best and safest decision for you and your
                  baby). Things to think about Where do you want to give birth?
                  This could be at home, in a midwifery unit or in hospital. Do
                  you want someone with you during the birth, such as your
                  partner or a family member? If you need a forceps or vacuum
                  delivery, would you want someone with you? If a caesarean is
                  necessary, do you want someone with you? What birthing
                  equipment do you want to use? This could include mats or
                  beanbags. Do you want to use any special facilities, such as a
                  birthing pool? Do you want to keep active during labour? What
                  position would you prefer to be in while you're in labour? Do
                  you want immediate skin-to-skin contact with your baby, before
                  the cord is cut? Are you happy for midwives, nurses and
                  doctors in training to be present during your labour? What are
                  your pain relief preferences? How do you want to feed your
                  baby? Can your baby be given vitamin K if they need it? You
                  can download an NHS birth plan template. While you're writing
                  your birth plan, talk to your midwife about your choices so
                  they understand and can advise you.
                </p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <a
                className="collapsed btn"
                data-bs-toggle="collapse"
                href="#collapseTwelve"
              >
                Should I have the flu vaccine?
              </a>
            </div>
            <div
              id="collapseTwelve"
              className="collapse"
              data-bs-parent="#accordion"
            >
              <div className="card-body">
                <p>
                  The flu jab is the safest way to help protect pregnant women
                  and their babies against flu, regardless of their stage in
                  pregnancy, or how fit and healthy they feel. Pregnancy
                  naturally weakens the immune system, which means it's harder
                  to fight off infections. As a result, flu can cause serious
                  complications. One of the most common flu complications is
                  bronchitis - a chest infection that can become serious and
                  develop into pneumonia. Read more about the flu jab in
                  pregnancy on the NHS website.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQsPage;
