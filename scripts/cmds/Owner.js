module.exports = {
  'config': {
    'name': "owner",
    'version': "1.0",
    'author': " Mehedi Hasan",
    'countDown': 0x5,
    'role': 0x0,
    'shortDescription': "admin and info",
    'longDescription': "bot owner info",
    'category': "auto ✅"
  },
  'onStart': async function () {},
  'onStart': async function ({
    event: _0x575d71,
    message: _0x3b0c92,
    getLang: _0x2dbddd,
    usersData: _0xe65319,
    threadsData: _0x31ad81
  }) {
    const _0x67d90d = await _0xe65319.get(_0x575d71.senderID);
    const _0x8f4cd = _0x67d90d.name;
    const _0x826896 = await _0x31ad81.get(_0x575d71.threadID);
    const _0x47034c = _0x826896.threadName;
    const _0x1c250f = new Date();
    const _0x2822cd = {
      'year': "numeric",
      'month': "numeric",
      'day': "numeric"
    };
    const _0x27ce82 = _0x1c250f.toLocaleDateString("en-US", _0x2822cd);
    const _0x3ac793 = _0x1c250f.toLocaleTimeString("en-US", {
      'timeZone': "Asia/Dhaka",
      'hour12': true
    });
    const _0x3b754f = "╔╝❮" + _0x8f4cd + "❯╚╗\n━━━━━━━━━━━━━━━━━━━━━━\n𝐍𝐀𝐌𝐄: 𝕄𝔼ℍ𝔼𝔻𝕀 𝐑𝐀𝐇𝐌𝐀𝐍\n𝐑𝐄𝐋𝐈𝐆𝐈𝐎𝐍: 𝐈𝐒𝐋𝐀𝐌\n𝐀𝐃𝐃𝐑𝐄𝐒𝐒: CUMILLA,𝐁𝐀𝐍𝐆𝐋𝐀𝐃𝐄𝐒𝐇\n𝐆𝐄𝐍𝐃𝐄𝐑: 𝐌𝐀𝐋𝐄\n𝐀𝐆𝐄: 18\n𝐑𝐄𝐋𝐀𝐓𝐈𝐎𝐍𝐒𝐇𝐈𝐏: 𝐅𝐀𝐈𝐋𝐃\n𝐖𝐎𝐑𝐊: 𝐆𝐑𝐎𝐂𝐄𝐑𝐘 𝐒𝐇𝐎𝐏\n𝐆𝐌𝐀𝐈𝐋: mdnazrulislam7t9@gmail.com \n𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊: https://m.me/100049032581944  \n𝐌𝐀𝐒𝐒𝐄𝐍𝐆𝐄𝐑: m.me/100014754734049\n𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏: wa.me/+8801613356376\n𝐈𝐌𝐎: 𝐏𝐄𝐑𝐒𝐎𝐍𝐀𝐋🫣\n𝐓𝐄𝐋𝐄𝐆𝐑𝐀𝐌: t.me/Mehedi_x_hasan\n━━━━━━━━━━━━━━━━━━━━━━\n\nBot Prefix: ( . )\nBot Name: Mehedi BOT\ngc Name: " + _0x47034c + "\nTime:【 " + _0x27ce82 + " || " + _0x3ac793 + " \n━━━━━━━━━━━━━━━━━━━━━━";
    _0x3b0c92.reply({
      'body': _0x3b754f,
      'attachment': await global.utils.getStreamFromURL("https://i.postimg.cc/rpNLdr8k/wgcz9b-1.gif")
    });
  }
};
