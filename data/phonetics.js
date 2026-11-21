// British RP IPA Phonetics, -ed Sound Shifts, 60 Irregular Verbs & Ear-Training Quiz Dataset
window.PHONETICS_DATA = {
  ipaGroups: [
    {
      id: 'monophthongs',
      title: '12 个单元音（重点攻「长短对比」与弱读 /ə/）',
      desc: '英音里带 ː 的长元音不只是拖长，口型也更紧；/ə/ 是听力头号杀手，几乎所有非重读音节都会弱化成它。',
      items: [
        { sym: '/iː/', kind: '长元音', pair: '/ɪ/', label: '嘴角向两边拉紧，长发“衣”', examples: [{ w: 'sheep', ipa: '/ʃiːp/', zh: '绵羊' }, { w: 'leave', ipa: '/liːv/', zh: '离开' }, { w: 'marine', ipa: '/məˈriːn/', zh: '海洋的' }], tts: 'sheep, leave, marine' },
        { sym: '/ɪ/', kind: '短元音', pair: '/iː/', label: '嘴唇放松微张，短促轻发（介于衣和诶）', examples: [{ w: 'ship', ipa: '/ʃɪp/', zh: '船' }, { w: 'live', ipa: '/lɪv/', zh: '居住' }, { w: 'sit', ipa: '/sɪt/', zh: '坐' }], tts: 'ship, live, sit' },
        { sym: '/uː/', kind: '长元音', pair: '/ʊ/', label: '双唇收圆前突，长发“乌”', examples: [{ w: 'fool', ipa: '/fuːl/', zh: '傻瓜' }, { w: 'food', ipa: '/fuːd/', zh: '食物' }, { w: 'mood', ipa: '/muːd/', zh: '情绪' }], tts: 'fool, food, mood' },
        { sym: '/ʊ/', kind: '短元音', pair: '/uː/', label: '嘴唇微圆放松，短促发“乌”', examples: [{ w: 'full', ipa: '/fʊl/', zh: '满的' }, { w: 'foot', ipa: '/fʊt/', zh: '脚' }, { w: 'took', ipa: '/tʊk/', zh: '拿（过去式）' }], tts: 'full, foot, took' },
        { sym: '/ɔː/', kind: '长元音', pair: '/ɒ/', label: '嘴张圆略收拢，长发“奥”（英音不卷舌）', examples: [{ w: 'caught', ipa: '/kɔːt/', zh: '抓住（过去式）' }, { w: 'bought', ipa: '/bɔːt/', zh: '买（过去式）' }, { w: 'thought', ipa: '/θɔːt/', zh: '想（过去式）' }], tts: 'caught, bought, thought' },
        { sym: '/ɒ/', kind: '短元音', pair: '/ɔː/', label: '英音特色短“奥”，口张大、短促有力', examples: [{ w: 'cot', ipa: '/kɒt/', zh: '婴儿床' }, { w: 'got', ipa: '/ɡɒt/', zh: '得到（过去式）' }, { w: 'hot', ipa: '/hɒt/', zh: '热的' }], tts: 'cot, got, hot' },
        { sym: '/ɑː/', kind: '长元音', pair: '/ʌ/', label: '口腔后部打开，长发“啊”（英音 car 不卷舌）', examples: [{ w: 'heart', ipa: '/hɑːt/', zh: '心脏' }, { w: 'fast', ipa: '/fɑːst/', zh: '快的' }, { w: 'dark', ipa: '/dɑːk/', zh: '黑暗的' }], tts: 'heart, fast, dark' },
        { sym: '/ʌ/', kind: '短元音', pair: '/ɑː/', label: '下巴微落、短促发“啊”', examples: [{ w: 'hut', ipa: '/hʌt/', zh: '小屋' }, { w: 'cut', ipa: '/kʌt/', zh: '切' }, { w: 'done', ipa: '/dʌn/', zh: '完成（过去分词）' }], tts: 'hut, cut, done' },
        { sym: '/ɜː/', kind: '长元音', pair: '/ə/', label: '舌身放平，英音不卷舌长发“额”', examples: [{ w: 'heard', ipa: '/hɜːd/', zh: '听见（过去式）' }, { w: 'work', ipa: '/wɜːk/', zh: '工作' }, { w: 'learn', ipa: '/lɜːn/', zh: '学习' }], tts: 'heard, work, learn' },
        { sym: '/ə/', kind: '弱读音 ⭐', pair: '/ɜː/', label: '【听力头号杀手 Schwa】极轻极短的“额”，一切非重读音节归宿', examples: [{ w: 'about', ipa: '/əˈbaʊt/', zh: '关于' }, { w: 'teacher', ipa: '/ˈtiːtʃə/', zh: '老师' }, { w: 'correlation', ipa: '/ˌkɒrəˈleɪʃən/', zh: '相关性' }], tts: 'about, teacher, correlation' },
        { sym: '/e/', kind: '短元音', pair: '/æ/', label: '嘴微张一指宽，短促发“诶”（said/read 过去式都是它！）', examples: [{ w: 'bed', ipa: '/bed/', zh: '床' }, { w: 'said', ipa: '/sed/', zh: '说（过去式）' }, { w: 'meant', ipa: '/ment/', zh: '意味着（过去式）' }], tts: 'bed, said, meant' },
        { sym: '/æ/', kind: '短元音', pair: '/e/', label: '【梅花音】嘴角向两侧拉开、下巴压低发“哎”', examples: [{ w: 'bad', ipa: '/bæd/', zh: '坏的' }, { w: 'man', ipa: '/mæn/', zh: '男人' }, { w: 'ran', ipa: '/ræn/', zh: '跑（过去式）' }], tts: 'bad, man, ran' }
      ]
    },
    {
      id: 'diphthongs',
      title: '8 个双元音（前重后轻，滑动饱满）',
      desc: '双元音要从第一个音滑到第二个音，发饱满才能和单元音拉开差距（如 say /seɪ/ vs said /sed/）。',
      items: [
        { sym: '/eɪ/', kind: '合口双元音', pair: '/e/', label: '从 /e/ 滑向 /ɪ/，饱满“诶衣”', examples: [{ w: 'say', ipa: '/seɪ/', zh: '说（原形）' }, { w: 'take', ipa: '/teɪk/', zh: '拿' }, { w: 'break', ipa: '/breɪk/', zh: '打破' }], tts: 'say, take, break' },
        { sym: '/aɪ/', kind: '合口双元音', pair: '', label: '从 /a/ 滑向 /ɪ/，“爱”', examples: [{ w: 'spike', ipa: '/spaɪk/', zh: '激增' }, { w: 'find', ipa: '/faɪnd/', zh: '找到' }, { w: 'drive', ipa: '/draɪv/', zh: '开车' }], tts: 'spike, find, drive' },
        { sym: '/ɔɪ/', kind: '合口双元音', pair: '', label: '从 /ɔ/ 滑向 /ɪ/，“奥衣”', examples: [{ w: 'void', ipa: '/vɔɪd/', zh: '空虚' }, { w: 'choice', ipa: '/tʃɔɪs/', zh: '选择' }, { w: 'noise', ipa: '/nɔɪz/', zh: '噪音' }], tts: 'void, choice, noise' },
        { sym: '/əʊ/', kind: '合口双元音', pair: '/ɔː/', label: '英音标志音！从 /ə/ 滑向 /ʊ/（不要读成中文“欧”）', examples: [{ w: 'spoke', ipa: '/spəʊk/', zh: '说（过去式）' }, { w: 'chose', ipa: '/tʃəʊz/', zh: '选择（过去式）' }, { w: 'exposure', ipa: '/ɪkˈspəʊʒə/', zh: '接触/暴露' }], tts: 'spoke, chose, exposure' },
        { sym: '/aʊ/', kind: '合口双元音', pair: '', label: '大嘴 /a/ 滑向收圆 /ʊ/，“奥乌”', examples: [{ w: 'found', ipa: '/faʊnd/', zh: '找到（过去式）' }, { w: 'loud', ipa: '/laʊd/', zh: '大声的' }, { w: 'out', ipa: '/aʊt/', zh: '出去' }], tts: 'found, loud, out' },
        { sym: '/ɪə/', kind: '集中双元音', pair: '', label: '从 /ɪ/ 滑向轻柔 /ə/（英音不卷舌）', examples: [{ w: 'hear', ipa: '/hɪə/', zh: '听见（原形）' }, { w: 'clear', ipa: '/klɪə/', zh: '清晰的' }, { w: 'near', ipa: '/nɪə/', zh: '近的' }], tts: 'hear, clear, near' },
        { sym: '/eə/', kind: '集中双元音', pair: '', label: '从 /e/ 滑向 /ə/（英音不卷舌）', examples: [{ w: 'wear', ipa: '/weə/', zh: '穿' }, { w: 'share', ipa: '/ʃeə/', zh: '分享' }, { w: 'care', ipa: '/keə/', zh: '关心' }], tts: 'wear, share, care' },
        { sym: '/ʊə/', kind: '集中双元音', pair: '', label: '从 /ʊ/ 滑向 /ə/（现代英音常趋近 /ɔː/）', examples: [{ w: 'tour', ipa: '/tʊə/', zh: '旅行' }, { w: 'pure', ipa: '/pjʊə/', zh: '纯粹的' }, { w: 'cure', ipa: '/kjʊə/', zh: '治愈' }], tts: 'tour, pure, cure' }
      ]
    },
    {
      id: 'voiced_pairs',
      title: '16 个清浊辅音配对（决定 -ed 与 -s 读音的钥匙！）',
      desc: '成对记：口型完全一样，唯一区别是声带震不震。清辅音后 -ed 读 /t/；浊辅音后 -ed 读 /d/（/t, d/ 除外，后接 -ed 读 /ɪd/）。',
      items: [
        { sym: '/p/', kind: '清辅音 (-ed→/t/)', pair: '/b/', label: '双唇爆破，只送气不震声带', examples: [{ w: 'stop', ipa: '/stɒp/', zh: '停止' }, { w: 'stopped', ipa: '/stɒpt/', zh: '停止了' }], tts: 'stop, stopped' },
        { sym: '/b/', kind: '浊辅音 (-ed→/d/)', pair: '/p/', label: '双唇爆破，声带震动', examples: [{ w: 'grab', ipa: '/ɡræb/', zh: '抓住' }, { w: 'grabbed', ipa: '/ɡræbd/', zh: '抓住了' }], tts: 'grab, grabbed' },
        { sym: '/t/', kind: '清辅音 (-ed→/ɪd/)', pair: '/d/', label: '舌尖抵上齿龈爆破，不震声带；结尾加 -ed 多一音节 /ɪd/', examples: [{ w: 'start', ipa: '/stɑːt/', zh: '开始' }, { w: 'started', ipa: '/ˈstɑːtɪd/', zh: '开始了' }], tts: 'start, started' },
        { sym: '/d/', kind: '浊辅音 (-ed→/ɪd/)', pair: '/t/', label: '舌尖抵上齿龈震动声带；结尾加 -ed 多一音节 /ɪd/', examples: [{ w: 'need', ipa: '/niːd/', zh: '需要' }, { w: 'needed', ipa: '/ˈniːdɪd/', zh: '需要了' }], tts: 'need, needed' },
        { sym: '/k/', kind: '清辅音 (-ed→/t/)', pair: '/ɡ/', label: '舌后抬起爆破，不震声带', examples: [{ w: 'work', ipa: '/wɜːk/', zh: '工作' }, { w: 'worked', ipa: '/wɜːkt/', zh: '工作了' }], tts: 'work, worked' },
        { sym: '/ɡ/', kind: '浊辅音 (-ed→/d/)', pair: '/k/', label: '舌后抬起，声带震动', examples: [{ w: 'drag', ipa: '/dræɡ/', zh: '拖拉' }, { w: 'dragged', ipa: '/dræɡd/', zh: '拖拉了' }], tts: 'drag, dragged' },
        { sym: '/f/', kind: '清辅音 (-ed→/t/)', pair: '/v/', label: '上齿轻咬下唇送气（注意 gh 也常发 /f/！）', examples: [{ w: 'laugh', ipa: '/lɑːf/', zh: '笑' }, { w: 'laughed', ipa: '/lɑːft/', zh: '笑了' }], tts: 'laugh, laughed' },
        { sym: '/v/', kind: '浊辅音 (-ed→/d/)', pair: '/f/', label: '上齿轻咬下唇，声带震动（绝不是 /w/！）', examples: [{ w: 'live', ipa: '/lɪv/', zh: '居住' }, { w: 'lived', ipa: '/lɪvd/', zh: '居住过' }], tts: 'live, lived' },
        { sym: '/s/', kind: '清辅音 (-ed→/t/)', pair: '/z/', label: '舌尖近齿龈嘶嘶送气', examples: [{ w: 'miss', ipa: '/mɪs/', zh: '错过' }, { w: 'missed', ipa: '/mɪst/', zh: '错过了' }], tts: 'miss, missed' },
        { sym: '/z/', kind: '浊辅音 (-ed→/d/)', pair: '/s/', label: '同 /s/ 口型，声带像蜜蜂嗡嗡震动', examples: [{ w: 'expose', ipa: '/ɪkˈspəʊz/', zh: '暴露' }, { w: 'exposed', ipa: '/ɪkˈspəʊzd/', zh: '暴露了' }], tts: 'expose, exposed' },
        { sym: '/θ/', kind: '清辅音 (-ed→/t/)', pair: '/ð/', label: '【清咬舌】舌尖轻伸上下齿间吹气，绝不读 /s/', examples: [{ w: 'think', ipa: '/θɪŋk/', zh: '思考' }, { w: 'three', ipa: '/θriː/', zh: '三' }], tts: 'think, three' },
        { sym: '/ð/', kind: '浊辅音 (-ed→/d/)', pair: '/θ/', label: '【浊咬舌】舌尖在齿间且声带震动（the/this/they）', examples: [{ w: 'they', ipa: '/ðeɪ/', zh: '他们' }, { w: 'breathe', ipa: '/briːð/', zh: '呼吸' }], tts: 'they, breathe' },
        { sym: '/ʃ/', kind: '清辅音 (-ed→/t/)', pair: '/ʒ/', label: '双唇略撅，“嘘”的送气音', examples: [{ w: 'finish', ipa: '/ˈfɪnɪʃ/', zh: '完成' }, { w: 'finished', ipa: '/ˈfɪnɪʃt/', zh: '完成了' }], tts: 'finish, finished' },
        { sym: '/ʒ/', kind: '浊辅音 (-ed→/d/)', pair: '/ʃ/', label: '同 /ʃ/ 口型，声带震动（-sure/-sion 高频音）', examples: [{ w: 'measure', ipa: '/ˈmeʒə/', zh: '测量' }, { w: 'exposure', ipa: '/ɪkˈspəʊʒə/', zh: '暴露' }], tts: 'measure, exposure' },
        { sym: '/tʃ/', kind: '清辅音 (-ed→/t/)', pair: '/dʒ/', label: '双唇微撅有力爆破“吃”', examples: [{ w: 'watch', ipa: '/wɒtʃ/', zh: '观看' }, { w: 'watched', ipa: '/wɒtʃt/', zh: '看过了' }], tts: 'watch, watched' },
        { sym: '/dʒ/', kind: '浊辅音 (-ed→/d/)', pair: '/tʃ/', label: '同 /tʃ/ 口型，声带震动', examples: [{ w: 'judge', ipa: '/dʒʌdʒ/', zh: '评判' }, { w: 'judged', ipa: '/dʒʌdʒd/', zh: '被评判' }], tts: 'judge, judged' }
      ]
    },
    {
      id: 'other_consonants',
      title: '8 个鼻音、边音与半元音（全是浊音，加 -ed 统统读 /d/）',
      desc: '这 8 个辅音除了 /h/ 不出现在词尾外，其余出现在词尾时全带声带震动，因此后接 -ed 全部读 /d/。',
      items: [
        { sym: '/m/', kind: '鼻音 (-ed→/d/)', pair: '', label: '双唇紧闭从鼻腔发声', examples: [{ w: 'seem', ipa: '/siːm/', zh: '似乎' }, { w: 'seemed', ipa: '/siːmd/', zh: '似乎是' }], tts: 'seem, seemed' },
        { sym: '/n/', kind: '鼻音 (-ed→/d/)', pair: '/ŋ/', label: '舌尖顶上齿龈，从鼻腔发声', examples: [{ w: 'plan', ipa: '/plæn/', zh: '计划' }, { w: 'planned', ipa: '/plænd/', zh: '计划了' }], tts: 'plan, planned' },
        { sym: '/ŋ/', kind: '后鼻音 (-ed→/d/)', pair: '/n/', label: '舌后抬起贴软腭，发 -ng（不发 /g/ 尾音！）', examples: [{ w: 'emerging', ipa: '/ɪˈmɜːdʒɪŋ/', zh: '显现的' }, { w: 'long', ipa: '/lɒŋ/', zh: '长的' }], tts: 'emerging, long' },
        { sym: '/l/', kind: '边音 (-ed→/d/)', pair: '/r/', label: '词首清晰舌尖抵龈（light），词尾舌根略抬（call）', examples: [{ w: 'call', ipa: '/kɔːl/', zh: '称呼' }, { w: 'called', ipa: '/kɔːld/', zh: '称为' }], tts: 'call, called' },
        { sym: '/r/', kind: '卷舌音', pair: '/l/', label: '舌尖微卷不碰上颚；英音只在元音前发 /r/，词尾不卷舌', examples: [{ w: 'right', ipa: '/raɪt/', zh: '正确的' }, { w: 'read', ipa: '/riːd/', zh: '阅读' }], tts: 'right, read' },
        { sym: '/h/', kind: '声门摩擦音', pair: '', label: '轻松哈气，无声带震动', examples: [{ w: 'habit', ipa: '/ˈhæbɪt/', zh: '习惯' }, { w: 'harm', ipa: '/hɑːm/', zh: '伤害' }], tts: 'habit, harm' },
        { sym: '/w/', kind: '半元音', pair: '/v/', label: '双唇收圆快速滑开（绝不咬唇！）', examples: [{ w: 'west', ipa: '/west/', zh: '西方' }, { w: 'wave', ipa: '/weɪv/', zh: '挥手' }], tts: 'west, wave' },
        { sym: '/j/', kind: '半元音', pair: '', label: '类似快速轻滑的“耶”（注意音标 /j/ 不是字母 j 的音！）', examples: [{ w: 'yes', ipa: '/jes/', zh: '是' }, { w: 'use', ipa: '/juːz/', zh: '使用' }], tts: 'yes, use' }
      ]
    }
  ],

  edRules: [
    {
      id: 't',
      sound: '/t/',
      badge: '清辅音后 → 读 /t/',
      color: 'amber',
      ruleZh: '动词原形最后一个发音是清辅音 /p, k, f, s, ʃ, tʃ, θ/（摸喉结不震动），-ed 读极轻的 /t/，不增加音节！',
      trapZh: '注意：laugh 以字母 gh 结尾但发清辅音 /f/，所以 laughed 读 /lɑːft/；develop 结尾是 /p/，developed 读 /dɪˈveləpt/，绝不是 /ɪd/！',
      words: [
        { base: 'work', baseIpa: '/wɜːk/', past: 'worked', pastIpa: '/wɜːkt/', zh: '工作' },
        { base: 'look', baseIpa: '/lʊk/', past: 'looked', pastIpa: '/lʊkt/', zh: '看' },
        { base: 'develop', baseIpa: '/dɪˈveləp/', past: 'developed', pastIpa: '/dɪˈveləpt/', zh: '发展/患上' },
        { base: 'help', baseIpa: '/help/', past: 'helped', pastIpa: '/helpt/', zh: '帮助' },
        { base: 'stop', baseIpa: '/stɒp/', past: 'stopped', pastIpa: '/stɒpt/', zh: '停止' },
        { base: 'watch', baseIpa: '/wɒtʃ/', past: 'watched', pastIpa: '/wɒtʃt/', zh: '观看' },
        { base: 'finish', baseIpa: '/ˈfɪnɪʃ/', past: 'finished', pastIpa: '/ˈfɪnɪʃt/', zh: '完成' },
        { base: 'laugh', baseIpa: '/lɑːf/', past: 'laughed', pastIpa: '/lɑːft/', zh: '大笑' },
        { base: 'ask', baseIpa: '/ɑːsk/', past: 'asked', pastIpa: '/ɑːskt/', zh: '询问' },
        { base: 'replace', baseIpa: '/rɪˈpleɪs/', past: 'replaced', pastIpa: '/rɪˈpleɪst/', zh: '替换' }
      ]
    },
    {
      id: 'd',
      sound: '/d/',
      badge: '浊辅音 / 元音后 → 读 /d/',
      color: 'green',
      ruleZh: '动词原形最后一个发音是浊辅音（/b, g, v, z, l, m, n, r, dʒ/ 等）或任意元音（摸喉结震动），-ed 读 /d/，同样不增加音节！',
      trapZh: 'BBC 高频词 expose (/z/)、quantify (/aɪ/)、show (/əʊ/)、use (/z/) 结尾都震动声带，加 -ed 全部顺滑读 /d/。',
      words: [
        { base: 'expose', baseIpa: '/ɪkˈspəʊz/', past: 'exposed', pastIpa: '/ɪkˈspəʊzd/', zh: '暴露/接触' },
        { base: 'quantify', baseIpa: '/ˈkwɒntɪfaɪ/', past: 'quantified', pastIpa: '/ˈkwɒntɪfaɪd/', zh: '量化' },
        { base: 'show', baseIpa: '/ʃəʊ/', past: 'showed', pastIpa: '/ʃəʊd/', zh: '展示' },
        { base: 'live', baseIpa: '/lɪv/', past: 'lived', pastIpa: '/lɪvd/', zh: '居住' },
        { base: 'use', baseIpa: '/juːz/', past: 'used', pastIpa: '/juːzd/', zh: '使用' },
        { base: 'play', baseIpa: '/pleɪ/', past: 'played', pastIpa: '/pleɪd/', zh: '玩/播放' },
        { base: 'call', baseIpa: '/kɔːl/', past: 'called', pastIpa: '/kɔːld/', zh: '称呼/打电话' },
        { base: 'learn', baseIpa: '/lɜːn/', past: 'learned', pastIpa: '/lɜːnd/', zh: '学习' },
        { base: 'realise', baseIpa: '/ˈrɪəlaɪz/', past: 'realised', pastIpa: '/ˈrɪəlaɪzd/', zh: '意识到' },
        { base: 'judge', baseIpa: '/dʒʌdʒ/', past: 'judged', pastIpa: '/dʒʌdʒd/', zh: '评判' }
      ]
    },
    {
      id: 'id',
      sound: '/ɪd/',
      badge: '/t/ 或 /d/ 音后 → 读 /ɪd/',
      color: 'blue',
      ruleZh: '只有当动词原形本来就以 /t/ 或 /d/ 音结尾时，为了能发出音来，-ed 才多出一个音节读 /ɪd/！',
      trapZh: '这是唯一让单词“变长一个音节”的情况（如 need 1 音节 → needed 2 音节）。记牢它，其他情况就绝不会乱加 /ɪd/。',
      words: [
        { base: 'need', baseIpa: '/niːd/', past: 'needed', pastIpa: '/ˈniːdɪd/', zh: '需要' },
        { base: 'want', baseIpa: '/wɒnt/', past: 'wanted', pastIpa: '/ˈwɒntɪd/', zh: '想要' },
        { base: 'start', baseIpa: '/stɑːt/', past: 'started', pastIpa: '/ˈstɑːtɪd/', zh: '开始' },
        { base: 'decide', baseIpa: '/dɪˈsaɪd/', past: 'decided', pastIpa: '/dɪˈsaɪdɪd/', zh: '决定' },
        { base: 'relate', baseIpa: '/rɪˈleɪt/', past: 'related', pastIpa: '/rɪˈleɪtɪd/', zh: '关联' },
        { base: 'record', baseIpa: '/rɪˈkɔːd/', past: 'recorded', pastIpa: '/rɪˈkɔːdɪd/', zh: '录制' },
        { base: 'avoid', baseIpa: '/əˈvɔɪd/', past: 'avoided', pastIpa: '/əˈvɔɪdɪd/', zh: '避免' },
        { base: 'expect', baseIpa: '/ɪkˈspekt/', past: 'expected', pastIpa: '/ɪkˈspektɪd/', zh: '预期' },
        { base: 'affect', baseIpa: '/əˈfekt/', past: 'affected', pastIpa: '/əˈfektɪd/', zh: '影响' },
        { base: 'dominate', baseIpa: '/ˈdɒmɪneɪt/', past: 'dominated', pastIpa: '/ˈdɒmɪneɪtɪd/', zh: '主导' }
      ]
    }
  ],

  irregularVerbs: [
    // Family 1: 缩短变 /e/ 或 /ɜː/
    { group: '短音突变 /e/ 家族', base: 'say', baseIpa: '/seɪ/', past: 'said', pastIpa: '/sed/', pp: 'said', ppIpa: '/sed/', zh: '说', trapNote: '头号坑！双元音 /eɪ/ 缩短成 /e/，绝不读 /seɪd/' },
    { group: '短音突变 /e/ 家族', base: 'read', baseIpa: '/riːd/', past: 'read', pastIpa: '/red/', pp: 'read', ppIpa: '/red/', zh: '阅读', trapNote: '拼写一字不差，读音直接变成红色 red /red/' },
    { group: '短音突变 /e/ 家族', base: 'mean', baseIpa: '/miːn/', past: 'meant', pastIpa: '/ment/', pp: 'meant', ppIpa: '/ment/', zh: '意味着', trapNote: 'ea 从长音 /iː/ 缩成短音 /e/' },
    { group: '短音突变 /e/ 家族', base: 'hear', baseIpa: '/hɪə/', past: 'heard', pastIpa: '/hɜːd/', pp: 'heard', ppIpa: '/hɜːd/', zh: '听见', trapNote: '读作 /hɜːd/（同 herd），绝不读 /hɪəd/' },
    { group: '短音突变 /e/ 家族', base: 'keep', baseIpa: '/kiːp/', past: 'kept', pastIpa: '/kept/', pp: 'kept', ppIpa: '/kept/', zh: '保持' },
    { group: '短音突变 /e/ 家族', base: 'sleep', baseIpa: '/sliːp/', past: 'slept', pastIpa: '/slept/', pp: 'slept', ppIpa: '/slept/', zh: '睡觉' },
    { group: '短音突变 /e/ 家族', base: 'feel', baseIpa: '/fiːl/', past: 'felt', pastIpa: '/felt/', pp: 'felt', ppIpa: '/felt/', zh: '感觉' },
    { group: '短音突变 /e/ 家族', base: 'leave', baseIpa: '/liːv/', past: 'left', pastIpa: '/left/', pp: 'left', ppIpa: '/left/', zh: '离开/留下' },
    { group: '短音突变 /e/ 家族', base: 'meet', baseIpa: '/miːt/', past: 'met', pastIpa: '/met/', pp: 'met', ppIpa: '/met/', zh: '遇见' },
    { group: '短音突变 /e/ 家族', base: 'lead', baseIpa: '/liːd/', past: 'led', pastIpa: '/led/', pp: 'led', ppIpa: '/led/', zh: '带领/导致' },
    { group: '短音突变 /e/ 家族', base: 'feed', baseIpa: '/fiːd/', past: 'fed', pastIpa: '/fed/', pp: 'fed', ppIpa: '/fed/', zh: '喂养' },
    { group: '短音突变 /e/ 家族', base: 'deal', baseIpa: '/diːl/', past: 'dealt', pastIpa: '/delt/', pp: 'dealt', ppIpa: '/delt/', zh: '处理', trapNote: 'ea 同样缩短成 /e/，读 /delt/' },

    // Family 2: 大长音 /ɔːt/ 家族
    { group: '长音 /ɔːt/ 家族', base: 'buy', baseIpa: '/baɪ/', past: 'bought', pastIpa: '/bɔːt/', pp: 'bought', ppIpa: '/bɔːt/', zh: '买', trapNote: 'gh 不发音，英音饱满长 /ɔːt/' },
    { group: '长音 /ɔːt/ 家族', base: 'bring', baseIpa: '/brɪŋ/', past: 'brought', pastIpa: '/brɔːt/', pp: 'brought', ppIpa: '/brɔːt/', zh: '带来', trapNote: '注意和 bought 区分有没有 /r/' },
    { group: '长音 /ɔːt/ 家族', base: 'think', baseIpa: '/θɪŋk/', past: 'thought', pastIpa: '/θɔːt/', pp: 'thought', ppIpa: '/θɔːt/', zh: '思考/认为' },
    { group: '长音 /ɔːt/ 家族', base: 'teach', baseIpa: '/tiːtʃ/', past: 'taught', pastIpa: '/tɔːt/', pp: 'taught', ppIpa: '/tɔːt/', zh: '教' },
    { group: '长音 /ɔːt/ 家族', base: 'catch', baseIpa: '/kætʃ/', past: 'caught', pastIpa: '/kɔːt/', pp: 'caught', ppIpa: '/kɔːt/', zh: '抓住/染上' },
    { group: '长音 /ɔːt/ 家族', base: 'fight', baseIpa: '/faɪt/', past: 'fought', pastIpa: '/fɔːt/', pp: 'fought', ppIpa: '/fɔːt/', zh: '战斗/抗争' },
    { group: '长音 /ɔːt/ 家族', base: 'seek', baseIpa: '/siːk/', past: 'sought', pastIpa: '/sɔːt/', pp: 'sought', ppIpa: '/sɔːt/', zh: '寻求' },

    // Family 3: 变 /ʊ/ 或 /əʊ/ 家族
    { group: '变 /ʊ/ 与 /əʊ/ 家族', base: 'take', baseIpa: '/teɪk/', past: 'took', pastIpa: '/tʊk/', pp: 'taken', ppIpa: '/ˈteɪkən/', zh: '拿/花费', trapNote: '过去式短 /ʊ/，过去分词又变回 /eɪ/' },
    { group: '变 /ʊ/ 与 /əʊ/ 家族', base: 'understand', baseIpa: '/ˌʌndəˈstænd/', past: 'understood', pastIpa: '/ˌʌndəˈstʊd/', pp: 'understood', ppIpa: '/ˌʌndəˈstʊd/', zh: '理解' },
    { group: '变 /ʊ/ 与 /əʊ/ 家族', base: 'stand', baseIpa: '/stænd/', past: 'stood', pastIpa: '/stʊd/', pp: 'stood', ppIpa: '/stʊd/', zh: '站立/忍受' },
    { group: '变 /ʊ/ 与 /əʊ/ 家族', base: 'shake', baseIpa: '/ʃeɪk/', past: 'shook', pastIpa: '/ʃʊk/', pp: 'shaken', ppIpa: '/ˈʃeɪkən/', zh: '摇动' },
    { group: '变 /ʊ/ 与 /əʊ/ 家族', base: 'break', baseIpa: '/breɪk/', past: 'broke', pastIpa: '/brəʊk/', pp: 'broken', ppIpa: '/ˈbrəʊkən/', zh: '打破' },
    { group: '变 /ʊ/ 与 /əʊ/ 家族', base: 'speak', baseIpa: '/spiːk/', past: 'spoke', pastIpa: '/spəʊk/', pp: 'spoken', ppIpa: '/ˈspəʊkən/', zh: '说/发言' },
    { group: '变 /ʊ/ 与 /əʊ/ 家族', base: 'choose', baseIpa: '/tʃuːz/', past: 'chose', pastIpa: '/tʃəʊz/', pp: 'chosen', ppIpa: '/ˈtʃəʊzən/', zh: '选择', trapNote: '原形 /uː/ → 过去式 /əʊ/，非常容易听混' },
    { group: '变 /ʊ/ 与 /əʊ/ 家族', base: 'wake', baseIpa: '/weɪk/', past: 'woke', pastIpa: '/wəʊk/', pp: 'woken', ppIpa: '/ˈwəʊkən/', zh: '醒来' },
    { group: '变 /ʊ/ 与 /əʊ/ 家族', base: 'drive', baseIpa: '/draɪv/', past: 'drove', pastIpa: '/drəʊv/', pp: 'driven', ppIpa: '/ˈdrɪvən/', zh: '驾驶/驱动', trapNote: '三态元音全不同：/aɪ/ → /əʊ/ → /ɪ/' },
    { group: '变 /ʊ/ 与 /əʊ/ 家族', base: 'write', baseIpa: '/raɪt/', past: 'wrote', pastIpa: '/rəʊt/', pp: 'written', ppIpa: '/ˈrɪtən/', zh: '写', trapNote: '三态元音全不同：/aɪ/ → /əʊ/ → /ɪ/' },
    { group: '变 /ʊ/ 与 /əʊ/ 家族', base: 'rise', baseIpa: '/raɪz/', past: 'rose', pastIpa: '/rəʊz/', pp: 'risen', ppIpa: '/ˈrɪzən/', zh: '上升' },
    { group: '变 /ʊ/ 与 /əʊ/ 家族', base: 'steal', baseIpa: '/stiːl/', past: 'stole', pastIpa: '/stəʊl/', pp: 'stolen', ppIpa: '/ˈstəʊlən/', zh: '偷窃' },
    { group: '变 /ʊ/ 与 /əʊ/ 家族', base: 'tell', baseIpa: '/tel/', past: 'told', pastIpa: '/təʊld/', pp: 'told', ppIpa: '/təʊld/', zh: '告诉' },
    { group: '变 /ʊ/ 与 /əʊ/ 家族', base: 'sell', baseIpa: '/sel/', past: 'sold', pastIpa: '/səʊld/', pp: 'sold', ppIpa: '/səʊld/', zh: '卖' },

    // Family 4: 变 /uː/ 家族
    { group: '变 /uː/ 家族', base: 'know', baseIpa: '/nəʊ/', past: 'knew', pastIpa: '/njuː/', pp: 'known', ppIpa: '/nəʊn/', zh: '知道', trapNote: '英音 knew 读 /njuː/（同 new），不是 /nəʊ/' },
    { group: '变 /uː/ 家族', base: 'grow', baseIpa: '/ɡrəʊ/', past: 'grew', pastIpa: '/ɡruː/', pp: 'grown', ppIpa: '/ɡrəʊn/', zh: '成长/增长' },
    { group: '变 /uː/ 家族', base: 'throw', baseIpa: '/θrəʊ/', past: 'threw', pastIpa: '/θruː/', pp: 'thrown', ppIpa: '/θrəʊn/', zh: '扔', trapNote: '过去式 threw 与 through 完全同音 /θruː/' },
    { group: '变 /uː/ 家族', base: 'blow', baseIpa: '/bləʊ/', past: 'blew', pastIpa: '/bluː/', pp: 'blown', ppIpa: '/bləʊn/', zh: '吹', trapNote: '过去式 blew 与 blue 同音 /bluː/' },
    { group: '变 /uː/ 家族', base: 'fly', baseIpa: '/flaɪ/', past: 'flew', pastIpa: '/fluː/', pp: 'flown', ppIpa: '/fləʊn/', zh: '飞', trapNote: '过去式 flew 与 flu（流感）同音 /fluː/' },
    { group: '变 /uː/ 家族', base: 'draw', baseIpa: '/drɔː/', past: 'drew', pastIpa: '/druː/', pp: 'drawn', ppIpa: '/drɔːn/', zh: '画/吸引' },

    // Family 5: i -> a -> u 阶梯家族
    { group: 'i→a→u 阶梯家族', base: 'begin', baseIpa: '/bɪˈɡɪn/', past: 'began', pastIpa: '/bɪˈɡæn/', pp: 'begun', ppIpa: '/bɪˈɡʌn/', zh: '开始', trapNote: '/ɪ/ → /æ/ → /ʌ/ 经典三连变' },
    { group: 'i→a→u 阶梯家族', base: 'drink', baseIpa: '/drɪŋk/', past: 'drank', pastIpa: '/dræŋk/', pp: 'drunk', ppIpa: '/drʌŋk/', zh: '喝' },
    { group: 'i→a→u 阶梯家族', base: 'sing', baseIpa: '/sɪŋ/', past: 'sang', pastIpa: '/sæŋ/', pp: 'sung', ppIpa: '/sʌŋ/', zh: '唱歌' },
    { group: 'i→a→u 阶梯家族', base: 'swim', baseIpa: '/swɪm/', past: 'swam', pastIpa: '/swæm/', pp: 'swum', ppIpa: '/swʌm/', zh: '游泳' },
    { group: 'i→a→u 阶梯家族', base: 'ring', baseIpa: '/rɪŋ/', past: 'rang', pastIpa: '/ræŋ/', pp: 'rung', ppIpa: '/rʌŋ/', zh: '响铃/打电话' },
    { group: 'i→a→u 阶梯家族', base: 'run', baseIpa: '/rʌn/', past: 'ran', pastIpa: '/ræn/', pp: 'run', ppIpa: '/rʌn/', zh: '跑/运营' },

    // Family 6: 超高频必考变音
    { group: '超高频必考变音', base: 'eat', baseIpa: '/iːt/', past: 'ate', pastIpa: '/et/ 或 /eɪt/', pp: 'eaten', ppIpa: '/ˈiːtən/', zh: '吃', trapNote: '英音 BBC 经常把 ate 读成短音 /et/！' },
    { group: '超高频必考变音', base: 'see', baseIpa: '/siː/', past: 'saw', pastIpa: '/sɔː/', pp: 'seen', ppIpa: '/siːn/', zh: '看见' },
    { group: '超高频必考变音', base: 'go', baseIpa: '/ɡəʊ/', past: 'went', pastIpa: '/went/', pp: 'gone', ppIpa: '/ɡɒn/', zh: '去' },
    { group: '超高频必考变音', base: 'do', baseIpa: '/duː/', past: 'did', pastIpa: '/dɪd/', pp: 'done', ppIpa: '/dʌn/', zh: '做' },
    { group: '超高频必考变音', base: 'give', baseIpa: '/ɡɪv/', past: 'gave', pastIpa: '/ɡeɪv/', pp: 'given', ppIpa: '/ˈɡɪvən/', zh: '给' },
    { group: '超高频必考变音', base: 'find', baseIpa: '/faɪnd/', past: 'found', pastIpa: '/faʊnd/', pp: 'found', ppIpa: '/faʊnd/', zh: '发现/找到', trapNote: 'BBC 科研报道每期必出现 found /faʊnd/' },
    { group: '超高频必考变音', base: 'get', baseIpa: '/ɡet/', past: 'got', pastIpa: '/ɡɒt/', pp: 'got', ppIpa: '/ɡɒt/', zh: '得到' },
    { group: '超高频必考变音', base: 'make', baseIpa: '/meɪk/', past: 'made', pastIpa: '/meɪd/', pp: 'made', ppIpa: '/meɪd/', zh: '制造/使' },
    { group: '超高频必考变音', base: 'pay', baseIpa: '/peɪ/', past: 'paid', pastIpa: '/peɪd/', pp: 'paid', ppIpa: '/peɪd/', zh: '支付', trapNote: '对比：paid 读 /peɪd/，但 said 读 /sed/！' },
    { group: '超高频必考变音', base: 'hold', baseIpa: '/həʊld/', past: 'held', pastIpa: '/held/', pp: 'held', ppIpa: '/held/', zh: '握住/举办' },
    { group: '超高频必考变音', base: 'fall', baseIpa: '/fɔːl/', past: 'fell', pastIpa: '/fel/', pp: 'fallen', ppIpa: '/ˈfɔːlən/', zh: '掉落/下降' },
    { group: '超高频必考变音', base: 'wear', baseIpa: '/weə/', past: 'wore', pastIpa: '/wɔː/', pp: 'worn', ppIpa: '/wɔːn/', zh: '穿着/佩戴', trapNote: '英音 wore 读 /wɔː/（同 war 战争）' },
    { group: '超高频必考变音', base: 'lose', baseIpa: '/luːz/', past: 'lost', pastIpa: '/lɒst/', pp: 'lost', ppIpa: '/lɒst/', zh: '失去/输掉' },
    { group: '超高频必考变音', base: 'build', baseIpa: '/bɪld/', past: 'built', pastIpa: '/bɪlt/', pp: 'built', ppIpa: '/bɪlt/', zh: '建造' },
    { group: '超高频必考变音', base: 'spend', baseIpa: '/spend/', past: 'spent', pastIpa: '/spent/', pp: 'spent', ppIpa: '/spent/', zh: '花费' }
  ],

  minimalPairs: [
    { a: { w: 'sheep', ipa: '/ʃiːp/', zh: '绵羊' }, b: { w: 'ship', ipa: '/ʃɪp/', zh: '船' }, focus: '/iː/ vs /ɪ/（长紧 vs 短松）' },
    { a: { w: 'leave', ipa: '/liːv/', zh: '离开' }, b: { w: 'live', ipa: '/lɪv/', zh: '居住' }, focus: '/iː/ vs /ɪ/' },
    { a: { w: 'feel', ipa: '/fiːl/', zh: '感觉' }, b: { w: 'fill', ipa: '/fɪl/', zh: '填满' }, focus: '/iː/ vs /ɪ/' },
    { a: { w: 'heat', ipa: '/hiːt/', zh: '热量' }, b: { w: 'hit', ipa: '/hɪt/', zh: '击打' }, focus: '/iː/ vs /ɪ/' },
    { a: { w: 'cheap', ipa: '/tʃiːp/', zh: '便宜的' }, b: { w: 'chip', ipa: '/tʃɪp/', zh: '芯片/薯条' }, focus: '/iː/ vs /ɪ/' },
    { a: { w: 'fool', ipa: '/fuːl/', zh: '傻瓜' }, b: { w: 'full', ipa: '/fʊl/', zh: '满的' }, focus: '/uː/ vs /ʊ/' },
    { a: { w: 'pool', ipa: '/puːl/', zh: '池塘' }, b: { w: 'pull', ipa: '/pʊl/', zh: '拉' }, focus: '/uː/ vs /ʊ/' },
    { a: { w: 'bad', ipa: '/bæd/', zh: '坏的' }, b: { w: 'bed', ipa: '/bed/', zh: '床' }, focus: '/æ/ vs /e/（大嘴 vs 小嘴）' },
    { a: { w: 'man', ipa: '/mæn/', zh: '男人' }, b: { w: 'men', ipa: '/men/', zh: '男人们' }, focus: '/æ/ vs /e/' },
    { a: { w: 'pan', ipa: '/pæn/', zh: '平底锅' }, b: { w: 'pen', ipa: '/pen/', zh: '钢笔' }, focus: '/æ/ vs /e/' },
    { a: { w: 'say', ipa: '/seɪ/', zh: '说（原形）' }, b: { w: 'said', ipa: '/sed/', zh: '说（过去式）' }, focus: '/eɪ/ vs /e/（过去式变音！）' },
    { a: { w: 'take', ipa: '/teɪk/', zh: '拿（原形）' }, b: { w: 'took', ipa: '/tʊk/', zh: '拿（过去式）' }, focus: '/eɪ/ vs /ʊ/（过去式变音！）' },
    { a: { w: 'hear', ipa: '/hɪə/', zh: '听见（原形）' }, b: { w: 'heard', ipa: '/hɜːd/', zh: '听见（过去式）' }, focus: '/ɪə/ vs /ɜː/（过去式变音！）' },
    { a: { w: 'choose', ipa: '/tʃuːz/', zh: '选择（原形）' }, b: { w: 'chose', ipa: '/tʃəʊz/', zh: '选择（过去式）' }, focus: '/uː/ vs /əʊ/（过去式变音！）' },
    { a: { w: 'caught', ipa: '/kɔːt/', zh: '抓住（过去式）' }, b: { w: 'cot', ipa: '/kɒt/', zh: '婴儿床' }, focus: '/ɔː/ vs /ɒ/（英音长短奥）' },
    { a: { w: 'coat', ipa: '/kəʊt/', zh: '外套' }, b: { w: 'caught', ipa: '/kɔːt/', zh: '抓住' }, focus: '/əʊ/ vs /ɔː/' },
    { a: { w: 'work', ipa: '/wɜːk/', zh: '工作' }, b: { w: 'walk', ipa: '/wɔːk/', zh: '走路' }, focus: '/ɜː/ vs /ɔː/' },
    { a: { w: 'heart', ipa: '/hɑːt/', zh: '心脏' }, b: { w: 'hut', ipa: '/hʌt/', zh: '小屋' }, focus: '/ɑː/ vs /ʌ/' },
    { a: { w: 'think', ipa: '/θɪŋk/', zh: '思考' }, b: { w: 'sink', ipa: '/sɪŋk/', zh: '下沉' }, focus: '/θ/ vs /s/（咬舌 vs 平舌）' },
    { a: { w: 'three', ipa: '/θriː/', zh: '三' }, b: { w: 'tree', ipa: '/triː/', zh: '树' }, focus: '/θ/ vs /t/' },
    { a: { w: 'vest', ipa: '/vest/', zh: '背心' }, b: { w: 'west', ipa: '/west/', zh: '西方' }, focus: '/v/ vs /w/（咬唇 vs 圆唇）' },
    { a: { w: 'light', ipa: '/laɪt/', zh: '光/轻的' }, b: { w: 'right', ipa: '/raɪt/', zh: '右边/对的' }, focus: '/l/ vs /r/' },
    { a: { w: 'rice', ipa: '/raɪs/', zh: '米饭' }, b: { w: 'rise', ipa: '/raɪz/', zh: '上升' }, focus: '/s/ vs /z/（清浊尾音）' },
    { a: { w: 'back', ipa: '/bæk/', zh: '背部/回来' }, b: { w: 'bag', ipa: '/bæɡ/', zh: '包' }, focus: '/k/ vs /ɡ/（清浊尾音）' }
  ]
};
