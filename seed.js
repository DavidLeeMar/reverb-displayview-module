const db = require('./database')
'use strict';
var faker = require('../faker.js');
/*
//images  REQUIRES products in order to add images, use S3 for links

//Categories===========================================
for (let i = 0; i < 100; i++) {

var mainCategory = [
  'Solid Body', 'Left-Handed', 'Semi-Hollow', 'Hollow Body', '12-String', 'Archtop', '4-string', 'Acoutic Bass', 'Baritone', 'Pedal Steel', 'Short Scale'
];

var subCategory = [
  'Fender', 'Suzuki', 'Yamaha', 'Selmer', 'Martin', 'Sprague'
]

var topCategory = 'Guitar';
var randomMainCategory = mainCategory[Math.floor(Math.random() * mainCategory.length)];
var randomSubCategory = subCategory[Math.floor(Math.random() * subCategory.length)];

let queryStr = `INSERT INTO categories (topcategory, maincategory, subcategory) VALUES ("${topCategory}","${randomMainCategory}","${randomSubCategory}")`
db.query(queryStr, (err, data)=>{
  if (err) {
    console.log(err)
  } else {
    console.log('Successfully Inserted Categories')
  }
})
}


//=====================================================
//Sellers==============================================

for (let i = 0; i < 100; i++) {
var sellername = faker.company.companyName();
var streetaddress = faker.address.streetAddress();
var city = faker.address.city();
var _state = faker.address.stateAbbr();
var country = 'United States';
var joinyear = Number('19' + (Math.floor(Math.random() * 20) + 80));
var rating = Number(3 + (Math.floor(Math.random() * 3)));

let queryStr = `INSERT INTO sellers (sellername, streetaddress, city, _state, country, joinyear, rating) VALUES ("${sellername}","${streetaddress}","${city}","${_state}","${country}", "${joinyear}", "${rating}")`
db.query(queryStr, (err, data)=>{
  if (err) {
    console.log(err)
  } else {
    console.log('Successfully Inserted Sellers')
  }
})
}
//========================================================

//Products==============================================

for (let i = 0; i < 100; i++) {

var condition = [
  'Brand New', 'Excellent', 'Good', 'Fair', 'Needs Work'
];

var guitarbrand = [
  'Pedulla', 'Steinburger', 'Gretsch', 'Mosrite', 'Squier', 'Tanglewood', 'Alembic'
];

var guitartype = [
  'Hallow Body', '12-String', 'Solid Body', 'Vintage Bass', 'Short Scale', 'Baritone'
];

var proddesc = ["The Paranormal Super-Sonic™ is stranger than fiction with its reverse body shape and headstock, producing massive tone courtesy of its dual Squier Atomic humbucking pickups. The Super-Sonic is lightning fast with its “C”-shape neck profile and narrow 1.5” nut width, and also features a vintage-style tremolo for expressive string bending effects. With its otherworldly looks, transcendent playability and earth-shattering tone, this model will transport any player into a Paranormal realm.", "The Paranormal Offset Telecaster® is the quintessential mashup of Fender features, combining the components of the iconic Tele® with the comfort and style of the Jazzmaster® offset body shape. With its dual Fender-Designed alnico single-coil pickups and string-through-body bridge design, this guitar’s versatile voice will sing with sustain. Other callouts include a slim “C”-shape neck profile, a gloss neck finish for a slick feel, and chrome hardware that is sure to catch the spotlight.Model Name: Paranormal Offset Telecaster®, Maple Fingerboard, NaturalModel #: 0377005521Series: ParanormalCountry Of Origin: CNColor: NaturalBody: OkoumeBody Finish: Gloss PolyurethaneBody Shape: Jazzmaster®Neck Material: MapleNeck Finish: Gloss PolyurethaneNeck Shape ShapeScale Length: 25.5 Fingerboard MapleFingerboard Radius: 9.5 Number of Frets: 22Frets Size: Narrow TallString Nut: Synthetic BoneNut Width: 1.650 Position Inlays: Black DotTruss Rods: Single Action, Head AdjustBridge Pickup: Fender® Designed Alnico Single-CoilNeck Pickup: Fender® Designed Alnico Single-CoilControls: Master Volume, Master TonePickup Switching: 3-Position Blade: Position 1. Bridge, Position 2. Bridge and Neck, Position 3. NeckPickup Configuration: SSBridge: 3-Saddle Vintage-Style Strings-Through-Body Tele® with Chrome Barrel SaddlesHardware Finish: ChromeTuning Machines: Vintage-StylePickguard: 3-Ply BlackControl Knobs: Knurled Flat-TopStrings: Nickel Plated Steel", "Have a fender jazzmaster body for sale. Jazzmaster blacktop but put Seymour Duncan hot Jazzmaster pickups in bridge & neck(removed the humbucker bridge pickup). Replaced the junky Jazzmaster bridge w/an improved mustang/jaguar bridge. Everything else is original(pots, knobs, input jack, tremolo system). Trem arm included. Paint is in great shape, no nicks or chips. You just need a neck and yr set! The pickups sound rad", "Gibson Custom Shop 60th Anniversary 1959 Les Paul Standard VOS Iced Tea Burst Celebrate 60 years of iconic supernatural-powerhouse ‘59 Gibson Les Paul magic! Get the 60th anniversary Gibson Custom Shop Les Paul ‘59 rock n’ roll party started riding the stalwart sonic wave of Alnico III Custombuckers. Turn up the GCS night with chemically re-created plastic and laser-scanned dimensions. Take hold of authentic medium C-carve feel and fire, historic medium-jumbo frets and 12-inch radius at your rock n’ roll fingertips. Authentic hide-glue fit seals the 60th anniversary Les Paul ‘59 deal The Iced Tea Burst VOS blast in honor of the iconic past Sure, the original Gibson Les Paul ‘59 started slow (fewer than 650 original ‘59 Les Pauls were ultimately created. Then came the resurgence that rocked the world and elsewhere, extreme sonic versatility, bending wildly but not breaking in the hands of the likes of iconic Eric “Slow Hand” Clapton and Mike Bloomfield, followed by the iconic wave of axemen to stoke the Gibson Les Paul fire to legendary heights: Keith Richards, Jeff Beck, Duane Allman, Jimmy Page, Billy Gibbons, Joe Perry and Slash among many other world-famous players", "Celebrate 60 years of iconic supernatural-powerhouse ‘59 Gibson Les Paul magic! Get the 60th anniversary Gibson Custom Shop Les Paul ‘59 rock n’ roll party started riding the stalwart sonic wave of Alnico III Custombuckers. Turn up the GCS night with chemically re-created plastic and laser-scanned dimensions. Take hold of authentic medium C-carve feel and fire, historic medium-jumbo frets and 12-inch radius at your rock n’ roll fingertips. Authentic hide-glue fit seals the 60th anniversary Les Paul ‘59 deal The Iced Tea Burst VOS blast in honor of the iconic past Sure, the original Gibson Les Paul ‘59 started slow (fewer than 650 original ‘59 Les Pauls were ultimately created). Then came the resurgence that rocked the world and elsewhere, extreme sonic versatility, bending wildly but not breaking in the hands of the likes of iconic Eric “Slow Hand” Clapton and Mike Bloomfield, followed by the iconic wave of axemen to stoke the Gibson Les Paul fire to legendary heights: Keith Richards, Jeff Beck, Duane Allman, Jimmy Page, Billy Gibbons, Joe Perry and Slash among many other world-famous players", "The Player Precision Bass from Fender gives you all the legendary features you've come to know and love with some modern updates... all at a price point that no bass player can argue with. Offering classic sound turned up a notch, this P-Bass also provides you with ultra-smooth playability and stage-approved aesthetics & comfort. Whether you're just starting out or a gigging bassist looking for a classic and versatile bass, the Player Precision Bass will cater to a vast range of musical genres and playing styles.Classic Sound Turned Up a NotchThere's nothing more timeless than the sound of the world's very first solid body electric bass, so in an effort to remain faithful to their roots while keeping up with the demands of today's bassists, Fender has created the Player Series Split-Coil Precision Bass pickup. This pickup serves up plenty of that classic P-Bass punch and growl with thick, powerful tones that take the traditional tone to a new heights.Ultra-Smooth PlayabilityIf you're looking for a highly-playable bass, look no further than the Player Precision Bass. It sports a Modern -shaped maple neck and a contemporary 9.5 radius fingerboard with 20 medium-jumbo frets, making it the perfect bass for virtually any playing style. The neck also features a smooth back finish that allows for fast playability along its entirety. Designed for easy adjustment of the action and precise intonation, the 4-saddle bridge will give you the ability to quickly and easily tailor your action to your personal preference.Stage-Approved Aesthetics & ComfortBlending updated and classic appeal into one killer bass, the Fender Player Precision Bass comes available in a selection of new-for-2018 attention-grabbing finishes while the old-style spaghetti logo headstock logo is a nod to Fender's storied past. The alder body of this modern classic has been revamped for enhanced comfort, with updated ergonomic body contours that are more in line with Fender's US-made guitars.Features:Gloss-Finished Alder BodyModern  Maple Neck with 20-Fret, 9.5", "The Paranormal Super-Sonic™ is stranger than fiction with its reverse body shape and headstock, producing massive tone courtesy of its dual Squier Atomic humbucking pickups. The Super-Sonic is lightning fast with its “C”-shape neck profile and narrow 1.5” nut width, and also features a vintage-style tremolo for expressive string bending effects. With its otherworldly looks, transcendent playability and earth-shattering tone, this model will transport any player into a Paranormal realm.", "Originally introduced by Fender in 1998, the Toronado® became a fresh face in the crowd of offset-style guitars with its unique curves and crushing tone. The Paranormal Toronado delivers several player-friendly features including a slim “C” shaped neck with a slick gloss finish, a string-through-body bridge for solid string stability, individual volume and tone controls for a wide range of tonal variety, and an easy-playing 24.75” scale length. With its otherworldly looks, transcendent playability and earth-shattering tone, this model will transport any player into a Paranormal realm.", "With its maximized hollow space, the SRH500F breaks another boundary with its sleek, compact, comfortable lightweight body. Unlike other hollow body basses, the SRH500F features a spruce top with mahogany back and sides and the 55 mm-thick semi-hollow body delivers a rich acoustic tone.Ibanez Bass Workshop SRH500F Fretless Bass Guitar Features Spruce top and Mahogany back and sides 55 mm-thick semi-hollow body Bound Panga Panga fingerboard Fretless fingerboard layout AeroSilk Piezo system The specially designed forearm contour on the body top offers playing comfort, and adds an elegant accent to its appearance. A bound panga panga fingerboard features black fret lines that balance competing goals for guiding positions and keep the fretboard from disturbing the atmosphere expected in a fretless layout. A contoured neck heel is applied to create a deep neck joint with unfettered access to upper frets. The custom bridge contains the magic of the AeroSilk Piezo system, which works with D'Addario ECB81 flat wound strings to provide that sense of air that characterizes the upright sound.If you crave a new bass tool to enrich your creative palette, the Ibanez Bass Workshop may have already built your next instrument. This new product group focuses on combining unusual concepts with the bass-building virtuosity on which Ibanez has built its reputation. The SRH500F boasts a unique concept: the integration of the authentic feel expected in a hollow body and the key features that distinguish SRH as a contemporary bass.CALIFORNIA PROPOSITION 65 WARNING WARNING: Cancer and Reproductive Harm", "This was my dad’s guitar. He just recently passed away. I know by the serial # it was likely built in 1953. There is a piece wood brace that is broken off inside, most likely from getting too hot while in storage as I guess they were only glued on. Tested for functionality at a guitar shop and it works. Guitar shop estimated value at $1250-$1300"]

var material = ["metallic", "maple", "poplar", "laurel", "oak", "maple"];
var strings = [4, 5, 6, 12];
var hand = ["right handed", "left handed"];
var body = ["Semi-Hollow", "Solid Body", "Hollow Body", "Baritone", "Tenor"]

var finish = faker.commerce.productMaterial();
var word1 = guitarbrand[Math.floor(Math.random() * guitarbrand.length)];
var word2 = guitartype[Math.floor(Math.random() * guitartype.length)];
var productname = word1 + ' ' + word2 + ' ' +  'Guitar';
var price = faker.commerce.price();
var shippingcost = faker.commerce.price()/100;
var productdescription = proddesc[Math.floor(Math.random() * proddesc.length)];
var seller_id = Math.floor(Math.random() * 99) + 1;
var category_id = Math.floor(Math.random() * 99) + 1;
var listed = faker.date.recent();
var _condition = condition[Math.floor(Math.random() * condition.length)];
var model = faker.random.alphaNumeric();
var _year = Number('19' + (Math.floor(Math.random() * 20) + 80));
var made_in = faker.address.city();
var finishstyle =  material[Math.floor(Math.random() * material.length)];
var numberstrings = strings[Math.floor(Math.random() * strings.length)];
var rightlefthanded = hand[Math.floor(Math.random() * hand.length)];
var bodyfeatures = "offset";
var neckmaterial =  material[Math.floor(Math.random() * material.length)];
var bodytype = body[Math.floor(Math.random() * body.length)];
var bodymaterial = material[Math.floor(Math.random() * material.length)];
var fretboardmaterial = material[Math.floor(Math.random() * material.length)];

let queryStr = `INSERT INTO products (productname, price, shippingcost, productdescription, seller_id, category_id, listed, _condition, model, finish, _year, made_in, finishstyle, numberstrings, rightlefthanded, bodyfeatures, neckmaterial, bodytype, bodymaterial, fretboardmaterial) VALUES ("${productname}", ${price}, ${shippingcost}, "${productdescription}", ${seller_id}, ${category_id}, "${listed}", "${_condition}", "${model}", "${finish}", ${_year}, "${made_in}", "${finishstyle}", "${numberstrings}", "${rightlefthanded}", "${bodyfeatures}", "${neckmaterial}", "${bodytype}", "${bodymaterial}", "${fretboardmaterial}")`

db.query(queryStr, (err, data)=>{
  if (err) {
    console.log(err)
  } else {
    console.log('Successfully Inserted Products')
  }
})
}

//========================================================
//Images==============================================
var product_ids = [1, 1, 1, 1, 1, 1, 10, 10, 10, 10, 10, 100, 100, 100, 100, 100, 11, 11, 11, 11, 11, 12, 12, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 2, 2, 2, 2, 2, 2, 2, 2, 20, 20, 20, 20, 21, 21, 21, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 25, 25, 25, 25, 26, 26, 26, 26, 26, 26, 27, 27, 27, 27, 27, 27, 27, 28, 28, 28, 28, 29, 29, 29, 29, 29, 3, 3, 3, 3, 30, 30, 30, 30, 30, 30, 31, 31, 31, 31, 31, 32, 32, 32, 32, 32, 33, 33, 33, 33, 33, 33, 33, 33, 33, 34, 34, 34, 34, 34, 34, 34, 34, 35, 35, 35, 35, 35, 35, 35, 36, 36, 36, 36, 36, 36, 36, 37, 37, 37, 38, 38, 38, 38, 38, 38, 39, 39, 39, 39, 39, 39, 4, 4, 4, 4, 4, 4, 4, 40, 40, 40, 40, 40, 40, 40, 41, 41, 41, 41, 41, 41, 41, 41, 41, 42, 42, 42, 42, 43, 43, 43, 43, 43, 43, 44, 44, 44, 44, 44, 44, 44, 44, 45, 45, 45, 45, 45, 46, 46, 46, 46, 46, 47, 47, 47, 47, 47, 48, 48, 48, 48, 48, 49, 49, 49, 49, 5, 5, 5, 5, 5, 50, 50, 50, 50, 50, 50, 50, 51, 51, 51, 51, 52, 52, 53, 53, 53, 53, 53, 53, 54, 54, 54, 54, 54, 55, 55, 55, 56, 56, 56, 56, 57, 57, 57, 57, 57, 58, 58, 58, 58, 58, 59, 59, 6, 6, 6, 6, 60, 60, 60, 60, 61, 61, 61, 61, 62, 62, 62, 62, 63, 63, 63, 63, 64, 64, 64, 64, 65, 65, 65, 65, 66, 66, 66, 66, 66, 67, 67, 67, 67, 68, 68, 68, 68, 69, 69, 69, 69, 69, 69, 7, 7, 7, 70, 70, 70, 70, 71, 71, 71, 71, 72, 72, 72, 72, 73, 73, 73, 73, 74, 74, 74, 74, 74, 74, 74, 75, 75, 75, 75, 75, 76, 76, 76, 77, 77, 77, 77, 77, 78, 78, 78, 78, 78, 78, 78, 78, 78, 79, 79, 79, 79, 79, 8, 8, 8, 80, 80, 80, 80, 80, 80, 80, 81, 81, 82, 82, 82, 82, 83, 83, 83, 83, 83, 83, 84, 84, 84, 84, 84, 84, 85, 85, 85, 85, 85, 86, 86, 86, 86, 87, 87, 87, 87, 87, 88, 88, 88, 88, 88, 88, 89, 89, 89, 89, 89, 9, 9, 9, 9, 9, 9, 90, 90, 90, 90, 90, 91, 91, 91, 91, 91, 92, 92, 92, 92, 93, 93, 93, 93, 93, 94, 94, 94, 94, 94, 94, 95, 95, 95, 95, 96, 96, 96, 96, 96, 97, 97, 97, 97, 97, 98, 98, 98, 98, 98, 99, 99, 99, 99, 99]


var links = [
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/1/1-1.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/1/1-2.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/1/1-3.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/1/1-4.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/1/1-5.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/1/1-6.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/10/br4oqzmw6u01jzkxa1lm.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/10/goyvrfhu1zhsp6tnpkkk.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/10/jbugi7hgvvv52pd1uidr.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/10/ooo6m4nxpdhah27g2rhz.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/10/uosvdsqtz5zjuvcibeev.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/100/aosocallx0ek3za5yubr.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/100/oquegqcy1bfoku6snamb.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/100/qgjfzdmsauyxu1piuuxf.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/100/t2qksqkd761gbdh3itdv.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/100/vgadrgrdv7b38vjjzrv6.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/11/dsdtqyjvyoxjpnhdruj0.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/11/jnp8lrm9gavo47g3dxch.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/11/tzx2qbeb5ka9wiiuscr7.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/11/yeb08dsg1c02mcusb4w9.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/11/ysoryzf6u2bj5yxxslpd.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/12/cobsdilbcqowryp3sbgm.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/12/ridkaqkfcnkn2sahaj0e.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/13/auy6rtjqoigwxjnpkkt0.jpeg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/13/ldppodrbfmf6ofo2cwxg.jpeg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/13/lofvk6zkajp58sdequr2.jpeg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/13/s8arlqfvkknjkun1cxxd.jpeg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/13/txdshdcrcoasnlebrgtt.jpeg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/14/mxuwywpkinq2zy1wcxnc.jpeg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/14/nnajz9lpaxideoh1thoe.jpeg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/14/ozuxwxpn1gxk9scbbsc3.jpeg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/14/pabi6wsqlcwkb7lyenus.jpeg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/14/t6nsliwdp0fu0haala5w.jpeg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/14/ue1gctdos1wwv4c8ieaq.jpeg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/15/glbpokucupzt1vkjqacu.jpeg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/15/hgbrwahjjzww93tcxtak.jpeg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/15/mxd5jyifwldwsu8cmlxj.jpeg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/15/ziqcuiw0s9fwvjrnhxz7.jpeg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/15/zzjo0mclaztawn82lo3u.jpeg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/16/bqiymyg4mun3tnbhk8qs.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/16/rh9pscno5th2dlf0q5tt.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/16/tghvlg7jb0npd3nhpkky.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/16/y09qogi1ztyghd2pauw7.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/16/yf8whn5r6rac0hkzorkq.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/17/kadevo3qzwfxfxymxneb.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/17/nh3szit7rpfpj8poxgdk.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/17/r7qszdrgv94boxyjslul.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/17/rnlvqsqkorlsa9ayiqp4.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/17/vrxqxjejwkhxjoczmgvw.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/18/dm6gbhs4fztnakqgeunp.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/18/epaqsyg5zg50p8jxbkcs.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/18/mf8kvm2e2pusxktyi2c7.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/18/ou1tnt73xbx4dtxeowjq.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/18/squbzxk1deeou5zsknz2.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/19/gses9khc84jn61l8dmgt.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/19/hwrjt4ua6sqs4vz5sep5.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/19/n5bdz1xabvlteqw7vh4b.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/19/oi5d3xvzrjrrczp0z6wx.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/19/vml0orfsq5ecbmqubmia.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/2/2-1.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/2/2-2.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/2/2-3.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/2/2-4.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/2/2-5.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/2/2-6.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/2/2-7.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/2/2-8.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/20/ay5iq6jfzls0hmz179me.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/20/pbcucxl8rotyo6pq6q7s.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/20/ptixclrx9sdafm1nkjp7.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/20/s7xfszf7w0l8mz93yqlx.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/21/f1mvgpia8z1slsla6lik.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/21/llzycad0xkjmrexnodkw.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/21/y5tibhtjf5u7wrebdoii.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/22/jgqm2wtnmidysqwmz7i8.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/22/mzijifjoeidufz79bndq.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/22/ph9xmk7midbtdoy8teby.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/22/szd0rikydxaarldw5wk1.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/22/znc3oovhfniw68pwkewp.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/23/aer1mlwxritrmbw2huym.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/23/cayagoucaxkzqkckj6di.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/23/dk7nokpqrtvi1votetye.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/23/okcpkjcog7hu101ag0fw.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/23/p5owxcclpyv9btacq853.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/23/p9co2upcyakq59dercvc.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/24/jnf9296cjekuzb7wvq8a.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/24/ncpbanczutg2lfbiteao.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/24/nl6flpiyrpewnps4nqz6.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/24/yul7g7vxadbjubf12pnv.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/25/bzedr0ug11pjiuage0pm.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/25/dw3encc3lke9ce9blpyv.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/25/vvwby5rfxij4rlcgruf5.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/25/zxm25pr4lzkhosyzwi36.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/26/d9be5twmfnzlwuytdkzj.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/26/gquvbhca24moynxczxwr.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/26/laiuv0kuyjmciqs5zd5w.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/26/u4fdotnw4ep47qqn054j.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/26/zaxq6i3qe0bypgpndy80.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/26/zsxfjxj4gzmdqkh1pk9q.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/27/akmkvunfu4zlkqylei6h.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/27/beigwrfsavuplpkck5rd.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/27/bh9ryxuppknj5tghyh6n.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/27/czn90v7we10k5k2av04q.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/27/phu7fq0ed3anpkm6cqyw.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/27/w3tppszmy6ldhud0bs3m.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/27/zvbjpcgkatslusajxfa6.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/28/f2aoudwhhqr6lwif3xwk.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/28/ju6zmmlwd99xmwkutfaa.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/28/q1xopsgsf1ni23tp8kpo.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/28/tpcadmqgyvmiwtpesgru.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/29/hbjqs7c9ttkymwapyg1l.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/29/kghpvrzxfweqmlxl9rt1.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/29/lqqxifbobrhptccepwfj.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/29/uxudnhagd4opasevavcy.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/29/wz5j6camtptdcsp50skf.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/3/3-1.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/3/3-2.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/3/3-3.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/3/3-4.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/30/bprhycmm953tbbfg3zlq.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/30/d32ydmowxz3i2ay8jpoj.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/30/f0t8jz59lz7aij3zzikt.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/30/p6hhbuoei0ycbydcqdd9.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/30/sj0npafeourooe5k8t0m.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/30/tdpj968jtrljnbj30bsn.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/31/fg5fjhe3iqhj6ifhjbwj.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/31/m5n3mahenda7dvsphibi.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/31/nyma8drklxgmruepqhac.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/31/tzr119hklmifg4fqrfyj.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/31/xflpqvnc0svffowcawni.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/32/bhmnv1xh2ztovhkvcrol.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/32/l20bfpw6v76v5scbydxq.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/32/qqi5jrmvlakfzdlqolyn.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/32/upvlfpa8ujvm2aut8kmn.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/32/wajvaarfe4nvh2rbmxdx.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/33/c93muwekdgvsui20cqtm.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/33/d1e2do7ua6b3ikwowbcz.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/33/d2hadatmun8nezpx5fjg.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/33/hf4s2pp7klpdunwjouu1.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/33/hjrbsenpchfzcxh5ofhg.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/33/kisweuuendmhzkftj1qy.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/33/mfhu56dlzwvnd5znxhpi.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/33/omflg464qaxozur7wzbb.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/33/vecjdpcgdqydflzkndom.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/34/brza3wlm4blcjdy3hl93.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/34/fpqu4glaicpf8pnawgyb.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/34/kvxupxwu0jgxjasaf3f1.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/34/nq36xk60gpiccknfwuaj.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/34/omflg464qaxozur7wzbb.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/34/qpmtqeeidyrn9ljbkrxn.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/34/vqdrebbjqr20ujifrcee.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/34/xrv1rmfq9pirtbici9mz.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/35/a9fzi5uxxq7yhnyewzc6.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/35/afqeg0wgi7iujyzrlgs3.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/35/agd06qp0h6hez5mgz3si.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/35/hbsfr8bp0evtwmq1i0rb.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/35/qkbo7gzdpd7mygmaxbgr.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/35/wz5cvfushiouhqghgest.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/35/xdjmx8lep67qd6ffjaht.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/36/mqi9kbeltztvy7k1i0oz.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/36/psdbqn38lrjwxdfa0tr4.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/36/rzik4sovdohykvz1jkfs.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/36/siqcmeyu68xay3syklcn.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/36/svrzhfkwssbmiuwce1xz.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/36/wbw3jzwelzipv2ffxawj.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/36/ykljewxvylvez4ynmpts.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/37/gzvhfdlxiruncojuwmo1.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/37/l1hkjgpoovo6tk8s03qv.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/37/sfvmasqhums2pwx0r3hb.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/38/dxfwrhazdtwolltpmriu.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/38/fgnqv6h8nhiqqlopjojh.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/38/nnp9g94urvq9yenxvsiv.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/38/ozvau7yg5qaqkloidmbm.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/38/w0i5esp0impi7bt753px.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/38/wnavrewslqq40i2wh49b.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/39/athlsbhlobb79ij90go2.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/39/j0c2dhiztzinttd6v4ra.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/39/pzgcwv4vylm1orx3xwil.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/39/qmnmomuk53ds0tnbrmo0.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/39/ufrxgwyhwvzkqdgwzhfz.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/39/utcpvdqxuckpcrqwnxce.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/4/fpmwft0mtrvc3csfbf8c.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/4/i4kmxwet5qtxgzli6jrn.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/4/leatgksl21gxo2gnnfyc.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/4/ok0qqsrubcomo22xreyp.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/4/pumagehd74gbuqprkmk5.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/4/qqq0tbk61njbl6yod1q8.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/4/rhhuujqd8b7vgpo56uix.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/40/gkonh2d5hit0cdvuqcwo.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/40/m5otvc7ofktcrp2go3b9.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/40/mryh2rmk2gyjjsvcjyxd.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/40/pq1fzfikuoqdd8ydxaiw.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/40/rt8tav1fuubmngf6q3y5.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/40/s7rg0hma9kf6vwp5lo6l.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/40/zfch6ez7yvexbtp6k7ce.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/41/bnehe52azoatprdeoelr.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/41/equfmun3ye03khctvir6.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/41/esa13puxbtedvueklehr.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/41/h25a0at2tvaupycqllhm.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/41/mlbptrrrtjrer7e6vt5k.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/41/rgskh84fg0fwyxucm39a.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/41/tykkevqpmemgsxbu2vyt.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/41/v9egw4v7havzdiattvab.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/41/ywmwc1kbyibncmslv5tf.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/42/cpr8yjanxjwnnrnzhco8.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/42/gzkwlhebiyvzjwpsv3tp.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/42/qagcf8wytgljzqzqlgsz.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/42/w1vckjjnnr31f4wh3pnh.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/43/fsyy41zoiajgjijvmkpg.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/43/t4iqozzalhay7v2zvisf.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/43/tt63fq0lkdxdingasz5b.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/43/uitr3zzqfckrmybgw2ve.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/43/wa6a6e0epnzvo33nwxxr.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/43/yvfuabpexzeupec0s0ub.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/44/a7vidjqc86mmgx7rgxsj.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/44/bnsqm3foye7m8ah6tlnm.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/44/extckzfalxaj6jhflxry.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/44/ge2hneaqmpqd2hne6hgy.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/44/h4q7jl8kne38a5xu2bm5.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/44/lpu1mtjucxynehwo5rwe.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/44/tc8wxobd601jbz6qmagi.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/44/wfztpum9umnfq95ncu5h.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/45/gggz1ggwblzsbvlo2knr.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/45/gos0ovtjmru0zaipyftk.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/45/nep22p0rzkulgo4rh0yx.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/45/p9qx2vw66nzaqsnpq40l.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/45/rvaqz5jrmctrokumdzop.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/46/jsbjizxlfp7srbkup5mf.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/46/pn91o5ptpnobrkccmw3g.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/46/rl23lryzhdbyd4ylwt3s.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/46/xvbhznafw3qf7kygkabu.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/46/zadznowqpoaxxfmwevaz.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/47/a7vzyor1z1pkytl9dvoo.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/47/d9bjcligx3hnldqagkvg.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/47/qhgb4fzkjs8efyk8tilw.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/47/szqulf3jzfuhmp2fklqv.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/47/z3smc0unhjhgjlzax3qe.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/48/m9yb5viqmhsvv5kc8v4e.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/48/pcg0efbuxh3rqr5alh8c.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/48/vswukagadg74tkorasvr.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/48/w3xxdjnpbvborq9wr6tj.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/48/ypzuwl8eqlbsprawcyvu.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/49/omqqjndprrhj5vwkbuex.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/49/qe2pnvkkmxapfilui7rb.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/49/thgpjanjumdlv8vqqmks.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/49/y0tsectwai65qllngczp.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/5/esqi8xc2slxeeu98ajkp.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/5/icu3ykrr3eboehbmzwkk.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/5/ipnrutogrcrbnmisaips.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/5/kjxknx2tzc00cie3wjnw.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/5/pprooifzboyzsjntos0n.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/50/bg1wldetwq0gnzneeqfs.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/50/ipcaqycg7i7gzmbtdqnb.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/50/isi2kjb2bxkcdc5cve6e.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/50/lvppdqieijvfrtglvln1.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/50/q5ln6o77ba91d8zos1d6.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/50/v1xk7zdffl2mh2zkad9l.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/50/wgdeefyhkyjgtmtvjfaw.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/51/b6fxzvkk6m5q0beacyfv.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/51/bz0itrys8g3axlvjfi2h.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/51/j5qxmjzcgwc3uy9y87cq.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/51/o4jyjlxhig8furh8v4hq.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/52/fcvkw5mnkiwuznfafclq.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/52/hbzith5qmvtqvt3wrhco.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/53/ggbhvc8slywzvi17pmek.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/53/phnme4lmkmaoigjksqlo.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/53/q0744jpy4rc5mfisex0h.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/53/rbghuqgxqpzx1jwii8wj.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/53/uxrmzg7o8chnznsf8m0t.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/53/vvw4mhvbtcj2mhtxo3st.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/54/ciijcwqs3whnvmpvw3sb.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/54/iabrs9eigg5dmbsadvnq.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/54/o4a0n0kpavkbkrgfz5w1.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/54/yc0h7ljzcc3kjynnnzqt.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/54/zf8f2bgyc976lst86urc.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/55/c5bpdoba2ue5mwmt5uvx.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/55/cvmgybtf4yufvekr7jo8.png",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/55/y5k1lw4epkxdh5eacvp2.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/56/ptrupmnkyjpoiopjabsw.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/56/tzmcyjll9jbwwsrpafza.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/56/wrs1vb5ujgeaf4vpield.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/56/xogyimxjm3dwb07wd7kj.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/57/cylgtu84k0cj79b4axtt.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/57/gwtmf59cxstfmjdgveo4.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/57/mnevkj6pwelx2wcu9fh3.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/57/srwml0dcvzzwexzq5pe6.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/57/xev75mlmsnltjwrbpeem.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/58/e8dxqq0tssbkdegsbdlv.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/58/glqssrv98vvyqmxfkm6e.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/58/kvjhtkokdw3nym2qchgr.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/58/tvt4cu2gewhd8inuvuby.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/58/yjcsadiezpdgxhqf4ml0.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/59/np5zlplurvp8yhf8hemd.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/59/rztpss00kucttfjh7nhx.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/6/gukxz5dtr9957fdprare.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/6/nxbxqxtkix28g4shjul1.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/6/xrfyllrhd8df7ehbz2fo.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/6/zima3xs3woyjxgttv03m.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/60/cc7bd529da46gizcozpi.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/60/hmr9l2cn174tfmrp6nay.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/60/hoy2qgwfqvgbaobqjse3.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/60/n3k4pkb9uiiuri7hbf0u.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/61/a1dvnebpm9djlgubg1nt.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/61/ptj9iasa1pi7gwt6z0vb.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/61/rrdl3ncunimwfao0dohn.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/61/zqmn76cxy280qnizrfo4.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/62/kiwvkppj6kzqk2ffbb9m.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/62/qgxccnbqenzj6h7nnddp.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/62/rdyksckovkvhkll0ark4.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/62/zpqzmpqnb0abggwxujfn.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/63/kwahdfd09x5zsdmnfzwy.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/63/lao0ijbpwc4pxqnysaqw.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/63/o4zxjxj9jjgr2pwcvmnm.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/63/yhp4z2dywsdqawxefsor.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/64/exeor3g7clflfxc6lj2b.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/64/vsfuqdtx6yugyptzyb3u.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/64/yryn8zjib0ke2n8bnlaf.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/64/yvawxcqvrvoficgbgssg.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/65/g7xsvahdugwww1mws0m1.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/65/im9ubtcz5cajnco3r8w2.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/65/peer13jvjabwcnn81fr5.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/65/zy0fnj3fzjstoarzbguz.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/66/esxkq2wfm2zt8ss8l7dg.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/66/geizvspe7b8lgavogxpt.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/66/hlhmwo8zk8dhwttpo6x3.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/66/hmmhuwj3lfpvjcmhbdvi.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/66/uzjq7a3s5g5hhzcpqwwk.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/67/nom14oo8djgapcoymjxh.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/67/nspaxczp5hrhibbaiv4a.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/67/pqbnknu0qjbydgbtsttx.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/67/qaytj6seikgln1dqoabg.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/68/ewbiaaoh6nmlieafhapl.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/68/gewh0kzmsuxt0re0njty.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/68/jsoa4bsdvux1txxanmnt.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/68/krfszrrpbswkir5zberv.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/69/ayzbwux4eohvkgxnjcox.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/69/cwevq35hxboaq4sdybmg.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/69/erv7pttcthk1h0ptqkb5.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/69/mssjvmphim4hf5sykmyv.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/69/toqij3nmio8hlmdfa1cb.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/69/vntfofdwmmhejx6s7qb4.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/7/rpc1mcnstqhwkut3si6c.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/7/sepomq6rj4in3iqnxco4.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/7/txn33jnvocilncovwrrg.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/70/gyb7kemfyoqu3mwx48ia.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/70/jh4ywbfpyhvaufwobnjd.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/70/kgisugtajn9vzxn2i85j.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/70/tswngiajxxvqd2gphpog.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/71/cpjl7awqcsulprnbf8wz.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/71/h5sqfm9podacxtalerz0.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/71/mkfxdecv9bhzrkadhvmo.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/71/sepxi1wnbxuhifd8ocui.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/72/c0utyos26pyrwgb6jlph.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/72/jbhtwphzxntkpssen9tk.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/72/vtsaqr53vb4039cbhqfr.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/72/w0vqkp9ootqtufyw3pyf.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/73/ipb2fqkfzknriynblkbe.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/73/nmr3mq8jrqbb6ey6zfsf.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/73/umnoauxgp2xfczgnlsm7.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/73/zesxnjxnztsrlgi7oalw.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/74/dfwkeli1zliskyla1c2a.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/74/gg55nsfegzdc7flmb0en.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/74/lweeu5jg2c93ratd2vcl.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/74/mqg8celxo9na7o0statf.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/74/pshrbymjjes4guipvncy.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/74/ubtc259ctnydariejyd6.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/74/vu7lfsus30h0ahdcc9rj.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/75/evzcr05ovoxk4i3tkjey.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/75/pcllwfnwyqh9grkqq55f.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/75/ps06zuhuaktqxiolpxgx.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/75/tdhwrjqf82b3obc0x0oa.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/75/xsgrdfia4lb1f2dhrphz.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/76/lxwjodxgwzhwx3imj8qy.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/76/wvah07n58yqyvjqdmauz.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/76/znfs7d9cflnjmwk3ajvh.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/77/cuhrvl4ewx9igs8z6gqk.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/77/deie3iglw9qidgk8q3vy.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/77/tak7skksqrglvolbmxfg.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/77/vixmstvxvt3csuy9ssly.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/77/xygctbb3alcglsfonys9.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/78/g3eqeavnkpdymzjqqjmy.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/78/ibcxxpwt50qtplr5bmda.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/78/iq6n34eztwoavisd5scs.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/78/jkjcpdhiv9r80t8noynu.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/78/mjmrxivj1qqawi30qn3q.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/78/qmtgsfojzhcu2qgixmgw.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/78/vwkltsablybtvpefcyms.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/78/xaflxssxlvhbafyvbe9y.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/78/zyu0liidwdd2bc5l0yba.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/79/bgkpsjepemnzvb4snfzl.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/79/cefgwwmonb4xnn55p4th.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/79/gtmxqgshab3zh1ltkdiz.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/79/w9jgipqhwyxknzfpnnxi.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/79/zykkgfoqtkbmsfqsaymh.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/8/kaxz2k1zxune6sc3kdlh.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/8/su7ybudf7bbpq9fhtm1n.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/8/sxctam6ngsknlbfb9n65.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/80/a3jgtbz9yxhsz7ypasqr.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/80/mgeuybpuhswz3atjsc30.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/80/opftayb381euvsiotxpl.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/80/ribf3ahktvypfmvdgvdv.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/80/wf4hif4tbiwgmbsdipyy.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/80/xbvggqbc00ijmbqf3rvv.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/80/zy5k15uafgbfdksaou7v.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/81/vfobffifrujgcyawolex.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/81/wddpqecnqu3osnmrnl6a.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/82/kg99o4vnnxfyirz1ii8e.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/82/neicx266ybytocgtq8lh.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/82/pme3wy9fjrgbxtcng46f.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/82/z3vtjnmirfhup3rglssj.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/83/a9tstba5vmpop3mhixdv.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/83/iffu45nvku6ytg7nxwu4.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/83/izwm31g3xrmudzowk2zj.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/83/rxcuouptg8qxc4g9oize.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/83/ywkqlhkdehcbkrwlydrq.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/83/zk5jjph1z7i0ds14rb6e.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/84/eonh5gb0st3rxef7e7yq.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/84/evxzur8y2af1pndyrxdx.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/84/kmdkx8ym01azsvxqlii2.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/84/tng7btpa52uc0tu0mf9v.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/84/tp0l2csvuc1l9gv0jjfp.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/84/vxbtitbwwtkjtxiq3qh1.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/85/ilw4gyb1ycbxq7qdtc4s.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/85/l1pyya1e5mtrzfdmou6y.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/85/nh9bnsobtkjkbfwh6u8m.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/85/teiayhh33vy8juob6ply.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/85/tlcivgawr6c626eliyjm.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/86/ehmssct37wvtw1gzbewn.png",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/86/kn8cdq23cw5winqsbuta.png",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/86/ssrupzq7fl93earzpty4.png",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/86/xpxtgiqaiotpf8sujzj5.png",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/87/eryvuwxkftsghvytoing.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/87/kj5xs34aqcqv1vedyoue.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/87/t7cfgpgnzvglgnt7my7e.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/87/tyvhhdcagrc5ovczumaf.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/87/vcpvsqhmz0vdbhcxm3ty.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/88/hiz1hczlxjvr1sbiggvg.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/88/i9qforbvnlg6otsqifqp.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/88/k1ibbow4upzuznpdhaoy.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/88/pdxn0ul3keke32gfcz3f.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/88/qfc7lkby6x3le3qzdu8d.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/88/xtazrivnkxyecgsbcmrz.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/89/jat7ciqfiwfwltycvglx.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/89/jpkzfaiiejvslw2wigec.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/89/nsagqhp7ww1rbfffshyp.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/89/p6s3axa9u7dsw5lhanb5.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/89/tzf1atg03j3fe27cxhix.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/9/atxry5t8oefan5zrboqp.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/9/dlazqhijtzcblkwl8naa.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/9/dytfkr4fo1parzakxqhi.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/9/gk7lsdve6c7q3rkfranb.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/9/xgqx0eukjf0zfrzqszjh.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/9/ykkfy1jr0tleysokv557.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/90/bmsbienwdphdronx9qmv.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/90/csektf5mcfiey4ky6ytv.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/90/igyqk8irki74spaghcee.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/90/isbvrc6yjluemsmv5arv.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/90/m368kuuvqjzyknzn5wvk.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/91/gyr0gue0ql3tzwbmt4bs.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/91/jpdzikeoxdxjuhssbkwi.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/91/odflbzqqaje9rlcealpd.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/91/qh3ohnwvcccaipiouyqz.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/91/v7swzgmqzsmzpbdpkkfc.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/92/ipxi9vrejls6pxvsqhd3.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/92/sfacswp2eejcifpihhrz.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/92/tost72s5zma2cifozc1u.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/92/vsrdkd0g1navp4hqqxh7.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/93/aay7hiv0fhcmxo1p5fjb.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/93/bioggjrp5yfn7v09blyh.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/93/g2t75udpjnwe3fel7a2j.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/93/pt8cqq2b7vbeelsbeddu.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/93/zrnbqazwpuzrae4jzuoy.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/94/agct7fowygsuxjgeqpxb.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/94/f92u9pngx3skloa92pya.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/94/owftacea6dg4uluzoxpf.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/94/pxbokljop1w1bmmbadio.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/94/xwqxwfouem5koemp0cfc.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/94/xxntnezslzxklkee5id8.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/95/g3qkpx5mv00pmy5f8zwg.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/95/r3q1xwedd4fghrq6oagj.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/95/yihcb7vx06gquvabzcru.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/95/z33eo9imdyr3fotjb8st.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/96/bi6k7cpqwwd4nqhd8dea.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/96/feaqaclhsslfen1drktk.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/96/fhimtakydajgcqcuo3kp.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/96/jrvrbcp4quvdyjdwskuw.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/96/jzgycch888xccemtcsgc.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/97/brh4auedfgiyzmd2udv6.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/97/dubrbrs9vkhpptlruar0.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/97/fat0zonbnmdm6u9e5t0p.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/97/khbhdd1bpqfhh5bspgxy.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/97/sopsykq6m1e9u8xydiq2.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/98/cmd58gp9wlgl5q47bzv9.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/98/d02s7nyzbfjpdprisorz.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/98/diatwhhbsgppv26kg59r.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/98/wuqufinhissbqapzwi58.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/98/zzic3djssetzul4suxwm.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/99/aghccpjiu0yye5h72cbs.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/99/kurnpp0cekerenpsm7ez.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/99/lgkq0cmyhhsdjnglh4rg.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/99/t9mgzoioprmjjvgd2flb.jpg",
  "https://reverbsproject.s3-us-west-1.amazonaws.com/Images/99/u4gt3oojhhyldexroz7b.jpg"
  ];


for (let i = 0; i < links.length; i++) {
  var link = links[i];
  var product_id = product_ids[i];


  let queryStr = `INSERT INTO images (imagename, product_id) VALUES ("${link}", ${product_id})`
  db.query(queryStr, (err, data)=>{
    if (err) {
      console.log(err)
    } else {
      console.log('Successfully Inserted Images')
    }
  })
}
*/

for (let i = 0; i < products.length; i++) {

  var cost = faker.commerce.price()/100;


  let queryStr = `UPDATE products SET shippingcost = cost WHERE id = ${i}`
  db.query(queryStr, (err, data)=>{
    if (err) {
      console.log(err)
    } else {
      console.log('Successfully Updated')
    }
  })
}