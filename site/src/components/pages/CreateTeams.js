import React from "react";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from "react-bootstrap";

function CreateTeams(){
    const firstNames = ["Wes","Wyatt","Marc","Guy","Kirk","Curt","Yanni","Devon","Matias","Dexter","Devan","Daryl","Brenden","Marcel","Jakub","Barry","Torey","Declan","Leon","Sami","Tucker","Kari","Kirill","Terell","Johan","Henri","Lubomir","Anton","Niko","Calle","Sergei","Orvar","Hannu","Rocky","Matvei","Bobby","Robbie","Taro","Vaclav","Artu","Cedrick","Pavel","Zemgus","Oskari","Dustin","Kris","Tobias","Matej","Pekka","Iro","Ondrej","Luca","Nino","Emerson","Jonas","Seth","Dawson","Paxton","Spencer","Henry","Ryan","Dylan","Ross","Joseph","Sigmund","Donald","Edgar","Riley","Nazem","Dominik","John","Zach","Zack","Patrick","Kasperi","Tyler","Par","Josh","Brad","Artemi","Kohl","Gordon","James","Tom","Steve","Vince","Alex","William","Jack","David","Mathew","Aaron","Phil","Stan","Eddie","George","Ned","Harry","Fred","Billy","Erik","Frank","Luke","Troy","Ted","Chris","Dale","Brock","Dennis","Mike","Joel","Karl","Carl","Jim","Colby","Sean","Ulf","Larry","Mikko","Saku","Colin","Tim","Chuck","Len","Dan","Melvin","Yuri","Yogi","Nate","Thomas","Connor","Jordan","Robert","Andrew","Jeff","Drew","Devin","Craig","Ilya","Carter","Matt","Daniel","Henrik","Rob","Peter","Rasmus","Derek","Hudson","Joey","Cliff","Wouter","Rem","Linus","Tarmo","Brett","Max","Alfons","Rhett","Otto","Nolan","Colton","Yegor","Quinn","Axel","Eetu","Jesper","Maxim","Arvid","Vasili","Travis","Ty","Tyson","Nikolaj","Jeremy","Mattias","Brady","Austin","Calvin","Oskar","Vojtech","Tanner","Mikhail","Hardy","Carsen","Vitaly","Kasper","Wade","Emil","Jack","Andre","Chad","Boris","Libor","Trent","Tage","Dennis","Logan","Lucas","Taylor","Olli","Pierre","Clay","Cam","Ruslan","Russel","Parker","Tristian","Kappo","Mika","Sven","Rocco","Magnus","Xavier","Nikita","Shane","Nick","Blake","Kyle","Yannick","Marek","Derek","Nils","Radim","Ray","Victor","Jason","Mackenzie","Drake","Anthony","Tony","Ales","Bryan","Filip","Evander","Noah","Caleb","Marcus","Charlie","Brandon","Brayden","Nail","Joe","Justin","Danny","Jared","Marco","Mitch","Evgeny","Ian","Gustav","Kevin","Eero","Teemu","Stefan","Anders","Corey","Michael","Niklas","Sam","Jake","Ethan","Andreas","Wojtech","Nelson","Martin","Gordie","Ole","Nico","Jose","Cole","Hunter","Glen","Owen","Duncan","Keith","Brent","Ville","Dmitry","Terry","Andy","Tuukka","Jiri","Jan","Jaromir","Jussi","Tomas","Shawn","Ben","Milan","Timo","Robin","Ed","Dougie","Frederik","Tuomo","Carlo","Fedor","Jay","Ronnie","Liam","Marty","Tommy","Roman","Elvis","Jorge","Darrell","Ivan","Darren","Wayne","Scott"];
    const lastNames = ["Delia","Toivenen","Korhonen","Cimber","Norberg","Bjarnsson","Rucker","Salek","Tortosa","Waghorn","Winsuth","Gaskin","Marikar","Mehmet","Obornik","Ohler","Picarda","Pike","Kipper","Kocenko","Lasrado","Lehmer","Leidenroth","Malkari","Nowak","Friberg","Gillberg","Halsted","Haskew","Janetzka","Agrotis","Arboit","Bartolucci","Beeler","Calloni","Dohlen","Likowski","Lundborg","Orloff","Iggulden","Warbrick","Zell","Granov","Krentz","Masuda","Saccenti","Vanover","Kubelka","Moffett","Bialuski","Briclot","Burig","Cohen","Fishback","Lindskog","Vannella","Venetis","Scuffle","Rosenberg","Castaldi","Ekberg","Kinloch","Thaxton","Grillo","Sallouti","Opaloch","Karasic","Mantlo","Heck","Ruffalo","Bobbitt","Dolbec","Higdon","Hacker","Thrash","Tovar","Tarver","Tirado","Pippin","Erwin","Echols","Hooks","Heflin","Hoskins","Pipkin","Morris","Bokk","Matlock","Meeker","Bolduc","Orozco","Unger","Ulrich","Vanhorn","Ventura","Breen","Lankford","Sigler","Silver","Sisk","Scoggins","Olmstead","Goldberg","Devito","Dupuis","Lockwood","Loomis","Torres","Hardin","Tanaka","Goff","Garber","Stanley","Escobar","Bean","Carillo","Watts","Kaufman","Barrera","Lozano","Cochran","Ochoa","Roach","Black","Roth","Soto","Zuniga","Dodson","Bolton","Zavala","Cantrell","Vargas","Ibarra","Maynard","Skalbeck","Pizzulli","Chernega","Korslin","Navarro","Alvarado","Ramos","Padilla","Ortiz","Steele","Trebor","Penketh","Ricciotti","Eagleden","Frook","Mizuno","Lippert","Whitehead","Stroeder","Husk","Catto","Wragg","Allan","Janzen","Zagrodney","Olfato","Kocur","Bond","Svenson","Peniuk","Welder","Brinker","Osterlin","Yakimowski","Torgerson","Fedirko","Polachek","Choquette","Dankow","Prohak","Grodecki","Rosenthal","Wurtz","Kozij","Ceslak","Geck","Tokarchuk","Bernier","Delfish","Greer","Poirier","Vatalaro","Darrach","Lowthian","Kivell","Vedernikov","Brissett","Kroone","Rundle","Beranek","Bessler","Betik","Blade","Brodziak","Burmistrov","Langkow","Lasak","Loob","Balastik","Bartkowski","Bekar","Belak","Highmore","Hjalmarsson","Holzer","Lach","Lack","Laforge","Lang","Halverson","Hammond","Handzus","Hartman","Heeter","Winkler","Winnik","Nazarov","Nikitin","Niku","Niskala","Webster","Wetzel","Wheldon","Foo","Frazee","Isaksson","Ironstone","Isbister","Washburn","Fantenberg","Featherstone","Festerling","Finnigan","Ondrus","Valk","Varvio","Antipin","Axelsson","Voss","Momesso","Malinowski","Ruff","Yonkman","Zemlak","Zezel","Okerlund","Clutterbuck","Klinkhammer","Bohonos","Sasakmoose","Twist","Kolanos","Ustrnul","Bohac","Tukio","Vlcek","Isosalo","Shinkar","Takko","Velluci","Veldhuis","Wakaluk","Volek","Bakos","Barabanov","Wolanin","Bjork","Lekkas","Bonar","Pivonka","Ehlers","Luoto","Nogier","Berdin","Motte","Kolesar","Jooris","McCann","Varlamov","Hakanpaa","Bear","Cullen","Bonin","Skudra","Zizka","Lepisto","Kolzig","Booth","Beers","Dalgarno","Vukota","Morozov","Galanov","Serowik","Ortmeyer","Ozolinish","Krog","Yashin","Bonk","Palffy","Boogard","Frolov","Kolarik","Biron","Straka","Prucha","Shrock","Hill","Gourde","Erne","Rutta","Conacher","Rozsival","Denisenko","Sittler","Moen","Korpela","Grundstrom","Puistola","Cederqvist","Ciccolini","Salo","Eggenberger","Frolik","Broadhurst","Nalimov","Goldsmith","Kaprisov","Cobb","Hulva","Podracky","Mills","Hedberg","Vaculik","Just","Cervenka","Navratil","Sumpter","Yanush","Panek","Maxwell","Fraser","Cahill","Karklinis","Zviedrs","Helton","Sidorov","Sinipoli","Vanhatalo","Prin","Bocek","Kansala","Nikodym","Butkus","Lachinov","Mattila","Davenport","Spang","Brazeau","Skreslet","Skala","Barham","Haglund","Kopelow","Malouin","Chebotar","Huffman","Wyrozub","Ledet","Betko","Sheen","Novikov","Sanvido","Hannigan","Nichols","Seidle","Bakovic","Pavuls","Reinbolt","Cable","Higgins","Garrison","Sekac","Versteeg","Bickell","Wiercioch","MacArthur","Legwand","Percy","Lupul","Zetterberg","Datsyuk","Nyquist","Kronwall","Bergenheim","Letestu","Wisniewski","Stafford","Semin","King","Nieto","Guenin","Berra","Gelinas","Salvador","Brunner","Fiddler","Garbutt","Peverly","Spezza","Kulemin","Gaborik","Hanzal","Klefbom","Scrivens","Fasth","Chimera","Orpik","Filpulla","Cooke","Vanek","Zuccarelo","Stempniak","Zatkoff","Nabakov","Sobotka","","Eller","Hiller","Bonino","Etem","Bollig","Vermette","Erat","Korpikoski","Doan","Pavelec","Emelin","Daley","Thyne","Korte","Krarup","Helander","Colangelo","Lohrei","Slaggert","Coe","Vikman","Rolston","Askarov","Holloway","Reichel","Chinakov","Brisson","Peterka","Bittner","Wertz","Wentz","Amaral","Garza","Guhle","Kemp","Kempny","Ortegel","Seyward","Tayette","Morbeck","Kapanen","Bodnarchuk","Kaliyev","Oesterle","Graves","Herrera","Neil","Neal","Tinnesz","Berard","Morrow","Todorovic","Cantello","Karpov","Lostracco","Beretich","Kulic","Khaira","Keon","Sisik","Ayres","Balsamo","Minerva","Kromm","Sikalis","Arfelt","Sargis","Kanter","Wick","Stark","Larmi","Bethume","Collins","Arneson","Calvas","Stratis","Jorgenson","Coffman","Redler","Sluka","Boutin","Hintz","Slavin","Farabee","Vatrano","Drouin","Zadorov","Forbort","Malkin","Letang","Oshie","Pulock","Monahan","Vrana","Cirelli","Crawford","Fisher","Alzner","Carlson","Sergachev","Boily","Little","Barch","Groza","Racine","Topinka","Lesak","Nocera","Horky","Temple","Bowman","Kujala","Sandoz","Savic","Nesbitt","Chubak","Fortin","Aalto","Garneau","Yawney","Droz","Frei","Fedulov","Sjoblom","Girga","Melichar","Sarnecki","Ligocki","Demel","Dube","Streit","Flegel","Nylen","Cox","Villemson","Lund","Moranis","Laptev","Soquila","Popov","Nero","Kolar","Molnarfi","Kropak","Korinek","Reid","Pelissier","Williams","Hansen","Aragon","Valtonen","Zhang","Stecher","Vechter","Harris","Jones","Henry","Lawson","Tront","Tetarenko","Kurvinen","Krause","Spencer","Crevatin","Olsson","Maatta","Smerka","Birks","Havelka","Boulay","Shutron","Cavalinni","Gehon","Ardelan","Lof","Greening","Magnusson","Oberg","Pamic","Summerton","Calla","Kypreos","Bouchard","Ekman","Halchuk","Koukola","Svozil","Crowder","Karban","Horvarth","Patry","Lepage","Scruton","Dolina","Sanza","Hebeler","McNabb","Alriksson","Hoekstra","Mironov","West","Hoffmann","Granlof","Brookwell","Stovicek","Giroux","Rankin","Catalano","Sundberg","Shier","Alain","Marska","Milano","Nevels","Durcek","Klinger","Sullivan","Antal","Johansson","Alarie","Diamond","Machacek","Drake","Eltom","Oleksuk","Mikunda","Pearkes","Cerman","Gryzk","Crotty","Mayo","Tendeck","Burke","Newell","Goligoski","Grabner","Steenbergen","Jenik","Zibanejad","Hajek","Bitetto","Chytil","Spooner","Korenar","Donato","Meier","Labanc","Howden","Panarin","Hamaliuk","Kotkov","Emond","Blichfeld","Gallant","Claesson","Yelesin","Parsons","Zagidulin","Gambrell","Simek","Letunov","Carcone","Tanev","Leivo","Nesterov","Kylington","Kinnvall","Kadri","Trenin","Harpur","Saros","Sbisa","Kaskisuo","Turris","Renouf","Salomaki","Bowers","Jarnkrok","Pekar","Makar","Fogarty","Eakin","Jost","Megma","Vorobyev","Connor","Tokarski","Ullmark","Borgen","Asplund","Rieder","Borgman","Raffl","Ustimenko","Olofsson","Montour","Svechnikov","Aho","Stenlund","Gavrikov","Tarasov","Gustafsson","Lammiko","Huberdeau","Lomberg","Gudas","Weegar","Gildon","Priskie","Sedin","Gurianov","Kiviranta","Pysyk","Rosburg","Felhaber","But","Anisimov","Kleven","Sanderson","Roslovic","Caufield","Cehlarik","Jagr","Brown","Jarventie","Valiyev","Bemstrom","Lankinen","Kubalic","Zub","Prosvetov","Bozak","Gawanke","Linden","Tretiak","Cederborg","Hunwick","Pionk","Statsny","Stutzle","Huth","Dostal","Lohisalo","Tugnut","Vesalainen","Rinaldo","Pronger","Matvichuk","Hawerchuk","Alfredsson","Bolohan","Garant","Smith","Kane","Kahun","Matthews","Tavares","Nylander","Reilly","Finn","Huml","Marner","Toews","Bergeron","Marchand","Seguin","Voracek","Debrincat","Leonard","Poetl","Lowry","Howes","Dragonas","Fox","Brady","James","Tuddles","Scott","Polak","Laine","Schmaltz","Hughes","Karlsson","Johnson","Frost","Sikura","Boeser","Hertl","Thornton","Paros","Barkov","Gaudreau","Ferland","Tkatchuk","Norris","Bryant","Rizzo","Benning","Benn","Demelo","Provorov","Sanheim","Vlasic","Braun","Mack","Trubisky","Snuggerud","Bellows","Horvat","Toffoli","Copp","Wilson","Fluery","Schmidt","Petry","Maniscalco","McDavid","Weal","Wheeler","Sundin","Mikita","Louongo","Ladd","Carter","Barzal","Bailey","Komarov","Cizikas","Lee","Edler","Hamhuis","Lehner","Hutton","Bogosian","Palat","Girardi","Hedman","Budaj","Skinner","Miller","Dahlin","Okposo","Scandella","Coburn","Point","Cernak","Kesler","Getzlaf","Silfverberg","Conrad","Hossa","Mysak","Kakko","Jeeter","Iginla","Crosby","Davidson","Kubalik","Lambert","Sandersson","Kopitar","Robinson","Brome","Roy","Fleury","Coffey","Tanguay","Redden","Rieder","Ward","Perry","Subban","Hasek","Selanne","Belov","Fedorov","Dubois","Keller","Kunin","Fabbro","Helvig","Sambrook","Hogberg","Wiederer","Almari","Stukel","Rasanen","Pezzeta","Clurman","Volkov","Hillman","Masonius","Chebykin","Stewart","Strome","Glotov","Barron","Sokolov","Ronning","Chizen","Lohin","Helt","Somppi","Abols","Wall","Nurmi","Lajoie","Nyberg","Rykov","Dostie","Zimmer","Maltsev","Gregor","Cederholm","Nassen","Ingram","Gignak","Mahura","Pitlick","Bitten","Stepan","Butcher","Smid","Gibbons","Chara","Forsling","Hirose","Mantha","Husso","Allen","White","Pageau","Duclair","Chabot","Barzal","Stepan","Kessel","Byfuglien","Reaves","Johnson","Niemelianen","Weber","Weaver","Bjornfot","Samsonov","Gibson","Beck","Trochek","Barkov","Yandle","Simons","Landeskog","Rantanen","MacKinnon","Yakupov","Daigle","Filatov","Georgiev","Lunqvist","Deangelo","Murray","Werenski","Wennberg","Bobrovski","Raanta","Bass","Athansiou","Green","Nurse","Reinhart","Lockhart","Hart","Koneckny","Sillinger","Keefe","Darling","Montemeault","Chiasson","Hoglander","Leavold","Zohorna","May","Whitney","Lemieux","York","Seguin","Hall","Holl","Honka","Gardner","Fowler","Ritchie","Schenn","Cowen","Ellis","Kulikov","Holland","Rundblad","Erixon","Olsen","Klingberg","Budish","Werek","Panik","Doherty","Hesketh","Urbom","Bobkov","Bennett","Vey","Rajala","Vatanen","Horak","Knight","Costello","Zador","Kruger","Bloodoff","Cowick","Shields","Ortio","Pacan","Kozun","Tardy","Gedig","Simila","Smilanic","Larkin","Pashnin","Almquist","Gilbert","Kivisto","Sexton","Neuber","Legault","Peltz","Koper","Haula","Callahan","Randell","Kozun","Bernard","Knapp","Pelech","Varone","Vincour","Petersen","Price","Shattock","Ekholm","Savard","Andronov","Latta","Barrie","Nilsson","Tatar","Pirri","Orlov","Ponich","Lander","Koskinen","Kreider","Kassian","Muzzin","Dach","Nylander","Duchene","Wideman","Robertson","Seidenberg","Nash","Lindholm","Dumba","Trouba","Forsberg","Faksa","Ceci","Jankowski","Skjei","Dansk","Pokka","Moroz","Collberg","Kerdiles","Aberg","Sutter","Sieloff","Bystrom","Stolarz","Frk","Thrower","Kurker","Martinook","Severson","Bozon","Vesey","Lindell","Gillies","Calnan","Zharkov","Kulak","Delnov","Troock","Woods","Nelson","Willcox","Payne","Kerfoot","Rupert","Dotchin","Brassard","Hinostroza","Zlobin","Myron","Gavrus","Collier","Djoos","Wikstrand","Rissling","Gusev","Megna","Ebert","Hargrove","Langhammer","Barber","Tikkinen","Tremblay","Carrick","Cooper","Culkin","Boyle","Anderson","Andersen","Hodges","Korpisalo","Tierney","Koekkoek","Pouliot","Galchenyuk","Zajac","Stajan","Plekanec","Myers","Boedker","Colborne","Eberle","Ennis","Markstrom","Voynov","Josi","Cormier","Kristo","Lehtera","Niemi","Bouma","Nicastro","Jokinen","Tessier","Brodie","Wright","Calvert","Cornet","Coyle","Demers","Azevedo","Atkinson","Hextall","Wingels","Redmond","Karpowich","Goggin","Eriksson","Lajunen","Sointu","Nagy","Lasu","Warsofsky","Wudrick","Comrie","Stone","Teubert","Staal","Petrov","Brodeur","Berglund","Warg","Witkowski","Lindback","Barberio","Ullstrom","Grachev","Delmas","Sauve","Pickard","Backstrom","Martinesen","Sundquist","Ovechkin","Nordstrom","Backlund","Pelletier","Bautista","McQuire","Krug","Debrusk","Santeri","Lindblom","Wolski","Leopold","Perez","Burns","Olivier","Samberg","Borgstrom","Igelsias","Newton","Brink","Sarela","Allen","Liljegren","Soderberg","Stein","Manson","Boychuk","Gordon","Martin","Shinkaruk","Jurco","Denisov","Rinne","Hartnell","Cassels","Gravel","Werner","Fucale","Tippett","Veleno","Armia","Gawdin","Smolinski","Levin","Korobov","Tolvanen","Granlund","Goldobin","Demko","Fiala","Arvidsson","Vilardi","Lazar","Bigras","Valimaki","Couture","Barlow","Lucic","Boqvist","Sofillas","Woolley","Barron","De Luca","Irwin","Marsh","Perron","Ho-Sang","Dal Colle","Hamilton","Di Nicola","Lehman","Jarvis","Del Rio","Malmstrom","Hamel","Prosser","Rakell","Kase","Steel","Comtois","Thorn","Radulov","Bishop","Redmond","Flood","Brewer","Perlini","Brouwer","Keith","Holt","Durand","Simmonds","Zikov","Ulanov","Lecavlier","Clancy","Leidekker","Wotton","Mogilny","Seabrook","Brookbank","Ratelle","Tardif","Clune","Kovalchuk","Spezze","Svitov","Weiss","Chistov","Ruutu","Blackburn","Kobasew","Umberger","Goc","Armstrong","Woywitka","Munro","Spiller","Watson","Wanvig","Milroy","Jackman","Pillar","Tyutin","Zigomanis","Cammaleri","Thorburn","Bednar","Pominville","Malec","Bell","Leblanc","Estrada","Aquino","Sharp","Saad","Tootoo","Emery","Virta","Zepp","Woodford","Rogers","Lobb","Valeev","Shastin","Volrab","Posnov","Eaves","Perrault","Jamiki","Timonen","Appleton","Klema","Bruckler","Bieksa","Chiodo","Clowe","Zidlicky","Novak","Holub","Archer","Sigalet","Chovan","Minakov","Oduya","Svatos","Bochenski","Baum","Bembrigde","Sklenar","Razin","Tabacek","Gazdic","Hagos","Welch","Gleason","Novotny","Colaiacovo","Leclaire","Mars","Jamtin","Byram","Turcotte","Seider","Cozens","Boldy","Caufield","Newhook","Krebs","Heinola","Foote","Suzuki","Pinto","Sogaard","Firstov","Struble","Norlinder","Portillo","Ludvig","Beckman","Attard","Legare","Protas","Cajkovic","Lodin","Teply","Nikkanen","Crozier","Kastelic","Mutala","Porco","Guskov","Nodler","Raty","Burzan","Kucherov","Mazura","Moberg","Wedman","Miner","Coskey","Loponen","Bibeau","Silovs","Haider","Thrun","Blumel","Hjorth","Kochetkov","Tomasino","Zegras","Alves","Arniel","Barnes","Baranka","Binette","Centomo","Cyr","Daccord","Deziel","Dupont","Eklund","Ferguson","Foster","Friedman","Greco","Hayes","Heatly","Huska","Irons","Joliat","Junkins","Keetley","Keranen","Lewis","Lizotte","Markov","Makarov","Mann","Merkley","Miska","Minard","Murphy","Motin","Mrazek","Nikulin","Poehling","Ramholt","Ritson","Sabourin","Sceviour","Selmser","Skilton","Tarki","Tepper","Toomey","Turnbull","Vachon","Vauclair","Wadell","Watkins","Wesenberg","Whitecloud","Willis","Yakimov","Zaba","Jaros","Zub","Quick","Hull","Robitaille","Kariya","Bucyk","Shutt","Gainey","Sutter","Suter","Parise","Zucker","Poolman","Spurgeon","Larsson","Dell","Grans","Pilon","Stamkos","Nedemanski","Shaw","Domi","Hanifin","Chelios","Rust","Oleksiak","Garland","Amadio","Lizotte","Soresen","Tuch","Caggiula","Compher","Parayko","Bowey","Mete","Dubnyk","Killorn"];



    // const [league, setLeague] = useState([]);
    // const [conf, setConf] = useState([]);
    // const [div, setDiv] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:3001/getActiveLeague")
    //     .then((response) => response.json())
    //     .then((data) => setLeague({active: data}));
    // }, [league]);
    const league = [
       {
        league_id: 0,
        leagueName: "NHL",
        numConferences: 2,
        DivsPerConf: 2,
        NumTeams: 32
    }
    ];

    // useEffect(() => {
    //     fetch("http://localhost:3001/getActiveConf")
    //     .then((response) => response.json())
    //     .then((data) => setConf({active: data}));
    // }, [conf]);
    const conf = [
        {
        Conf_id:0,
        ConfName: "East"
    },
        {
        Conf_id:1,
        ConfName: "West"
    }
    ];

    // useEffect(() => {
    //     fetch("http://localhost:3001/getActiveDiv")
    //     .then((response) => response.json())
    //     .then((data) => setDiv({active: data}));
    // }, [div]);
    const div = [
        {
            div_id:0,
            Conf_id:0,
            DivName: "Atlantic"
        },
        {
            div_id:1,
            Conf_id:0,
            DivName:"Metro"
        },
        {
            div_id:2,
            Conf_id:1,
            DivName:"Central"
        },
        {
            div_id:3,
            Conf_id:1,
            DivName:"Pacific"
        }
    ];

    function confShow(league,conf,div){

        const teams = [];

        for(let i=0; i < (parseInt(league[0].NumTeams)/((parseInt(league[0].numConferences))*(parseInt(league[0].DivsPerConf)))); i++){
            teams.push(i+1);
        }
        console.log(conf);

        return conf.map((c) => {
           return <div>
                <Row style={{paddingTop:'0%', fontSize:'250%', fontFamily:'Rockwell'}}>
                    {c.ConfName} Conference
                </Row>
                <Row>
                    {divShow(league,div,teams,c)}
                </Row>
            </div>
        });
    };

    function divShow(league,div,teams,c){
        const d = [];
        for(let j = 0; j < ((parseInt(league[0].numConferences))*(parseInt(league[0].DivsPerConf))); j++){
            if(div[j].Conf_id == c.Conf_id){
                d.push(div[j]);
            };
        };
        console.log(d);

        return d.map((d) => {
            return <div style={{paddingTop:'0.5%',paddingLeft:'2%', fontSize:'125%', fontFamily:'Rockwell'}}>
                <Row style={{fontSize:'150%'}}>
                    {d.DivName} Division
                </Row>
                <Row>
                    {createT(teams,d,league)}
                </Row>
            </div>
        });
    };

    function createT(teams,d,league){
        return teams.map((t) => {
            return <Form onSubmit={createTeamQuery}>
                <Row style={{}}>
                    <Col xs={2}>
                        <Form.Label>Team #{t} City</Form.Label>
                        <Form.Control type="text" name="cityName" placeholder="Enter City Name"/>
                    </Col>
                    <Col xs={2}>
                        <Form.Label>Team #{t} Nickname</Form.Label>
                        <Form.Control type="text" name="nickname" placeholder="Enter Nickname"/>
                    </Col>
                    <Col>
                        <Button style={{position:'absolute',marginTop:'1.5%'}} variant="primary" size="lg">
                            Confirm
                        </Button>
                    </Col>
                </Row>
            </Form>
        });
    };

    const createTeamQuery = async(e) => {

    };

    const createPlayerQuery = async(e) => {

    };

    function createTeamPlayers(){
        for(let i=0; i < parseInt(league.NumTeams); i++){
            for(let LW=0; LW < 5; LW++){
                createPlayer("LW",);
            }
            for(let C=0; C < 5; C++){
                createPlayer("C");
            }
            for(let RW=0; RW < 5; RW++){
                createPlayer("RW");
            }
            for(let LD=0; LD < 4; LD++){
                createPlayer("LD");
            }
            for(let RD=0; RD < 4; RD++){
                createPlayer("RD");
            }
            for(let G=0; G < 3; G++){
                createPlayer("G");
            }
        }
    }

    function createPlayer(pos){
        const player = {
            position: pos,
            firstName: firstNames[randomInt(0,firstNames.length-1)],
            lastName: lastNames[randomInt(0,lastNames.length-1)],
            age: randomInt(18,35),
            rating: randomInt(65,95),
            salary: 0,
            years: randomInt(1,5)
        };
    
        if(player.rating < 80 || player.age <= 22){
            player.salary = 750000;
            player.years = 2;
            if(player.years <= 20){
                player.years = 3;
            }
        }else if(player.rating > 79 && player.rating < 82){
            player.salary = 1500000;
        }else if(player.rating > 81 && player.rating < 85){
            player.salary = 3000000;
        }else if(player.rating > 84 && player.rating < 87){
            player.salary = 5000000;
        }else if(player.rating > 86 && player.rating < 90){
            player.salary = 8000000;
        }else{
            player.salary = 10500000;
        }
        createPlayerQuery
    }

    function randomInt(min,max){
        const minCeil = Math.ceil(min);
        const maxFloor = Math.floor(max);
        return Math.floor(Math.random()*(maxFloor-minCeil +1) + minCeil);
    }

    return(
        <div>
            <Row>
                <Col className="text-center" style={{position:'absolute', fontSize:'275%', fontFamily:'Rockwell', paddingTop:'2%'}}>    
                    <div>
                        {league[0].leagueName} Team Setup
                    </div>  
                </Col>
            </Row>
            <Row>
                <Col style={{paddingLeft:'4%', paddingTop:'5%'}}>    
                    <div>
                        {confShow(league,conf,div)}
                    </div>  
                </Col>
                <Col>
                    <Button style={{position:'absolute',marginTop:'1.5%'}} onclick={createTeamPlayers()} variant="primary" size="lg">
                        Complete Team Creation
                    </Button>
                </Col>
            </Row>
        </div>
    );
}

export default CreateTeams;