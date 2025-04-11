'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "2e0aa94e38d3036dd33c7bb46b1edbb2",
".git/config": "9e8b878a2ad9cabb24b96c2bb7773ee4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "07f70c9e64bbfe480c1cc568867eb278",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c389799af0a79c8b52eaee41489dc037",
".git/logs/refs/heads/main": "0414fe5934ee50ee4356bed1b18cd500",
".git/logs/refs/remotes/origin/main": "9826d64328c22f39915545f816206ad7",
".git/objects/00/4851b683e45af6c1a4dc7f47c6b2c7c6b4163a": "46a289ec0a103ba7b0b8f6556207d96e",
".git/objects/01/6068b486e1bd1d73743185c2752b7b1b843701": "a0a9d817d83e2d0bd7150ec8e31ae55e",
".git/objects/05/e70928a096b01829268953b569438e722f1ae4": "1ead9f2e9ea8158cf8bd115fd2680173",
".git/objects/06/18a2ad33afb74b6e090143c436c396bbfec157": "215ec0481ebcef0bef54ddb65ff4993a",
".git/objects/0a/89137d26286f2a8c1f80bc533e20aeb84dd5be": "43a5621d7b924a20b55c16188a3cb374",
".git/objects/0d/6011a9eb3784e49e85ad6782637b9cf4d8208c": "8057c0435ad6479d2f50f1259e22b2f7",
".git/objects/10/6a30a8282c909e46eff9324ae3ea6eba167d67": "17d99f170fd040a5e1e6cd7a8be8bcf7",
".git/objects/13/d592c60e4b4d0f615dfdf2ced8e24e14eb778a": "433ef5df23bc1128b7a697b29033de84",
".git/objects/15/141702263e9d6b596c5cf864695a36e7fd4240": "0eb2433936306c6c8a5478efb204715c",
".git/objects/1d/468b85698a60041b450286f31b3264b3bbd6f7": "5c8c497111befde32ac151f14cf92f85",
".git/objects/21/3a2811f742e10088a7a0e62c58cb5b0f887063": "0ee86f698a88980f673e1ccaeeb570fa",
".git/objects/2e/6ebd991f76c516d1e4bfaa51c859e447876a68": "8e177132b0ea673d630f6b0e403fffd3",
".git/objects/2f/eae23d2b647c5e6f066bb17aad0c07b71cc2d4": "f280c61cf0286129722242358aa0a0e7",
".git/objects/33/f806b16fc6b9ea0fe66d8c8a286e13ae3c06eb": "512c0ce892f20c1dabd97053e515a2fa",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/35/a94b28e77e0bdd541a13d1905f6b3387c5fccd": "d35a53269fca12d155c9158eb9e44484",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/41/b955dec13998c9ed510852ce58ce2199f61dcd": "d3ce6b0009918a1c999338c02108f839",
".git/objects/43/40502d93c09da91560c862cabf3f6055704149": "4febd773f54af74582dda2576bb38c97",
".git/objects/46/989b09c656ab39a3a3703b4e63bb428c6e3ad6": "be5abd124a8a97d2cd9e8bce5aa59fed",
".git/objects/49/8b1ffae6faab790635ff52b19906224bdc3dbc": "8be58361a11b110582897dbd88a0d333",
".git/objects/49/f1b2ccad477bbb780793ef5f6ac723707f70b2": "0663bc1ff9c76f11440d9078a224a83e",
".git/objects/4b/087dd67919066b17b43a95911713affee61400": "f585a7cab36c020e86f6418b6ad8aa53",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/ed0402dd52be87870303e1f0b8c8d9adb6c527": "273569c0818cd41c551e69cc42419659",
".git/objects/4f/75cb56c5980377b26a58a3a9033be998305e81": "c28ccb8e74d66e5f8bd05d710a1a6bb9",
".git/objects/52/ddbfd84e9dc6fcc08b9b49462a82cc3e01f048": "8e6c4da6c474e5193bc9065eb81557f1",
".git/objects/53/16ef9f6923ebd5f278fabae8c66226bd3520fe": "bb26fe05a0cb8b83818904866250345e",
".git/objects/53/3402c75429e6feaa7b8f92878ae2313dbdf2de": "63ab067b0b447b461fa3e8f58a1f23a9",
".git/objects/55/e41bfa2f233e7dad819cfc3c660b1f9640f0c7": "4772b3112a778f295f97cd2a35263a32",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/59/af2c0143896adc7627cd469dda1a2185610f22": "e1f5951f58072555b844d79d280a0444",
".git/objects/5a/6ffae1b1b9576461b5e46150654acb124c0f44": "757849b0ef80930dbf9a301704855938",
".git/objects/5a/a0746f7bf8b4b80c394125001af42d58bc717f": "2f9d76bd0d942eca4f909f840844941d",
".git/objects/5d/9c1b8318652130257157b0a8ea77682e32cbe2": "475108548ac41996fda2e25460bf6b49",
".git/objects/5d/d4384d622c6826368826e8787043c449a5487a": "fecdf3a4313405319a99de451d6db5a8",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/5f/e658852efa150abaa50103822d0d9d1a013302": "f2ed370d80e425c38c1d98a09555ef6b",
".git/objects/60/a51e9733f2495114432bd20a81c2174b1d9fa8": "871590267914b34ebe3412f595478b69",
".git/objects/65/0d9590f7ff19afdfa9d4454202146947153ec6": "640c52e6dfdba95622600253c501328d",
".git/objects/66/8d3f80d06333cb0c2d1b0a2f2ee7ff665e86ed": "596c7bf876392a7abfb66a3cbef90318",
".git/objects/66/9c62270985eb164e71050dffc11036d37fdb54": "171f8f2e4858242491286bf39b2c2340",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/92f8aa74329c83f109fc49f9f621f053d082ed": "a058f60b07fb6c82941b5145835e4d3d",
".git/objects/6d/82938022f985005462be013539ee7a5f58d2f4": "85e6aa7dbf6fd45c70c926de4b82f6ef",
".git/objects/6e/6cbbf773e6d3f8f21c6f38c1dfd59311bb1cea": "50c9e03d54e54d6d4efd54a1a29367db",
".git/objects/71/93aa27abf72142e6edde25564fc3d015ad92a4": "74fef7dd932b89455d191f52b420b741",
".git/objects/71/e4fe854edcb99cb4ab433994be7f590e1e0857": "375d95a7b7e712178488f8588f0486a8",
".git/objects/72/3d030bc89a4250e63d16b082affe1998618c3f": "e4299c419434fc51f64a5266659918fa",
".git/objects/73/72580172052a3d81e2c4e126b355f96d63905a": "54d84f600eba3fddc3d926789f4b69bc",
".git/objects/79/16550bd7d3aa60268f61f63cc356e5c19d7887": "55a7848777da6a3b0c4cc79644a24eeb",
".git/objects/7e/bb6231ef94ab80f2f5f7499ffa2aa4b8704849": "430784f2de41c44e68d38c7391c7cf78",
".git/objects/82/aa81678fa7a904d9938717bc6a7189827dce54": "0e4bdd9dc7df39b54b0b1e74898e7007",
".git/objects/85/68068acac760b8cec397cc7d35abda399885f7": "43f2e3d241cd458674da5785a4c76958",
".git/objects/86/12c2be4ffc1a559316b3a3a5b9fccdfdc68b56": "f9fd6ff8acb10dcf559d2cf4da5e2d7d",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/f74c610720eb93849b6a17735e735937ef4875": "b62116eb9daa2fec67e6224b7d115267",
".git/objects/8b/b637f44f42ebff661d0b14c5080c7f0db78f29": "f70f9ebe29f19b917f0823dc744ea520",
".git/objects/8c/bb1639fff8c39dbdc3aaf1cafa62db73d7292a": "b6cfda89c733e3bbd4143e618cd3e19d",
".git/objects/8f/c8be62f202c40e7d3e2e16242fb065cfc4e1a7": "6fda1b80da67a8d96186cf8ab8b24087",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/93531835cdb7fa1896ba15a274b119004c2ae9": "28f6fb29ca64a904bbf9325677c39fb9",
".git/objects/92/18eebbfb517a26dd7b33ece1ca55b93dd8b678": "952c24193647385437d66668ac15dfdd",
".git/objects/95/3e13b832f240ac3105ca45f9bcca0e31feea89": "c63693e7a541975adc24cd96eb157edd",
".git/objects/97/65e76835aaaa81951b8d85217dd4c7f0d754a7": "e6bee59b10911e6bd5717edeb79842d5",
".git/objects/98/f7e04081d15b4519097be3ec84e896e4e8d013": "1111c0b5321f3203df7fcd5fadf23778",
".git/objects/9a/c3659f55b3b7974bea4bae033d54c34ed16f5c": "46d1433f0a2f650a39745f73f03777b3",
".git/objects/9c/735663f426fc7d058a1eca9ad3c51e8f84505b": "3d9403a0ade97abe1face10f0e2151b1",
".git/objects/a1/6785ac2ed4b16ef6f05b5ea3c73fde3aba3bd8": "774da5b4ddfa9db3b67d19896e0b566f",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/aa/c6e2125764aa2528ef5447ba2786ad2d879637": "dc5e6f0ef51ee3fbbe32ceccb5c3d53a",
".git/objects/ae/4e94c3dc36395a9f0f747c8461c8cf424c025d": "ba63ed5d5b8119b8261e2c8c83ba7b72",
".git/objects/af/98add58ee41cb585a0d84558514fb47e068f2f": "0f35955751010e9a82156b88c65b5fba",
".git/objects/b3/39e0ad53c16e29b4cc56d24c8a81e3128c56e0": "a74ee620eafc618a2afad4f230bc74aa",
".git/objects/b3/7f662462b8234be9d7b09e62c252fa6ed52849": "0129615c52473d8d1c8dccc5664ffcc1",
".git/objects/b7/482e383af6394bf247649ff7a5f24e444de343": "98e0808544d730aa5e2ca0c07e5d35c5",
".git/objects/b7/959eeb9bbdf60a1d984f3e0ea856b44f6054e3": "4e4587ca4e40edce19d687a1a09b5aa8",
".git/objects/b9/959f541833d6949bf7db408ea6314f3afa17af": "4597d4929ca578909452b6a33f6f8482",
".git/objects/ba/99b777ddf402d551c269804bfa47cb53b707b2": "c035b276bcc2c8267f50a38df2861895",
".git/objects/bb/2e8875a993f9c7d9e45d0eeffa839550cc6287": "3ad141b01f3a79c62e799ae0a1b6dd7d",
".git/objects/c3/f60041275f9ab1a3c775b2361a9627db4896e3": "ffd5c971f540c3051841137bb0e12718",
".git/objects/c4/b6a2c3bc4d1305f106dc8a60e3981d8a0e7b23": "ab0d73cbdee28c4c5e221cb7587b0002",
".git/objects/c7/d472420fc79d2c6d061d73582920caaab5b114": "afe02d12787ad01547ac6ff5ca231946",
".git/objects/c8/596dd6df807a5571ffdcec7c7b0b28bc3753db": "0da90d70725338d69250c4148371f604",
".git/objects/c9/6e110b3f1aa765555f1dba8ba8408192cedb2b": "0008ae2a4cfafd6239cf7045e91c2bd3",
".git/objects/ca/75415d330f7c7b210d5a348023d790b6922ba7": "5bae2cc5df9684c78b47d3b833bc2858",
".git/objects/cd/42b3fcd5ec07ec66d97418970103f834913fae": "0ae875864b43e62636345602692b6e67",
".git/objects/cd/daa06bedf0d1715b97db5932689b8aff042b90": "0b19dac6f916971666bc8c847def872b",
".git/objects/d0/6a6197b14f6f47caa4b7e144e7b4064ded8763": "3f83f5e088644319bd04fb56fbfcc5e1",
".git/objects/d3/0673672b91224e0231c3ef9e9aa250b36d7b71": "3da52840f73eaa626113ac647dbfad0f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/015c2c43a3af308ed073131f08f98dbf58cbc0": "f175ea482ef885b09f476271d8bcc9ba",
".git/objects/d6/99d9bef1036f1bc879cbda7be1004bf4e3ecc7": "1dcc6cf9e24296db43574df1c6e321de",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/1730b98db3d3e627d8005278c377c2a12cb99a": "29a807565754b2a2d37693963dbba94d",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/e4/7d6020406d67122cf1c76fd1994a6bca641574": "6d04411347238b697edd7584582b5550",
".git/objects/e6/9da12da8756ae175b51431b4bdadcb84e100ea": "cd8570465f22e7923add85a33ae39fbb",
".git/objects/e8/4b9f144c5a9c4e9384e894c3639f72bd5802e3": "879c7e8a42231c633d480a7a84b15701",
".git/objects/e9/06c4c8ff09257a2f3f183adf3dd3c05f76e1c8": "d9824845fdeadf8d8b2c600d0488177f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ec/9fc8082d82c3751970e554be8efc5861d8b0ac": "be6788ae9a190bd625ae6ec7f79992f2",
".git/objects/ec/ee5b480c225107198856d66d39ec3bfca8984c": "9a926c0a547757d10ed9bde8b4ec402a",
".git/objects/ee/8b72f51015219cecd5478a024d9511be2fc18d": "25d1fb7a0403804df9cd7dac17f434c5",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/39d9b95031564eea22fd13b4d8576893bee249": "074019370356a9165ebc24c973617b65",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f3/fa68372c2f041b92e0fd1f2f38d90e2b1c65e8": "abdc985137e0c80d6906b579ca85a34c",
".git/objects/f4/7501b5a67e40bd3d6572b4cf486f71b75ce9ae": "2d60587b67c94395d1451b936dc95a11",
".git/objects/f4/e3de678a0fa38e6d65411f3581e5fded0476d7": "2e7544804b4de750bf8b9aca8297ee2f",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/94273743f11e2a68c49ec0b3f7bb3071e0ba8b": "f886959ca969f2cf46dc8682bf54fb98",
".git/refs/heads/main": "cfd28779f8bd76787480ad127703fa8b",
".git/refs/remotes/origin/main": "cfd28779f8bd76787480ad127703fa8b",
"assets/AssetManifest.bin": "f4526d778fd90551afe6d96607fadb84",
"assets/AssetManifest.bin.json": "1464c5e72e4f8653aa321af572afb13c",
"assets/AssetManifest.json": "1fb709f3615b5f3620b1923b7ee22f05",
"assets/assets/files/Flutter_developer.pdf": "380c5c69eeec47465f68bfcb2af61eb6",
"assets/assets/fonts/Lato-Black.ttf": "d83ab24f5cf2be8b7a9873dd64f6060a",
"assets/assets/fonts/Lato-Bold.ttf": "24b516c266d7341c954cb2918f1c8f38",
"assets/assets/fonts/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/assets/images/animeWallpaper1.png": "f3b5b4951277b3e568ace65e2a95d4a0",
"assets/assets/images/animeWallpaper2.png": "5bd8d4c4dd09354421b102d57cd6d71a",
"assets/assets/images/animeWallpaper3.png": "98b08033057cebb6f512b69e2003a75f",
"assets/assets/images/animeWallpaper4.png": "c6d5d0ce6073fb1d0da772651201d641",
"assets/assets/images/animeWallpaper_logo.png": "d0213a4765e6b81ad4b932933c364975",
"assets/assets/images/api.svg": "e188215ca7f1440c17c2443e9e1b451a",
"assets/assets/images/assistant.png": "303867ff7f8cd289cacf74a068262363",
"assets/assets/images/background_name.svg": "3a8e632bff614bacf7ed534fa836ad2d",
"assets/assets/images/behance.svg": "73afcfc8f824ab451afb324be9d640f2",
"assets/assets/images/bot.png": "a53083ff42e4f02582cbe8043ca856a9",
"assets/assets/images/cloud-api.png": "2a3a325b6ed5a288ddba7dfde8219344",
"assets/assets/images/cutpng.png": "5f96dca50bb8436b6cf7561fe9da2e61",
"assets/assets/images/cutsvg.svg": "cfd0a349efa1f258996775c6e670f278",
"assets/assets/images/database.svg": "f903e7d20f838f1b25147f89f1faec21",
"assets/assets/images/downlaod.svg": "12dc0b22cc0805c039c625da48535bc7",
"assets/assets/images/drawer.svg": "c2aad448dd1776b75e98c5d10320e56d",
"assets/assets/images/dribble.svg": "54d8122f595467e68fe08644816031e7",
"assets/assets/images/ecommerce.png": "0836b16b1bbaa8257881e96a0090dc5e",
"assets/assets/images/eram.png": "4c0463415269c7f7c17ac74e59a82ecb",
"assets/assets/images/farm.png": "63ab5259199ac7d4c69b4cdf6e9cd3b3",
"assets/assets/images/figma.svg": "b3c4256328c6693f0347c709f2ae76f2",
"assets/assets/images/Firebase.svg": "69e5c0e9f6658b7236f74f900f9cd3db",
"assets/assets/images/flutter.svg": "9f925a19d0842ad0d1d53c2d46b17a00",
"assets/assets/images/flutter2.svg": "59d4095e142e9c53d4c5ff004ec4e717",
"assets/assets/images/flutter3.svg": "7c8ff38a9fffd4883bd09b62b1977167",
"assets/assets/images/flutterLogo.svg": "f810ecd5efa6b2f7a3db1468d159aff8",
"assets/assets/images/github.svg": "8a8745173f22e1776da8674fa434ca04",
"assets/assets/images/google_maps_old.svg": "8f4219f30b9745a077523b82abdc1912",
"assets/assets/images/instagram.svg": "5eb9ebdd2d171e630df9579944e26c1d",
"assets/assets/images/linkedin.svg": "4989c6f1f4d6d455c01132a0240cd0e9",
"assets/assets/images/mail.svg": "abcc3e347b10fe3477f91ad95b6cb5de",
"assets/assets/images/mobile-application.png": "3b9908d7478663ec95056d838e5bc8a2",
"assets/assets/images/mysql_logo.svg": "1364910401b0aae2a8b077e22eb7e9f3",
"assets/assets/images/notifications.svg": "519e99852c353f440581d375aa4dcf11",
"assets/assets/images/ojrah.png": "7c28586f1525745461bf5b788b4f6ce2",
"assets/assets/images/osama2.JPG": "e0c3b41d871cda0ef640c61bc8b8d89a",
"assets/assets/images/osama3.JPG": "54867750c3f0fa8b9109c39f8d9ff7de",
"assets/assets/images/osamasvg.svg": "129a2bbaaffd24dcc7b28143181e3243",
"assets/assets/images/osma1.png": "42e744902ce67f95a742223db0cc1883",
"assets/assets/images/phone.svg": "b9d0427b2f444429990f4a1f87cd45c0",
"assets/assets/images/php_logo.svg": "4d6d8e8bd19f7df7f745fd5b5763c198",
"assets/assets/images/php_server.svg": "c218a7f9beca5eb39328d4f783c283b1",
"assets/assets/images/programmer.png": "e4b32f8b3510badabc9dde50fcf09940",
"assets/assets/images/programming.svg": "225370ab08fe77e9bd26f26d21683587",
"assets/assets/images/Rectangle.png": "6b231bbe42ac968a075862dd45a4e856",
"assets/assets/images/responsive.svg": "182b300d5c811f29307958b1584b6f78",
"assets/assets/images/rest_api.svg": "a31930ed85ca5f466d70ed8f77ca38ce",
"assets/assets/images/school.png": "5ba063745e22bdf973fdc2a71ceae8ac",
"assets/assets/images/smartphone.png": "c42bd13ffb203e062cef4f035d68ae0c",
"assets/assets/images/sql.svg": "6074d3fcf527f58d1677c0ee81666ee1",
"assets/assets/images/system-monitoring.png": "1a22d5d961dce1d74d6c183559097ae6",
"assets/assets/images/translation.svg": "00de5e2f74865e067cc1e2877b7a1f0a",
"assets/assets/images/wasteIspector.png": "e7ecab8a0c9ae38d76fa94054a0cca9e",
"assets/assets/images/web-design.png": "439b22f2deb87c3100044ae84e1b73ba",
"assets/assets/images/web-developer.png": "ced1ddeffc89207deee500cd0fce8881",
"assets/assets/images/xd.svg": "d54c29d1f0405ce85769c7b695f90959",
"assets/FontManifest.json": "00beca3004f7edf9f925ec45f3bc46a6",
"assets/fonts/MaterialIcons-Regular.otf": "257d78d187c2422e42296949c2d715bd",
"assets/NOTICES": "bf2a90d5a63082df592fb8362c11304f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "243016b8b7270acb33192543f075d43c",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "4eb1fdabd9fcb3c1c90544ae30ba59c5",
"icons/Icon-192.png": "fc8b0bd32f782f654b24408481cbd3b2",
"icons/Icon-512.png": "e0226e2a9197926b37fa836ab07caf20",
"icons/Icon-maskable-192.png": "fc8b0bd32f782f654b24408481cbd3b2",
"icons/Icon-maskable-512.png": "e0226e2a9197926b37fa836ab07caf20",
"index.html": "b824f3fdb03cf2647473f93082a8e4c4",
"/": "b824f3fdb03cf2647473f93082a8e4c4",
"main.dart.js": "872676ecb9bcb3372d7ea7368126c11e",
"main.dart.mjs": "b800fa3e5031377159cd5d112b7ba5a7",
"main.dart.wasm": "548f592f2731eeec7381a43be5abf36f",
"manifest.json": "d1b3dcf068c30475547088202bbbef16",
"version.json": "7ba965387ce75644931901274ab48b35"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
