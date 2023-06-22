import React, { useState } from 'react';
import FAQ from '../../components/FAQ';
import './styles.css'

const FAQsPage = () => {
  const [faqs, setfaqs] = useState([
    {
      question: 'Am I pregnant?',
      answer: 'The earliest and most reliable sign of pregnancy is a missed period. If you have a regular monthly cycle, normally you get your period about 4 weeks from the start of your last period. About 2 weeks before your period, you ovulate (release an egg). The egg can be fertilised by sperm in the fallopian tubes. If the egg is fertilised, it can implant in the lining of the womb and begin to grow – this is when the pregnancy hormone hCG (human chorionic gonadotrophin) starts to be produced and increases rapidly. This is the hormone that pregnancy tests detect in a positive test.Take a home pregnancy test to find out if you are pregnant, you can do a pregnancy test from the first day you miss your period. Home pregnancy tests are very reliable, but see your GP to be sure and also to start your antenatal care.Early signs and symptoms Many women still feel fine at 4 weeks, but others may notice sore breasts, fatigue, frequent urination, and nausea (feeling sick). Sometimes pregnant women have some very light bleeding, called "spotting", at the time when their period would be due. This is also known as implantation bleeding, which is when the foetus plants itself into the wall of your womb. Spotting is completely normal and does not need any medical treatment. You may be sick or feel sick – this is commonly known as morning sickness, but it can happen at any time of day. If you feel nauseous and cannot keep anything down, contact your GP. You may also notice changes in your breasts. They may become larger and feel tender, like they might do before your period. The veins may show up more and the nipples may darken and stand out. Every woman is different and not all women will notice all these symptoms. If you are eagerly looking out for any hints that you might be pregnant, other early signs of pregnancy include: -needing to pee more often – you may find you have to get up in the night, Being constipated, increased vaginal discharge without any soreness or irritation, feeling tired, having a strange taste in your mouth – many women describe it as metallic, "going off" some things, such as tea, coffee, tobacco smoke or fatty food',
      open: true
    },
    {
      question: 'When do pregnancy cravings start?',
      answer: 'There is not a specific time when pregnancy food cravings start. It is different for every woman – and you may not necessarily have any cravings.If you do start having cravings, it will probably be in your first trimester (it could be as early as 5 weeks into pregnancy). They will get stronger in your second trimester, and then eventually stop in your third trimester. Cravings come in all shapes and sizes. Some women crave fatty foods like chips. Others get pregnancy cravings for things they did not like before they got pregnant, or strange combinations of food such as mars bars with bacon.Try to eat as healthily as possible – keep those unhealthy temptations to a minimum! If you find yourself craving things that are not food, like toothpaste, coal or even soil, speak to your midwife or doctor, as this may be a sign of a vitamin deficiency.',
      open: false
    },
    {
      question: 'How much weight should I gain in pregnancy?',
      answer: 'Weight gain in pregnancy varies from person to person. It also depends on your weight before you become pregnant. Most pregnant women gain between 10kg and 12.5kg (22lb to 26lb), putting on most of the weight after week 20. Much of the extra weight is due to your baby growing, but your body will also be storing fat, ready to make breast milk after your baby is born. Putting on too much or too little weight while you are pregnant can lead to health problems for you or your unborn baby. But do not worry, it is easy to make healthy food choices. Find out what to eat when pregnant and what foods to avoid.',
      open: false
    },
    {
      question: 'What prenatal vitamins should I take?',
      answer: 'You will get most of the vitamins and minerals you need by eating a healthy, varied diet. But when you wre pregnant (and while you are trying to get pregnant) you also need to take a folic acid supplement. To keep bones and muscles healthy, we need vitamin D. From late March/early April to the end of September, most people make enough vitamin D from sunlight on their skin. However, between October and early March we should consider taking a daily vitamin D supplement because we cannot make it from sunlight. Just 10 micrograms a day is all you need – it is the same for kids and grown-ups. Some people should take a vitamin D supplement all year round, find out if this applies to you on the NHS website. Along with the vitamins you should take, there are also some to watch out for and avoid. You should avoid supplements and multivitamins containing vitamin A (retinol) as too much of it can harm your baby development. You should also avoid liver and liver products (including fish liver oil), as they are high in vitamin A. Find out more about vitamins and supplements in pregnancy.',
      open: false
    },
    {
      question: 'How do I stay fit in pregnancy?',
      answer: 'Keeping active and doing exercise while you are pregnant is great for you and your baby. You can keep up your normal level of daily activity and exercise regime, as long as it still feels comfortable. Tips for exercising: - You should be able to hold a conversation while you exercise.- Always warm up and cool down to keep you from pulling any muscles. - Stay hydrated - drink lots of water. You can find online workouts that are safe during pregnancy, check out Sport England: #StayInWorkOut exercises Other good activities to try while pregnant include walking, yoga, pilates, aerobics and pelvic floor exercises. Some exercises, like running and weight training, will need to be modified as your belly grows. The best combination of exercise is aerobic and muscle-strengthening, as this helps you breathe properly and allows to deal with the increased weight you will be carrying around. If you are not already active, try building it into your daily life by taking the stairs, doing housework or gardening. For a few pregnancy exercises, read about exercises for a fitter pregnancy. What to avoid: - Try not to lie on your back for long periods, as your bump will press on a big blood vessel that brings blood back to your heart, which can make you feel faint. - Avoid anything that risks you falling, for example: horse riding, skiing and gymnastics. - Contact sports are not a good idea either – things like squash, tennis, martial arts, football and rugby. where there is a risk of your bump being hit.',
      open: false
    },
    {
      question: 'How should I sleep in pregnancy?',
      answer: 'Depending on how you normally like to snooze, you might have to rethink your favourite position while you are pregnant. If you sleep on your back, it is safe to continue during the first trimester, but as your bump gets bigger and heavier you will need to sleep on your side, so it is best to get into the habit as soon as you can. By the third trimester (after 28 weeks of pregnancy), sleeping on your side is the safest position for your baby as it helps prevent the risk of stillbirth. Do not worry, if your pregnancy is uncomplicated your risk of stillbirth is low (1 in 200 babies are stillborn) and going to sleep on your side will make it even lower. It is ok if you end up in all sorts of positions when you are asleep. The important thing to remember is to fall asleep on your side, as this means you are sleeping safely for your baby. If you wake up on your back, do not be alarmed, just turn onto your side and go back to sleep. Try sleeping on one side with your knees bent, it will help reduce the amount of pressure on your uterus and help you breathe better. Plus, this position can help relieve backache. You can use pillows under your belly, between your legs, and behind your back if you like. You should go to sleep on your side whenever you have a snooze, including: - going to sleep at night, - getting back to sleep, after waking up at night, - daytime naps',
      open: false
    },
    {
      question: 'What happens in an antenatal class?',
      answer: 'Antenatal classes are available to give you and your partner lots of helpful information on labour, birth and early parenthood. They are usually informal, fun and sociable, which makes them a great place to meet other parents-to-be. The friends you make at antenatal classes can become a great support network. You can now find many antenatal courses and workshops online. Antenatal classes usually start 8 to 10 weeks before your baby is born, and happen once a week for about 2 hours. You can choose classes that are just for pregnant women, or classes that welcome a partner or a friend. There are sometimes classes especially designed for single mothers or teenagers. Antenatal classes may include info on: diet: how to stay healthy and have a good diet while you are pregnant exercise: what types of exercise are good for keeping fit in pregnancy labour: what to expect relaxation: how to relax while you are pregnant and after you have had your baby delivery methods: different birth methods and interventions after the birth: how to look after your newborn, and how you can stay healthy emotional wellbeing: how you might feel during and after your pregnancy find an antenatal class near you through the NCT or Our Place online courses.',
      open: false
    },
    {
      question: 'How do I prepare for breastfeeding?',
      answer: 'It is a good idea to read as much as you can about breastfeeding before the birth. This will help you feel more confident and prepared. There is lots of useful information and practical tips in our feeding your baby section. Read about breastfeeding positions, how to express your breast milk, and practical tips on dealing with common breastfeeding issues. If you have any breastfeeding questions, you can always ask the Breastfeeding Friend voice assistant from Start for Life, available on Amazon Alexa, Facebook Messenger and Google Home, 24/7.',
      open: false
    },
    {
      question: 'Should I have the flu vaccine?',
      answer: 'The flu jab is the safest way to help protect pregnant women and their babies against flu, regardless of their stage in pregnancy, or how fit and healthy they feel. Pregnancy naturally weakens the immune system, which means it is harder to fight off infections. As a result, flu can cause serious complications. One of the most common flu complications is bronchitis - a chest infection that can become serious and develop into pneumonia. Read more about the flu jab in pregnancy on the NHS website.',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
      <div className="faqs">
        {faqs.map((faq, i) => (
          // eslint-disable-next-line react/jsx-key
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
    </div>
  );
}

export default FAQsPage;
