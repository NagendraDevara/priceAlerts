var cron = require('node-cron');
const nightmare = require('nightmare')();
require("dotenv/types").config();

var TelegramBot = require('node-telegram-bot-api'),
  // Be sure to replace YOUR_BOT_TOKEN with your actual bot token on this line.
  telegram = new TelegramBot(process.env.API, { polling: true });

telegram.on("text", (message) => {
  console.log(message.chat.id + 'd');

  if (message.text == 'how are you') {
    telegram.sendMessage(message.chat.id, "Im fine thankyou");
  } else {
    telegram.sendMessage(message.chat.id, "Hello India");
  }

});


cron.schedule('*/10 * * * * *', async () => {
    console.log(process.env.API);

  try {
    let priceString = await nightmare.goto('https://www.google.com/search?sxsrf=ALeKk021K5TJfs1pFIoWZBjw8FqeDenUNA%3A1584443179707&ei=K69wXs_XKoKprtoPpM-e0AU&q=gold+rate&oq=gold+&gs_l=psy-ab.3.1.35i39l3j0i10i67j0i67l3j0i131i67j0i67j0i273.2651.5100..6224...1.4..0.152.658.0j5......0....1..gws-wiz.....10..0i71j35i362i39j0j0i131.CguFFtP-ynU')
      .wait(".vlzY6d")
      .evaluate(() => document.getElementsByClassName("vlzY6d")[0].innerText);
    let rythuBazar = await nightmare.goto('http://183.82.5.184/rbzts/DailyPrices.aspx')
      .wait("#ctl00_ContentPlaceHolder1_GridView1 > tbody > tr:nth-child(6) > td:nth-child(3)")
      .evaluate(() => document.querySelector("#ctl00_ContentPlaceHolder1_GridView1 > tbody > tr:nth-child(6) > td:nth-child(3)").innerText);
    let price = await nightmare.goto('http://183.82.5.184/rbzts/DailyPrices.aspx')
      .wait("#ctl00_ContentPlaceHolder1_GridView1 > tbody > tr:nth-child(6) > td:nth-child(3)")
      .evaluate(() => document.querySelector("#ctl00_ContentPlaceHolder1_GridView1 > tbody > tr:nth-child(6) > td:nth-child(5)").innerText);
    // for(let i=1;i<=2;i++){
    //   console.log(i);
    // }
    priceString = `${priceString}   
    ${rythuBazar} - ${price}`;

    if (priceString) {
      telegram.sendMessage(741209294, priceString);
    }
    // console.log(priceString+'jfskdh');
  } catch (error) {
    console.log(error);

  }


});
