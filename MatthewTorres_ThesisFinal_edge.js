/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'BEBAS___': '<link rel=\"stylesheet\"href=\"mystyle.css\"type=\"text/css\" media=\"screen\"title=\"\"charset=\"utf-8\"/>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'stage',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"stage.svg",'0px','0px']
                        },
                        {
                            id: 'graphcircle',
                            type: 'image',
                            rect: ['-2013px', '-2122px', '5050px', '5039px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"graphcircle.svg",'0px','0px']
                        },
                        {
                            id: '_4outCircle',
                            type: 'image',
                            rect: ['-91px', '-1260px', '1241px', '1241px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"4outCircle2.svg",'0px','0px'],
                            transform: [[],[],[],['1.5','1.5']]
                        },
                        {
                            id: 'anim4',
                            type: 'group',
                            rect: ['-460px', '341px', '2381', '863', 'auto', 'auto'],
                            transform: [[],[],[],['1.12','1.12']],
                            c: [
                            {
                                id: 'earinfo',
                                type: 'image',
                                rect: ['1256px', '-2px', '1241px', '863px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"earinfo2.svg",'0px','0px']
                            },
                            {
                                id: 'ANIMATIED_PATH',
                                type: 'group',
                                rect: ['130px', '63px', '2251', '538', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'Ellipse3Copy6',
                                    type: 'ellipse',
                                    rect: ['1178px', '251px', '42px', '38px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    opacity: '0.68',
                                    fill: ["rgba(249,237,50,1)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],[],[],['0','0']]
                                },
                                {
                                    id: 'Ellipse3Copy5',
                                    type: 'ellipse',
                                    rect: ['1256px', '251px', '42px', '38px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    opacity: '0.68',
                                    fill: ["rgba(249,237,50,1)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],[],[],['0','0']]
                                },
                                {
                                    id: 'Ellipse3Copy4',
                                    type: 'ellipse',
                                    rect: ['1251px', '152px', '42px', '38px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    opacity: '0.68',
                                    fill: ["rgba(249,237,50,1)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],[],[],['0','0']]
                                },
                                {
                                    id: 'Ellipse3Copy3',
                                    type: 'ellipse',
                                    rect: ['1168px', '153px', '42px', '38px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    opacity: '0.68',
                                    fill: ["rgba(249,237,50,1)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],[],[],['0','0']]
                                },
                                {
                                    id: 'Ellipse3Copy2',
                                    type: 'ellipse',
                                    rect: ['1168px', '84px', '42px', '38px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    opacity: '0.68',
                                    fill: ["rgba(249,237,50,1)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],[],[],['2.93','2.93']]
                                },
                                {
                                    id: 'Ellipse3Copy',
                                    type: 'ellipse',
                                    rect: ['1168px', '348px', '42px', '38px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    opacity: '0.68',
                                    fill: ["rgba(249,237,50,1)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],[],[],['0','0']]
                                },
                                {
                                    id: 'Ellipse3',
                                    type: 'ellipse',
                                    rect: ['935px', '247px', '42px', '38px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    opacity: '0.68',
                                    fill: ["rgba(249,237,50,1)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],[],[],['0','0']]
                                },
                                {
                                    id: 'bigpath',
                                    type: 'rect',
                                    rect: ['0px', '338px', '69px', '61px', 'auto', 'auto'],
                                    borderRadius: ["180px", "180px", "180px", "180px 180px"],
                                    fill: ["rgba(249,237,50,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                },
                                {
                                    id: 'smallpath',
                                    type: 'rect',
                                    rect: ['1406px', '358px', '113px', '17px', 'auto', 'auto'],
                                    borderRadius: ["180px", "180px", "180px", "180px 180px"],
                                    fill: ["rgba(249,237,50,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"]
                                },
                                {
                                    id: 'smallpath2Copy10',
                                    type: 'rect',
                                    rect: ['1504px', '346px', '19px', '17px', 'auto', 'auto'],
                                    borderRadius: ["180px", "180px", "180px", "180px 180px"],
                                    fill: ["rgba(249,237,50,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['33']]
                                },
                                {
                                    id: 'smallpath2Copy9',
                                    type: 'rect',
                                    rect: ['1588px', '305px', '19px', '17px', 'auto', 'auto'],
                                    borderRadius: ["180px", "180px", "180px", "180px 180px"],
                                    fill: ["rgba(249,237,50,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['66']]
                                },
                                {
                                    id: 'smallpath2Copy8',
                                    type: 'rect',
                                    rect: ['1544px', '296px', '19px', '17px', 'auto', 'auto'],
                                    borderRadius: ["180px", "180px", "180px", "180px 180px"],
                                    fill: ["rgba(249,237,50,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['9']]
                                },
                                {
                                    id: 'smallpath2Copy7',
                                    type: 'rect',
                                    rect: ['1621px', '374px', '19px', '17px', 'auto', 'auto'],
                                    borderRadius: ["180px", "180px", "180px", "180px 180px"],
                                    fill: ["rgba(249,237,50,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['-21']]
                                },
                                {
                                    id: 'smallpath2Copy6',
                                    type: 'rect',
                                    rect: ['2368px', '343px', '19px', '17px', 'auto', 'auto'],
                                    borderRadius: ["180px", "180px", "180px", "180px 180px"],
                                    fill: ["rgba(249,237,50,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['-21']]
                                },
                                {
                                    id: 'smallpath2Copy5',
                                    type: 'rect',
                                    rect: ['2366px', '319px', '19px', '17px', 'auto', 'auto'],
                                    borderRadius: ["180px", "180px", "180px", "180px 180px"],
                                    fill: ["rgba(249,237,50,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['-85']]
                                },
                                {
                                    id: 'smallpath2Copy4',
                                    type: 'rect',
                                    rect: ['2369px', '337px', '19px', '17px', 'auto', 'auto'],
                                    borderRadius: ["180px", "180px", "180px", "180px 180px"],
                                    fill: ["rgba(249,237,50,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['-53']]
                                },
                                {
                                    id: 'smallpath2Copy3',
                                    type: 'rect',
                                    rect: ['2368px', '271px', '19px', '17px', 'auto', 'auto'],
                                    borderRadius: ["180px", "180px", "180px", "180px 180px"],
                                    fill: ["rgba(249,237,50,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['-70']]
                                },
                                {
                                    id: 'smallpath2Copy2',
                                    type: 'rect',
                                    rect: ['2369px', '498px', '19px', '17px', 'auto', 'auto'],
                                    borderRadius: ["180px", "180px", "180px", "180px 180px"],
                                    fill: ["rgba(249,237,50,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['-60']]
                                },
                                {
                                    id: 'smallpath2Copy',
                                    type: 'rect',
                                    rect: ['2369px', '542px', '19px', '17px', 'auto', 'auto'],
                                    borderRadius: ["180px", "180px", "180px", "180px 180px"],
                                    fill: ["rgba(249,237,50,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['-31']]
                                },
                                {
                                    id: 'smallpath2',
                                    type: 'rect',
                                    rect: ['2365px', '202px', '553px', '17px', 'auto', 'auto'],
                                    borderRadius: ["180px", "180px", "180px", "180px 180px"],
                                    fill: ["rgba(249,237,50,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['-90']]
                                }]
                            }]
                        },
                        {
                            id: 'Anim3',
                            type: 'group',
                            rect: ['151px', '1685px', '1115px', '1661px', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],[],[],['4','4']],
                            c: [
                            {
                                id: 'anim3circle2',
                                type: 'image',
                                rect: ['1452px', '10px', '686px', '686px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Pasted32.svg",'0px','0px'],
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'man',
                                type: 'image',
                                rect: ['354px', '66px', '741px', '1595px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"man2.svg",'0px','0px']
                            },
                            {
                                id: 'ybomText',
                                type: 'image',
                                rect: ['-437px', '689px', '396px', '50px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"ybomText2.svg",'0px','0px']
                            },
                            {
                                id: 'brain',
                                type: 'image',
                                rect: ['1068px', '93px', '384px', '245px', 'auto', 'auto'],
                                opacity: '0',
                                fill: ["rgba(0,0,0,0)",im+"brain3.svg",'0px','0px']
                            }]
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['485px', '-369px', '92px', '1075px', 'auto', 'auto'],
                            borderRadius: ["192px", "192px", "192px", "192px 192px"],
                            fill: ["rgba(173,53,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Animation2',
                            type: 'group',
                            rect: ['1055px', '14px', '1508', '938', 'auto', 'auto'],
                            opacity: '1',
                            c: [
                            {
                                id: 'tableGraphic',
                                type: 'image',
                                rect: ['109px', '521px', '1026px', '233px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"tableGraphic2.svg",'0px','0px']
                            },
                            {
                                id: 'boomBox',
                                type: 'image',
                                rect: ['-906px', '164px', '748px', '351px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"boomBox2.svg",'0px','0px']
                            },
                            {
                                id: 'Anim2Text',
                                type: 'image',
                                rect: ['388px', '587px', '518px', '41px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Anim2Text3.svg",'0px','0px']
                            },
                            {
                                id: 'Anim2Text2',
                                type: 'image',
                                rect: ['389px', '654px', '503px', '42px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Anim2Text22.svg",'0px','0px']
                            },
                            {
                                id: 'SoundCopy3',
                                type: 'image',
                                rect: ['761px', '-263px', '113px', '113px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Sound2.svg",'0px','0px'],
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'SoundCopy2',
                                type: 'image',
                                rect: ['762px', '-262px', '113px', '113px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Sound2.svg",'0px','0px'],
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'SoundCopy',
                                type: 'image',
                                rect: ['247px', '-259px', '113px', '113px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Sound2.svg",'0px','0px'],
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'Sound',
                                type: 'image',
                                rect: ['246px', '-258px', '113px', '113px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Sound2.svg",'0px','0px'],
                                transform: [[],[],[],['0','0']]
                            },
                            {
                                id: 'Anim2PathAnimation',
                                type: 'group',
                                rect: ['-1030px', '7px', '542px', '338px', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'Anim2path1Copy4',
                                    type: 'rect',
                                    rect: ['1106px', '278px', '243px', '24px', 'auto', 'auto'],
                                    fill: ["rgba(220,209,53,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'Anim2path1Copy3',
                                    type: 'rect',
                                    rect: ['1100px', '-90px', '26px', '516px', 'auto', 'auto'],
                                    fill: ["rgba(220,209,53,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'EllipseCopy3',
                                    type: 'ellipse',
                                    rect: ['1112px', '156px', '24px', '24px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(220,209,52,1.00)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                },
                                {
                                    id: 'Anim2path1Copy2',
                                    type: 'rect',
                                    rect: ['1106px', '278px', '243px', '24px', 'auto', 'auto'],
                                    fill: ["rgba(220,209,53,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'EllipseCopy2',
                                    type: 'ellipse',
                                    rect: ['1112px', '161px', '24px', '24px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(220,209,52,1.00)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                },
                                {
                                    id: 'EllipseCopy',
                                    type: 'ellipse',
                                    rect: ['1109px', '157px', '24px', '24px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(220,209,52,1.00)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                },
                                {
                                    id: 'Anim2path1Copy',
                                    type: 'rect',
                                    rect: ['1115px', '120px', '96px', '24px', 'auto', 'auto'],
                                    fill: ["rgba(220,209,53,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['90']]
                                },
                                {
                                    id: 'Anim2path1',
                                    type: 'rect',
                                    rect: ['487px', '-292px', '987px', '24px', 'auto', 'auto'],
                                    fill: ["rgba(220,209,53,1.00)"],
                                    stroke: [0,"rgb(0, 0, 0)","none"],
                                    transform: [[],['181']]
                                },
                                {
                                    id: 'Ellipse',
                                    type: 'ellipse',
                                    rect: ['1475px', '-286px', '24px', '24px', 'auto', 'auto'],
                                    borderRadius: ["50%", "50%", "50%", "50%"],
                                    fill: ["rgba(220,209,52,1.00)"],
                                    stroke: [0,"rgba(0,0,0,1)","none"]
                                }]
                            }]
                        },
                        {
                            id: 'IntroTransition',
                            type: 'image',
                            rect: ['-554px', '-399px', '1593px', '1593px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"Anim1Circle42.svg",'0px','0px']
                        },
                        {
                            id: 'Anim1',
                            type: 'group',
                            rect: ['312px', '0px', '736', '792', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0','0']],
                            c: [
                            {
                                id: 'Anim1Circle2',
                                type: 'image',
                                rect: ['0px', '0px', '736px', '792px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Anim1Circle22.svg",'0px','0px']
                            },
                            {
                                id: 'anim1Circle3',
                                type: 'image',
                                rect: ['42px', '101px', '594px', '594px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"anim1Circle32.svg",'0px','0px'],
                                transform: [[],['360']]
                            },
                            {
                                id: 'Anim1Circle4',
                                type: 'image',
                                rect: ['115px', '174px', '447px', '447px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"Anim1Circle42.svg",'0px','0px'],
                                transform: [[],[],[],['0.33','0.33']]
                            },
                            {
                                id: 'Anim1IntroText',
                                type: 'image',
                                rect: ['250px', '297px', '178px', '242px', 'auto', 'auto'],
                                opacity: '1',
                                fill: ["rgba(0,0,0,0)",im+"Anim1IntroText2.svg",'0px','0px'],
                                transform: [[],[],[],['0','0']]
                            }]
                        },
                        {
                            id: 'Anim4Text',
                            type: 'image',
                            rect: ['-868px', '72px', '701px', '50px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Anim4Text2.svg",'0px','0px']
                        },
                        {
                            id: 'pulse2',
                            symbolName: 'pulse',
                            type: 'rect',
                            rect: ['-1076px', '190px', '0', '0', 'auto', 'auto']
                        },
                        {
                            id: 'Heart',
                            type: 'image',
                            rect: ['234px', '768px', '583px', '583px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Heart2.svg",'0px','0px']
                        },
                        {
                            id: 'Anim6Text',
                            type: 'image',
                            rect: ['140px', '593px', '778px', '50px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Anim6Text2.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'Pasted4',
                            type: 'image',
                            rect: ['338px', '108px', '1026px', '1001px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted42.svg",'0px','0px'],
                            transform: [[],[],[],['0.88','0.88']]
                        },
                        {
                            id: 'Ellipse4',
                            type: 'ellipse',
                            rect: ['408px', '157px', '878px', '878px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0.4',
                            fill: ["rgba(249,237,50,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['871'],[],['0.88','0.88']]
                        },
                        {
                            id: 'Brain2',
                            type: 'image',
                            rect: ['399px', '121px', '726px', '463px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Brain22.svg",'0px','0px'],
                            transform: [[],['1440'],[],['0.94','0.88']]
                        },
                        {
                            id: 'Purple',
                            type: 'image',
                            rect: ['463px', '345px', '435px', '237px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"Purple2.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'orange',
                            type: 'image',
                            rect: ['265px', '24px', '416px', '309px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"orange2.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'yellow',
                            type: 'image',
                            rect: ['628px', '125px', '302px', '362px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"yellow2.svg",'0px','0px']
                        },
                        {
                            id: 'green',
                            type: 'image',
                            rect: ['22px', '190px', '430px', '285px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"green2.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'Violet',
                            type: 'image',
                            rect: ['272px', '495px', '398px', '221px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"Violet2.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'inCirc1',
                            symbolName: 'inCirc1',
                            type: 'rect',
                            rect: ['397px', '258px', '251', '252', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],['-720'],[],['0','0']]
                        },
                        {
                            id: 'inCirc2',
                            symbolName: 'inCirc2',
                            type: 'rect',
                            rect: ['380px', '243px', '285', '282', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],['930'],[],['0','0']]
                        },
                        {
                            id: 'inCirc3',
                            symbolName: 'inCirc3',
                            type: 'rect',
                            rect: ['368px', '232px', '308', '303', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'outCirc1',
                            symbolName: 'outCirc1',
                            type: 'rect',
                            rect: ['311px', '172px', '423', '423', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'outCirc2',
                            symbolName: 'outCirc2',
                            type: 'rect',
                            rect: ['238px', '100px', '568', '568', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],['-1773'],[],['0','0']]
                        },
                        {
                            id: 'CultAnim1Circle1',
                            type: 'image',
                            rect: ['2193px', '-661px', '482px', '482px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"circleGraphic2.svg",'0px','0px'],
                            transform: [[],[],[],['0.94','0.94']]
                        },
                        {
                            id: 'CultAnim1Circle2',
                            type: 'image',
                            rect: ['2194px', '-805px', '688px', '712px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Anim1Circle23.svg",'0px','0px']
                        },
                        {
                            id: 'CultAnim1Circle3',
                            type: 'image',
                            rect: ['-394px', '267px', '549px', '396px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Anim1Circle33.svg",'0px','0px'],
                            transform: [[],[],[],['3','3']]
                        },
                        {
                            id: 'CultureIntro',
                            type: 'image',
                            rect: ['-1878px', '277px', '168px', '273px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"CultureIntro.svg",'0px','0px'],
                            transform: [[],[],[],['10.13','10.13']]
                        },
                        {
                            id: 'bg2',
                            type: 'rect',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(188,75,47,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'RoundRectCopy7',
                            type: 'rect',
                            rect: ['-390px', '601px', '41px', '33px', 'auto', 'auto'],
                            borderRadius: ["180px", "180px", "180px", "180px 180px"],
                            fill: ["rgba(223,186,68,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['45']]
                        },
                        {
                            id: 'RoundRectCopy6',
                            type: 'rect',
                            rect: ['-1074px', '601px', '41px', '33px', 'auto', 'auto'],
                            borderRadius: ["180px", "180px", "180px", "180px 180px"],
                            fill: ["rgba(223,186,68,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['45']]
                        },
                        {
                            id: 'RoundRectCopy5',
                            type: 'rect',
                            rect: ['-390px', '601px', '41px', '33px', 'auto', 'auto'],
                            borderRadius: ["180px", "180px", "180px", "180px 180px"],
                            fill: ["rgba(223,186,68,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['45']]
                        },
                        {
                            id: 'RoundRectCopy4',
                            type: 'rect',
                            rect: ['-937px', '468px', '41px', '33px', 'auto', 'auto'],
                            borderRadius: ["180px", "180px", "180px", "180px 180px"],
                            fill: ["rgba(223,186,68,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['45']]
                        },
                        {
                            id: 'RoundRectCopy3',
                            type: 'rect',
                            rect: ['-792px', '312px', '41px', '33px', 'auto', 'auto'],
                            borderRadius: ["180px", "180px", "180px", "180px 180px"],
                            fill: ["rgba(223,186,68,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RoundRectCopy2',
                            type: 'rect',
                            rect: ['-273px', '601px', '41px', '33px', 'auto', 'auto'],
                            borderRadius: ["180px", "180px", "180px", "180px"],
                            opacity: '1',
                            fill: ["rgba(223,186,68,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-44']]
                        },
                        {
                            id: 'RoundRectCopy',
                            type: 'rect',
                            rect: ['-343px', '601px', '41px', '33px', 'auto', 'auto'],
                            borderRadius: ["180px", "180px", "180px", "180px"],
                            opacity: '1',
                            fill: ["rgba(223,186,68,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['-44'],[],['1.02039']]
                        },
                        {
                            id: 'peace',
                            type: 'image',
                            rect: ['458px', '549px', '123px', '123px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"peace.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'guy2',
                            type: 'image',
                            rect: ['391px', '413px', '204px', '410px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"guy2.svg",'0px','0px'],
                            transform: [[],[],[],['0.2','0.2']]
                        },
                        {
                            id: 'mountains',
                            type: 'image',
                            rect: ['0px', '801px', '1024px', '629px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"mountains.svg",'0px','0px']
                        },
                        {
                            id: 'guy1',
                            type: 'image',
                            rect: ['581px', '1417px', '332px', '691px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"guy1.svg",'0px','0px'],
                            transform: [[],[],[],['0.2','0.2']]
                        },
                        {
                            id: 'CultAnim2Text',
                            type: 'image',
                            rect: ['1080px', '140px', '217px', '85px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Anim2Text4.svg",'0px','0px']
                        },
                        {
                            id: 'CultAnim2Title',
                            type: 'image',
                            rect: ['1086px', '64px', '380px', '51px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Anim2Title.svg",'0px','0px']
                        },
                        {
                            id: 'CultAnim3Text',
                            type: 'image',
                            rect: ['1443px', '141px', '303px', '73px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Anim3Text.svg",'0px','0px']
                        },
                        {
                            id: 'dotOneCopy4',
                            type: 'image',
                            rect: ['587px', '431px', '122px', '122px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"dotOne.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'dotOneCopy3',
                            type: 'image',
                            rect: ['320px', '431px', '122px', '122px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"dotOne.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'dotOneCopy2',
                            type: 'image',
                            rect: ['194px', '261px', '122px', '122px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"dotOne.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'dotOneCopy',
                            type: 'image',
                            rect: ['459px', '261px', '122px', '122px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"dotOne.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'dotOne',
                            type: 'image',
                            rect: ['723px', '261px', '122px', '122px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"dotOne.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'Anim4TextCopy',
                            type: 'image',
                            rect: ['533px', '139px', '317px', '142px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Anim4Text3.svg",'0px','0px']
                        },
                        {
                            id: 'water',
                            type: 'rect',
                            rect: ['-2577px', '-36px', '1421px', '900px', 'auto', 'auto'],
                            fill: ["rgba(91,180,229,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'worldCopy',
                            symbolName: 'Symbol_1',
                            type: 'rect',
                            rect: ['-1488px', '264px', '1676', '358', 'auto', 'auto']
                        },
                        {
                            id: 'world',
                            symbolName: 'Symbol_1',
                            type: 'rect',
                            rect: ['-1488px', '264px', '1676', '358', 'auto', 'auto']
                        },
                        {
                            id: 'space',
                            type: 'image',
                            rect: ['-3267px', '-357px', '2136px', '2058px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"space.svg",'0px','0px']
                        },
                        {
                            id: 'Anim5Text',
                            type: 'image',
                            rect: ['1098px', '37px', '522px', '51px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Anim5Text.svg",'0px','0px']
                        },
                        {
                            id: 'PsychAnim1Circle2',
                            type: 'image',
                            rect: ['-242px', '-244px', '486px', '485px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Anim1Circle24.svg",'0px','0px']
                        },
                        {
                            id: 'PsychAnim1Circle3',
                            type: 'image',
                            rect: ['1694px', '-135px', '409px', '403px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Anim1Circle34.svg",'0px','0px'],
                            transform: [[],['360'],[],['4','4']]
                        },
                        {
                            id: 'PsychAnim1Circle6',
                            type: 'image',
                            rect: ['512px', '253px', '2470px', '2494px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Anim1Circle6.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'PsychAnim1Circle4',
                            type: 'image',
                            rect: ['1914px', '-283px', '556px', '419px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Anim1Circle43.svg",'0px','0px'],
                            transform: [[],['360'],[],['4','4']]
                        },
                        {
                            id: 'PsychAnim1Circle5',
                            type: 'image',
                            rect: ['-87px', '-325px', '395px', '631px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Anim1Circle5.svg",'0px','0px'],
                            transform: [[],['360'],[],['4','4']]
                        },
                        {
                            id: 'PsychAnim1Circle',
                            type: 'image',
                            rect: ['-226px', '-227px', '453px', '452px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Anim1Circle.svg",'0px','0px']
                        },
                        {
                            id: 'PsychAnim1Intro',
                            type: 'image',
                            rect: ['-385px', '259px', '210px', '278px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"Anim1Intro.svg",'0px','0px'],
                            transform: [[],[],[],['9.66','9.66']]
                        },
                        {
                            id: 'EllipseCopy4',
                            type: 'ellipse',
                            rect: ['-37px', '-373px', '854px', '854px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(24,35,42,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'guy2Copy',
                            type: 'image',
                            rect: ['1291px', '102px', '790px', '993px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"guy23.svg",'0px','0px']
                        },
                        {
                            id: 'guy22',
                            type: 'image',
                            rect: ['1366px', '102px', '790px', '993px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"guy22.svg",'0px','0px']
                        },
                        {
                            id: 'yellow_bar',
                            type: 'image',
                            rect: ['417px', '337px', '697px', '71px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"yellow%20bar.svg",'0px','0px']
                        },
                        {
                            id: 'Anim2TextCopy',
                            type: 'image',
                            rect: ['1081px', '42px', '528px', '50px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Anim2Text5.svg",'0px','0px']
                        },
                        {
                            id: 'guy32',
                            type: 'image',
                            rect: ['1508px', '137px', '790px', '993px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"guy32.svg",'0px','0px']
                        },
                        {
                            id: 'Anim2Circle',
                            type: 'image',
                            rect: ['-336px', '941px', '716px', '716px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Anim2Circle.svg",'0px','0px']
                        },
                        {
                            id: 'HappyMusic',
                            type: 'image',
                            rect: ['37px', '799px', '312px', '94px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"HappyMusic.svg",'0px','0px']
                        },
                        {
                            id: 'BlueBar',
                            type: 'image',
                            rect: ['1123px', '389px', '697px', '71px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"BlueBar.svg",'0px','0px']
                        },
                        {
                            id: 'Anim3Text',
                            type: 'image',
                            rect: ['1244px', '42px', '479px', '50px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Anim3Text2.svg",'0px','0px']
                        },
                        {
                            id: 'SadMusic',
                            type: 'image',
                            rect: ['37px', '654px', '312px', '94px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"SadMusic.svg",'0px','0px']
                        },
                        {
                            id: 'RedBar',
                            type: 'image',
                            rect: ['1925px', '42px', '696px', '71px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"RedBar.svg",'0px','0px']
                        },
                        {
                            id: 'Anim4TextCopy2',
                            type: 'image',
                            rect: ['1190px', '42px', '531px', '50px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Anim4Text4.svg",'0px','0px']
                        },
                        {
                            id: 'MadMusic',
                            type: 'image',
                            rect: ['37px', '649px', '312px', '94px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"MadMusic.svg",'0px','0px']
                        },
                        {
                            id: 'Anim6TextCopy',
                            type: 'image',
                            rect: ['1105px', '67px', '541px', '102px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Anim6Text3.svg",'0px','0px']
                        },
                        {
                            id: 'AngryBox',
                            type: 'image',
                            rect: ['-385px', '627px', '261px', '282px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"AngryBos.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'HappyBox',
                            type: 'image',
                            rect: ['614px', '-405px', '344px', '302px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted2.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'HappyCircCopy2',
                            type: 'ellipse',
                            rect: ['-556px', '24px', '155px', '156px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '1',
                            fill: ["rgba(24,35,42,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'HappyCircCopy',
                            type: 'ellipse',
                            rect: ['231px', '255px', '155px', '156px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '1',
                            fill: ["rgba(24,35,42,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'HappyCirc',
                            type: 'ellipse',
                            rect: ['231px', '255px', '155px', '156px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '1',
                            fill: ["rgba(24,35,42,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],['2.02','2.02']]
                        },
                        {
                            id: 'sadBox',
                            type: 'image',
                            rect: ['-283px', '707px', '332px', '212px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sadBox.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'SadCircCopy2',
                            type: 'ellipse',
                            rect: ['406px', '238px', '224px', '225px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0.71',
                            fill: ["rgba(92,180,229,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],['2.02','2.02']]
                        },
                        {
                            id: 'SadCircCopy',
                            type: 'ellipse',
                            rect: ['426px', '257px', '184px', '185px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0.71',
                            fill: ["rgba(92,180,229,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],['2.02','2.02']]
                        },
                        {
                            id: 'SadCirc',
                            type: 'ellipse',
                            rect: ['440px', '273px', '155px', '156px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '1',
                            fill: ["rgba(92,180,229,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],['2.02','2.02']]
                        },
                        {
                            id: 'MadCircleCopy2',
                            type: 'ellipse',
                            rect: ['624px', '881px', '155px', '156px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0.7',
                            fill: ["rgba(173,53,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'MadCircleCopy',
                            type: 'ellipse',
                            rect: ['640px', '270px', '155px', '156px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0.7',
                            fill: ["rgba(173,53,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],['2.5','2.5']]
                        },
                        {
                            id: 'MadCircle',
                            type: 'ellipse',
                            rect: ['639px', '270px', '155px', '156px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0.7',
                            fill: ["rgba(173,53,30,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'SadGraphic',
                            type: 'image',
                            rect: ['-118px', '-424px', '523px', '538px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"SadGraphic.svg",'0px','0px'],
                            transform: [[],[],[],['0.09','0.09']]
                        },
                        {
                            id: 'girl1',
                            type: 'image',
                            rect: ['-1953px', '337px', '188px', '177px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"girl1.svg",'0px','0px']
                        },
                        {
                            id: 'Girl2',
                            type: 'image',
                            rect: ['424px', '342px', '188px', '177px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Girl2.svg",'0px','0px']
                        },
                        {
                            id: 'girl3',
                            type: 'image',
                            rect: ['-1380px', '342px', '188px', '177px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"girl3.svg",'0px','0px']
                        },
                        {
                            id: 'Poker_Face',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['742', '1251', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"Poker%20Face.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'Puritania',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1852', '1962', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"Puritania.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'Folsom_Prison_Blues',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['648', '1240', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"Folsom%20Prison%20Blues.m4a"],
                            preload: 'auto'
                        },
                        {
                            id: '__Troopers',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['2050', '1861', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"%24%24%20Troopers.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'HappyCircleGraphic',
                            type: 'image',
                            rect: ['-1061px', '-630px', '521px', '535px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"HappyCircleGraphic.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'HappyText',
                            type: 'image',
                            rect: ['1866px', '74px', '342px', '102px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"HappyText.svg",'0px','0px']
                        },
                        {
                            id: 'SadHeader',
                            type: 'image',
                            rect: ['1179px', '63px', '293px', '102px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"SadHeader.svg",'0px','0px']
                        },
                        {
                            id: 'MadCircleGraphic',
                            type: 'image',
                            rect: ['439px', '954px', '538px', '538px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"MadCircleGraphic.svg",'0px','0px'],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'MadText',
                            type: 'image',
                            rect: ['-243px', '-362px', '345px', '102px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"MadText.svg",'0px','0px']
                        },
                        {
                            id: 'psychButton',
                            symbolName: 'psychButton',
                            type: 'rect',
                            rect: ['163px', '25px', '718', '718', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            transform: [[],['941'],[],['0','0']]
                        },
                        {
                            id: 'cultButton',
                            symbolName: 'cultButton',
                            type: 'rect',
                            rect: ['256px', '118px', '532', '532', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            transform: [[],['1994'],[],['0','0']]
                        },
                        {
                            id: 'CultexitButton',
                            type: 'image',
                            rect: ['1424px', '49px', '337px', '176px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"exitButton.svg",'0px','0px']
                        },
                        {
                            id: 'PsychexitButton',
                            type: 'image',
                            rect: ['1050px', '26px', '337px', '176px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"exitButton2.svg",'0px','0px']
                        },
                        {
                            id: 'bioButton',
                            symbolName: 'bioButton',
                            type: 'rect',
                            rect: ['319px', '181px', '406', '406', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            transform: [[],['1080'],[],['0','0']]
                        },
                        {
                            id: 'titleNav',
                            symbolName: 'titleNav',
                            type: 'rect',
                            rect: ['441px', '303', '162', '162', 'auto', 'auto'],
                            cursor: 'pointer',
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'anim45forward',
                            type: 'image',
                            rect: ['1055px', '400px', '19px', '38px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"forwardButton22.svg",'0px','0px']
                        },
                        {
                            id: 'anim3forward',
                            type: 'image',
                            rect: ['971px', '400px', '19px', '38px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"forwardButton22.svg",'0px','0px']
                        },
                        {
                            id: 'anim2forward',
                            type: 'image',
                            rect: ['966px', '400px', '19px', '38px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"forwardButton22.svg",'0px','0px']
                        },
                        {
                            id: 'anim1forward',
                            type: 'image',
                            rect: ['804px', '400px', '19px', '38px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"forwardButton22.svg",'0px','0px']
                        },
                        {
                            id: 'anim2back',
                            type: 'image',
                            rect: ['25px', '400px', '19px', '38px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"anim1back2.svg",'0px','0px']
                        },
                        {
                            id: 'anim3back',
                            type: 'image',
                            rect: ['25px', '400px', '19px', '38px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"anim1back2.svg",'0px','0px']
                        },
                        {
                            id: 'anim4back',
                            type: 'image',
                            rect: ['21px', '398px', '19px', '38px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"anim1back2.svg",'0px','0px']
                        },
                        {
                            id: 'anim',
                            type: 'image',
                            rect: ['21px', '398px', '19px', '38px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"anim1back2.svg",'0px','0px']
                        },
                        {
                            id: 'exit_Button',
                            type: 'image',
                            rect: ['1380px', '25px', '337px', '176px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"exit_Button2.svg",'0px','0px']
                        },
                        {
                            id: 'CultAnim2Back',
                            type: 'image',
                            rect: ['41px', '413px', '19px', '38px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Anim1Back22.svg",'0px','0px']
                        },
                        {
                            id: 'CultAnim1Forward',
                            type: 'image',
                            rect: ['1051px', '456px', '19px', '38px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Anim1fForward.svg",'0px','0px']
                        },
                        {
                            id: 'CultAnim2Forward',
                            type: 'image',
                            rect: ['942px', '413px', '19px', '38px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Anim1fForward.svg",'0px','0px']
                        },
                        {
                            id: 'CultAnim3Back',
                            type: 'image',
                            rect: ['-61px', '413px', '19px', '38px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Anim1Back22.svg",'0px','0px']
                        },
                        {
                            id: 'CultAnim3Forward',
                            type: 'image',
                            rect: ['1078px', '413px', '19px', '38px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Anim1fForward.svg",'0px','0px']
                        },
                        {
                            id: 'CultAnim4Back',
                            type: 'image',
                            rect: ['-61px', '413px', '19px', '38px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Anim1Back22.svg",'0px','0px']
                        },
                        {
                            id: 'CultAnim4Forward',
                            type: 'image',
                            rect: ['1078px', '413px', '19px', '38px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Anim1fForward.svg",'0px','0px']
                        },
                        {
                            id: 'CultAnim5Back',
                            type: 'image',
                            rect: ['-61px', '413px', '19px', '38px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Anim1Back22.svg",'0px','0px']
                        },
                        {
                            id: 'PsychAnim1Forward',
                            type: 'image',
                            rect: ['1035px', '384px', '19px', '38px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Anim1Forward.svg",'0px','0px']
                        },
                        {
                            id: 'PsychAnim2Forward',
                            type: 'image',
                            rect: ['970px', '384px', '19px', '38px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Anim1Forward.svg",'0px','0px']
                        },
                        {
                            id: 'PsychAnim2Back',
                            type: 'image',
                            rect: ['-58px', '370px', '19px', '38px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Anim2Back.svg",'0px','0px']
                        },
                        {
                            id: 'PsychAnim3Forward',
                            type: 'image',
                            rect: ['1071px', '368px', '19px', '38px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Anim1Forward.svg",'0px','0px']
                        },
                        {
                            id: 'PsychAnim3Back',
                            type: 'image',
                            rect: ['-117px', '370px', '19px', '38px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Anim2Back.svg",'0px','0px']
                        },
                        {
                            id: 'PsychAnim4Forward',
                            type: 'image',
                            rect: ['970px', '384px', '19px', '38px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Anim1Forward.svg",'0px','0px']
                        },
                        {
                            id: 'PsychAnim4Back',
                            type: 'image',
                            rect: ['34px', '370px', '19px', '38px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Anim2Back.svg",'0px','0px']
                        },
                        {
                            id: 'PsychAnim5Back',
                            type: 'image',
                            rect: ['-38px', '370px', '19px', '38px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Anim2Back.svg",'0px','0px']
                        },
                        {
                            id: 'PsychAnim6Back',
                            type: 'image',
                            rect: ['-66px', '370px', '19px', '38px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"Anim2Back.svg",'0px','0px']
                        },
                        {
                            id: 'yellowButton',
                            type: 'image',
                            rect: ['-783px', '466px', '68px', '68px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"yellowButton.svg",'0px','0px']
                        },
                        {
                            id: 'BlueButton',
                            type: 'image',
                            rect: ['-783px', '92px', '68px', '68px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"BlueButton.svg",'0px','0px']
                        },
                        {
                            id: 'RedButton',
                            type: 'image',
                            rect: ['-783px', '92px', '68px', '68px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"RedButton.svg",'0px','0px']
                        },
                        {
                            id: '_07_Traveling_Music',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['1171', '657', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"07%20Traveling%20Music.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: '_9th_Symphony',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['956', '693', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"9th%20Symphony.mp3"],
                            preload: 'auto'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1024px', '768px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 436000,
                    autoPlay: true,
                    labels: {
                        "intro": 0,
                        "loop": 1704,
                        "Biology": 31332,
                        "introTrans": 32000,
                        "animOne": 33000,
                        "animOneEnd": 35000,
                        "animOneOut": 35250,
                        "animOneOutEnd": 36500,
                        "animTwo": 38000,
                        "animTwoEnd": 42457,
                        "animTwoOut": 42610,
                        "animTwoOutEnd": 53000,
                        "anim3": 55500,
                        "anim3End": 64500,
                        "anim3outro": 66000,
                        "anim3outroEnd": 69000,
                        "anim4": 70000,
                        "anim4Out": 82750,
                        "anim4OutEnd": 85000,
                        "anim5": 86000,
                        "anim5End": 94103,
                        "Anim5Out": 94500,
                        "Anim6": 98000,
                        "Anim6End": 109000,
                        "CultAnim1": 125000,
                        "CultAnim1End": 126000,
                        "CultAnim2": 126250,
                        "CultAnim2End": 129500,
                        "CultAnim3": 131000,
                        "CultAnim3End": 138000,
                        "CultAnim4": 139000,
                        "CultAnim4End": 145000,
                        "CultAnim5": 145750,
                        "Cultloop": 148000,
                        "CultAnim5End": 185000,
                        "Psych": 240000,
                        "PsychAnim1": 241000,
                        "PsychAnim1End": 242000,
                        "PsychAnim2": 242750,
                        "PsychAnim2End": 248665,
                        "PsychAnim3": 249500,
                        "PsychAnim3End": 253000,
                        "PsychAnim4": 253750,
                        "PsychAnim4End": 260500,
                        "PsychAnim5": 266000,
                        "PsychAnim5End": 273500,
                        "PsychAnim6": 274500,
                        "PsychAnim6End": 291500,
                        "mad": 315000,
                        "madEnd": 328500,
                        "Sad": 390835,
                        "SadEnd": 401857,
                        "Happy": 425915,
                        "HappyEnd": 434665
                    },
                    data: [
                        [
                            "eid1868",
                            "top",
                            125000,
                            0,
                            "easeOutElastic",
                            "${peace}",
                            '-245px',
                            '-245px'
                        ],
                        [
                            "eid1869",
                            "top",
                            131000,
                            0,
                            "easeOutElastic",
                            "${peace}",
                            '-245px',
                            '233px'
                        ],
                        [
                            "eid1870",
                            "top",
                            139000,
                            3000,
                            "easeOutElastic",
                            "${peace}",
                            '233px',
                            '549px'
                        ],
                        [
                            "eid2250",
                            "opacity",
                            429665,
                            0,
                            "easeInOutElastic",
                            "${HappyCircCopy}",
                            '0.699999988079071',
                            '0.699999988079071'
                        ],
                        [
                            "eid2120",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${Girl2}",
                            '342px',
                            '342px'
                        ],
                        [
                            "eid2121",
                            "top",
                            274500,
                            3128,
                            "easeInOutElastic",
                            "${Girl2}",
                            '342px',
                            '245px'
                        ],
                        [
                            "eid2122",
                            "top",
                            315000,
                            3000,
                            "easeInOutElastic",
                            "${Girl2}",
                            '245px',
                            '242px'
                        ],
                        [
                            "eid2123",
                            "top",
                            390835,
                            0,
                            "easeInOutElastic",
                            "${Girl2}",
                            '242px',
                            '245px'
                        ],
                        [
                            "eid1434",
                            "scaleY",
                            39750,
                            2250,
                            "easeInOutElastic",
                            "${Sound}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2170",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${MadCircleCopy2}",
                            '881px',
                            '881px'
                        ],
                        [
                            "eid2171",
                            "top",
                            322000,
                            0,
                            "easeInOutElastic",
                            "${MadCircleCopy2}",
                            '881px',
                            '270px'
                        ],
                        [
                            "eid2172",
                            "top",
                            332127,
                            0,
                            "easeInOutElastic",
                            "${MadCircleCopy2}",
                            '270px',
                            '1080px'
                        ],
                        [
                            "eid1651",
                            "scaleX",
                            88000,
                            500,
                            "easeInCubic",
                            "${Pasted4}",
                            '0',
                            '1.2'
                        ],
                        [
                            "eid1652",
                            "scaleX",
                            88500,
                            250,
                            "easeInCubic",
                            "${Pasted4}",
                            '1.2',
                            '0.88'
                        ],
                        [
                            "eid1653",
                            "scaleX",
                            94500,
                            1500,
                            "easeOutQuint",
                            "${Pasted4}",
                            '0.88',
                            '2'
                        ],
                        [
                            "eid1540",
                            "top",
                            74750,
                            1000,
                            "linear",
                            "${smallpath2Copy9}",
                            '305px',
                            '338px'
                        ],
                        [
                            "eid1865",
                            "left",
                            125000,
                            0,
                            "easeOutElastic",
                            "${guy2}",
                            '-665px',
                            '-665px'
                        ],
                        [
                            "eid1866",
                            "left",
                            128000,
                            1000,
                            "easeOutElastic",
                            "${guy2}",
                            '-665px',
                            '210px'
                        ],
                        [
                            "eid1867",
                            "left",
                            139000,
                            3000,
                            "easeOutElastic",
                            "${guy2}",
                            '210px',
                            '391px'
                        ],
                        [
                            "eid2467",
                            "left",
                            200000,
                            0,
                            "linear",
                            "${guy2}",
                            '391px',
                            '-1125px'
                        ],
                        [
                            "eid2272",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${AngryBox}",
                            '627px',
                            '627px'
                        ],
                        [
                            "eid2273",
                            "top",
                            327000,
                            1000,
                            "easeInOutElastic",
                            "${AngryBox}",
                            '222px',
                            '321px'
                        ],
                        [
                            "eid2274",
                            "top",
                            332127,
                            0,
                            "easeInOutElastic",
                            "${AngryBox}",
                            '321px',
                            '830px'
                        ],
                        [
                            "eid1886",
                            "top",
                            125000,
                            0,
                            "easeOutElastic",
                            "${RoundRectCopy2}",
                            '601px',
                            '601px'
                        ],
                        [
                            "eid1887",
                            "top",
                            139750,
                            0,
                            "easeOutElastic",
                            "${RoundRectCopy2}",
                            '601px',
                            '601px'
                        ],
                        [
                            "eid1888",
                            "top",
                            141000,
                            1000,
                            "easeOutElastic",
                            "${RoundRectCopy2}",
                            '601px',
                            '435px'
                        ],
                        [
                            "eid1793",
                            "top",
                            145750,
                            0,
                            "easeOutElastic",
                            "${space}",
                            '-357px',
                            '-357px'
                        ],
                        [
                            "eid2428",
                            "top",
                            200000,
                            0,
                            "linear",
                            "${space}",
                            '-357px',
                            '-528px'
                        ],
                        [
                            "eid2017",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${yellowButton}",
                            '-783px',
                            '-783px'
                        ],
                        [
                            "eid2018",
                            "left",
                            277628,
                            2372,
                            "easeInOutElastic",
                            "${yellowButton}",
                            '-167px',
                            '788px'
                        ],
                        [
                            "eid2019",
                            "left",
                            318000,
                            2000,
                            "easeInOutElastic",
                            "${yellowButton}",
                            '788px',
                            '683px'
                        ],
                        [
                            "eid2020",
                            "left",
                            390835,
                            3830,
                            "easeInOutElastic",
                            "${yellowButton}",
                            '788px',
                            '1137px'
                        ],
                        [
                            "eid2021",
                            "left",
                            425915,
                            1750,
                            "easeInOutElastic",
                            "${yellowButton}",
                            '788px',
                            '1441px'
                        ],
                        [
                            "eid1464",
                            "height",
                            94500,
                            5399,
                            "swing",
                            "${RoundRect}",
                            '73px',
                            '1075px'
                        ],
                        [
                            "eid1465",
                            "height",
                            99899,
                            4101,
                            "easeInOutElastic",
                            "${RoundRect}",
                            '1075px',
                            '1463px'
                        ],
                        [
                            "eid2374",
                            "top",
                            240000,
                            2000,
                            "linear",
                            "${PsychAnim1Circle}",
                            '91px',
                            '180px'
                        ],
                        [
                            "eid2375",
                            "top",
                            242432,
                            1568,
                            "linear",
                            "${PsychAnim1Circle}",
                            '180px',
                            '-227px'
                        ],
                        [
                            "eid1510",
                            "left",
                            32000,
                            0,
                            "linear",
                            "${smallpath2Copy2}",
                            '2369px',
                            '2369px'
                        ],
                        [
                            "eid1511",
                            "left",
                            80500,
                            750,
                            "linear",
                            "${smallpath2Copy2}",
                            '871px',
                            '912px'
                        ],
                        [
                            "eid2000",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${BlueButton}",
                            '92px',
                            '92px'
                        ],
                        [
                            "eid2001",
                            "top",
                            277628,
                            2372,
                            "easeInOutElastic",
                            "${BlueButton}",
                            '398px',
                            '466px'
                        ],
                        [
                            "eid2002",
                            "top",
                            315000,
                            3000,
                            "easeInOutElastic",
                            "${BlueButton}",
                            '466px',
                            '463px'
                        ],
                        [
                            "eid2003",
                            "top",
                            390835,
                            0,
                            "easeInOutElastic",
                            "${BlueButton}",
                            '463px',
                            '466px'
                        ],
                        [
                            "eid1388",
                            "top",
                            45000,
                            0,
                            "easeOutCubic",
                            "${Anim2path1}",
                            '-531px',
                            '-531px'
                        ],
                        [
                            "eid1389",
                            "top",
                            47158,
                            0,
                            "easeOutCubic",
                            "${Anim2path1}",
                            '-531px',
                            '-286px'
                        ],
                        [
                            "eid1847",
                            "scaleY",
                            139000,
                            3000,
                            "easeOutElastic",
                            "${guy1}",
                            '1',
                            '0.2'
                        ],
                        [
                            "eid1292",
                            "scaleX",
                            88750,
                            1000,
                            "easeOutQuint",
                            "${Purple}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1801",
                            "top",
                            125000,
                            0,
                            "easeOutCubic",
                            "${water}",
                            '-36px',
                            '-36px'
                        ],
                        [
                            "eid2426",
                            "top",
                            200000,
                            0,
                            "linear",
                            "${water}",
                            '-36px',
                            '-207px'
                        ],
                        [
                            "eid2035",
                            "left",
                            252500,
                            0,
                            "easeInOutElastic",
                            "${PsychAnim4Back}",
                            '-117px',
                            '-117px'
                        ],
                        [
                            "eid2036",
                            "left",
                            253750,
                            0,
                            "easeInOutElastic",
                            "${PsychAnim4Back}",
                            '-117px',
                            '34px'
                        ],
                        [
                            "eid2037",
                            "left",
                            262000,
                            0,
                            "easeInOutElastic",
                            "${PsychAnim4Back}",
                            '34px',
                            '36px'
                        ],
                        [
                            "eid2038",
                            "left",
                            266000,
                            0,
                            "easeInOutElastic",
                            "${PsychAnim4Back}",
                            '36px',
                            '-46px'
                        ],
                        [
                            "eid2060",
                            "left",
                            240000,
                            0,
                            "easeOutElastic",
                            "${PsychAnim2Forward}",
                            '1133px',
                            '1133px'
                        ],
                        [
                            "eid2061",
                            "left",
                            242432,
                            0,
                            "easeOutElastic",
                            "${PsychAnim2Forward}",
                            '1133px',
                            '970px'
                        ],
                        [
                            "eid2062",
                            "left",
                            249085,
                            0,
                            "easeInOutElastic",
                            "${PsychAnim2Forward}",
                            '970px',
                            '1275px'
                        ],
                        [
                            "eid1897",
                            "top",
                            125000,
                            0,
                            "easeOutElastic",
                            "${RoundRectCopy4}",
                            '468px',
                            '468px'
                        ],
                        [
                            "eid1898",
                            "top",
                            143000,
                            1000,
                            "easeOutElastic",
                            "${RoundRectCopy4}",
                            '468px',
                            '398px'
                        ],
                        [
                            "eid1522",
                            "top",
                            77500,
                            1000,
                            "linear",
                            "${smallpath2Copy5}",
                            '320px',
                            '221px'
                        ],
                        [
                            "eid1508",
                            "top",
                            80500,
                            750,
                            "linear",
                            "${smallpath2Copy2}",
                            '498px',
                            '475px'
                        ],
                        [
                            "eid2039",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${PsychAnim4Forward}",
                            '384px',
                            '384px'
                        ],
                        [
                            "eid1352",
                            "left",
                            36000,
                            500,
                            "swing",
                            "${Anim1}",
                            '312px',
                            '-1154px'
                        ],
                        [
                            "eid1353",
                            "left",
                            36500,
                            0,
                            "swing",
                            "${Anim1}",
                            '-1154px',
                            '-1154px'
                        ],
                        [
                            "eid1562",
                            "left",
                            79500,
                            750,
                            "linear",
                            "${Ellipse3}",
                            '935px',
                            '939px'
                        ],
                        [
                            "eid2380",
                            "top",
                            240000,
                            2000,
                            "linear",
                            "${PsychAnim1Circle5}",
                            '-10px',
                            '82px'
                        ],
                        [
                            "eid2381",
                            "top",
                            242432,
                            1568,
                            "linear",
                            "${PsychAnim1Circle5}",
                            '82px',
                            '-325px'
                        ],
                        [
                            "eid1822",
                            "scaleY",
                            141000,
                            1000,
                            "easeOutElastic",
                            "${dotOneCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1265",
                            "scaleX",
                            91910,
                            1042,
                            "easeOutQuint",
                            "${green}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1509",
                            "height",
                            80500,
                            750,
                            "linear",
                            "${smallpath2Copy2}",
                            '17px',
                            '111px'
                        ],
                        [
                            "eid2188",
                            "background-color",
                            394665,
                            0,
                            "easeInOutElastic",
                            "${SadCircCopy}",
                            'rgba(92,180,229,1.00)',
                            'rgba(92,180,229,1.00)'
                        ],
                        [
                            "eid1441",
                            "left",
                            37250,
                            0,
                            "swing",
                            "${SoundCopy}",
                            '247px',
                            '247px'
                        ],
                        [
                            "eid1442",
                            "left",
                            39750,
                            0,
                            "swing",
                            "${SoundCopy}",
                            '247px',
                            '-844px'
                        ],
                        [
                            "eid1355",
                            "scaleY",
                            33000,
                            1000,
                            "easeInBounce",
                            "${Anim1IntroText}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1356",
                            "scaleY",
                            35250,
                            750,
                            "easeInCubic",
                            "${Anim1IntroText}",
                            '1',
                            '4'
                        ],
                        [
                            "eid1720",
                            "rotateZ",
                            80250,
                            14250,
                            "easeOutQuint",
                            "${Ellipse4}",
                            '871deg',
                            '720deg'
                        ],
                        [
                            "eid1631",
                            "rotateZ",
                            94500,
                            1094,
                            "easeOutQuint",
                            "${Ellipse4}",
                            '720deg',
                            '1440deg'
                        ],
                        [
                            "eid1632",
                            "rotateZ",
                            96000,
                            115,
                            "easeOutQuint",
                            "${Ellipse4}",
                            '1440deg',
                            '720deg'
                        ],
                        [
                            "eid1338",
                            "left",
                            32000,
                            0,
                            "easeInCubic",
                            "${anim45forward}",
                            '1055px',
                            '1055px'
                        ],
                        [
                            "eid1339",
                            "left",
                            89000,
                            0,
                            "easeInCubic",
                            "${anim45forward}",
                            '1055px',
                            '977px'
                        ],
                        [
                            "eid1340",
                            "left",
                            94344,
                            0,
                            "linear",
                            "${anim45forward}",
                            '977px',
                            '1067px'
                        ],
                        [
                            "eid1894",
                            "left",
                            125000,
                            0,
                            "easeOutElastic",
                            "${RoundRectCopy3}",
                            '-792px',
                            '-792px'
                        ],
                        [
                            "eid1895",
                            "left",
                            144000,
                            1000,
                            "easeOutElastic",
                            "${RoundRectCopy3}",
                            '781px',
                            '232px'
                        ],
                        [
                            "eid2463",
                            "left",
                            200000,
                            0,
                            "linear",
                            "${RoundRectCopy3}",
                            '232px',
                            '-1284px'
                        ],
                        [
                            "eid2178",
                            "scaleX",
                            394665,
                            600,
                            "easeInOutElastic",
                            "${SadCirc}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2179",
                            "scaleX",
                            395265,
                            400,
                            "easeInOutElastic",
                            "${SadCirc}",
                            '0',
                            '2'
                        ],
                        [
                            "eid1514",
                            "left",
                            32000,
                            0,
                            "linear",
                            "${smallpath2Copy3}",
                            '2368px',
                            '2368px'
                        ],
                        [
                            "eid1515",
                            "left",
                            79500,
                            1000,
                            "linear",
                            "${smallpath2Copy3}",
                            '954px',
                            '791px'
                        ],
                        [
                            "eid1273",
                            "scaleY",
                            90638,
                            1273,
                            "easeOutQuint",
                            "${yellow}",
                            '0',
                            '1'
                        ],
                        [
                            "eid457",
                            "scaleY",
                            0,
                            1500,
                            "easeInQuad",
                            "${outCirc2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1620",
                            "width",
                            86597,
                            1403,
                            "easeInCubic",
                            "${Brain2}",
                            '723px',
                            '809px'
                        ],
                        [
                            "eid1390",
                            "rotateZ",
                            47158,
                            2592,
                            "easeOutQuart",
                            "${Anim2path1}",
                            '181deg',
                            '180deg'
                        ],
                        [
                            "eid1456",
                            "left",
                            41000,
                            1457,
                            "easeInOutElastic",
                            "${Anim2Text2}",
                            '389px',
                            '-791px'
                        ],
                        [
                            "eid1821",
                            "top",
                            125000,
                            0,
                            "easeOutElastic",
                            "${dotOneCopy3}",
                            '431px',
                            '431px'
                        ],
                        [
                            "eid2453",
                            "top",
                            200000,
                            0,
                            "linear",
                            "${dotOneCopy3}",
                            '431px',
                            '403px'
                        ],
                        [
                            "eid1489",
                            "top",
                            81339,
                            870,
                            "easeOutCubic",
                            "${anim4}",
                            '-57px',
                            '374px'
                        ],
                        [
                            "eid1490",
                            "top",
                            82209,
                            130,
                            "easeOutCubic",
                            "${anim4}",
                            '374px',
                            '341px'
                        ],
                        [
                            "eid1491",
                            "top",
                            86000,
                            597,
                            "easeOutQuint",
                            "${anim4}",
                            '341px',
                            '1149px'
                        ],
                        [
                            "eid1306",
                            "left",
                            32000,
                            0,
                            "linear",
                            "${anim}",
                            '-111px',
                            '-111px'
                        ],
                        [
                            "eid1308",
                            "left",
                            94344,
                            0,
                            "linear",
                            "${anim}",
                            '27px',
                            '-358px'
                        ],
                        [
                            "eid1309",
                            "left",
                            102000,
                            0,
                            "easeInOutElastic",
                            "${anim}",
                            '-358px',
                            '36px'
                        ],
                        [
                            "eid1310",
                            "left",
                            111000,
                            0,
                            "easeInOutElastic",
                            "${anim}",
                            '36px',
                            '-36px'
                        ],
                        [
                            "eid1526",
                            "rotateZ",
                            77500,
                            0,
                            "linear",
                            "${smallpath2Copy5}",
                            '-85deg',
                            '-85deg'
                        ],
                        [
                            "eid2497",
                            "top",
                            0,
                            0,
                            "easeInOutElastic",
                            "${PsychexitButton}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid2493",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${PsychexitButton}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid2499",
                            "top",
                            436000,
                            0,
                            "easeInOutElastic",
                            "${PsychexitButton}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid1407",
                            "top",
                            42457,
                            1543,
                            "easeInOutElastic",
                            "${EllipseCopy2}",
                            '370px',
                            '157px'
                        ],
                        [
                            "eid2340",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${guy22}",
                            '102px',
                            '102px'
                        ],
                        [
                            "eid2341",
                            "top",
                            249500,
                            0,
                            "easeInOutElastic",
                            "${guy22}",
                            '102px',
                            '137px'
                        ],
                        [
                            "eid2342",
                            "top",
                            253169,
                            0,
                            "easeInOutElastic",
                            "${guy22}",
                            '137px',
                            '152px'
                        ],
                        [
                            "eid1547",
                            "height",
                            72750,
                            1000,
                            "linear",
                            "${smallpath2Copy10}",
                            '17px',
                            '89px'
                        ],
                        [
                            "eid1246",
                            "left",
                            104000,
                            0,
                            "easeInOutElastic",
                            "${Heart}",
                            '234px',
                            '234px'
                        ],
                        [
                            "eid1964",
                            "left",
                            111000,
                            0,
                            "linear",
                            "${Heart}",
                            '234px',
                            '-549px'
                        ],
                        [
                            "eid2490",
                            "left",
                            0,
                            0,
                            "linear",
                            "${PsychAnim1Forward}",
                            '1035px',
                            '1035px'
                        ],
                        [
                            "eid2063",
                            "left",
                            240000,
                            0,
                            "easeOutElastic",
                            "${PsychAnim1Forward}",
                            '1035px',
                            '963px'
                        ],
                        [
                            "eid2064",
                            "left",
                            242146,
                            0,
                            "easeOutElastic",
                            "${PsychAnim1Forward}",
                            '963px',
                            '1187px'
                        ],
                        [
                            "eid2234",
                            "height",
                            430665,
                            1000,
                            "easeInOutElastic",
                            "${HappyCirc}",
                            '156px',
                            '194px'
                        ],
                        [
                            "eid1794",
                            "opacity",
                            145750,
                            1250,
                            "easeOutCubic",
                            "${space}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2317",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${HappyMusic}",
                            '37px',
                            '37px'
                        ],
                        [
                            "eid2318",
                            "left",
                            251500,
                            750,
                            "linear",
                            "${HappyMusic}",
                            '37px',
                            '36px'
                        ],
                        [
                            "eid1560",
                            "top",
                            79500,
                            750,
                            "linear",
                            "${Ellipse3}",
                            '247px',
                            '252px'
                        ],
                        [
                            "eid1302",
                            "top",
                            32000,
                            0,
                            "linear",
                            "${anim}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid1303",
                            "top",
                            102000,
                            0,
                            "easeInOutElastic",
                            "${anim}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid1304",
                            "top",
                            111000,
                            0,
                            "easeInOutElastic",
                            "${anim}",
                            '400px',
                            '407px'
                        ],
                        [
                            "eid1778",
                            "left",
                            125000,
                            0,
                            "easeOutQuart",
                            "${CultAnim2Forward}",
                            '1134px',
                            '1134px'
                        ],
                        [
                            "eid1779",
                            "left",
                            126250,
                            0,
                            "easeOutQuart",
                            "${CultAnim2Forward}",
                            '1134px',
                            '942px'
                        ],
                        [
                            "eid1780",
                            "left",
                            129521,
                            0,
                            "easeOutQuart",
                            "${CultAnim2Forward}",
                            '942px',
                            '1088px'
                        ],
                        [
                            "eid1687",
                            "top",
                            0,
                            0,
                            "easeOutCubic",
                            "${Brain2}",
                            '-477px',
                            '-477px'
                        ],
                        [
                            "eid1603",
                            "top",
                            32000,
                            0,
                            "linear",
                            "${Brain2}",
                            '-477px',
                            '-492px'
                        ],
                        [
                            "eid1604",
                            "top",
                            82339,
                            661,
                            "easeOutQuint",
                            "${Brain2}",
                            '-81px',
                            '5px'
                        ],
                        [
                            "eid1605",
                            "top",
                            86597,
                            653,
                            "easeInCubic",
                            "${Brain2}",
                            '5px',
                            '413px'
                        ],
                        [
                            "eid1606",
                            "top",
                            87250,
                            750,
                            "easeInCubic",
                            "${Brain2}",
                            '413px',
                            '189px'
                        ],
                        [
                            "eid1607",
                            "top",
                            88000,
                            1000,
                            "easeInCubic",
                            "${Brain2}",
                            '189px',
                            '121px'
                        ],
                        [
                            "eid1610",
                            "rotateZ",
                            94500,
                            1500,
                            "easeOutQuint",
                            "${Brain2}",
                            '0deg',
                            '1440deg'
                        ],
                        [
                            "eid1880",
                            "scaleY",
                            139750,
                            0,
                            "easeOutElastic",
                            "${RoundRectCopy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1871",
                            "scaleY",
                            131000,
                            7000,
                            "easeOutElastic",
                            "${peace}",
                            '0',
                            '1'
                        ],
                        [
                            "eid464",
                            "scaleX",
                            0,
                            1500,
                            "easeInQuad",
                            "${bioButton}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2095",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${HappyCircleGraphic}",
                            '-1061px',
                            '-1061px'
                        ],
                        [
                            "eid2096",
                            "left",
                            432665,
                            0,
                            "easeInOutElastic",
                            "${HappyCircleGraphic}",
                            '-1061px',
                            '71px'
                        ],
                        [
                            "eid2097",
                            "left",
                            435000,
                            0,
                            "easeInOutElastic",
                            "${HappyCircleGraphic}",
                            '71px',
                            '-1534px'
                        ],
                        [
                            "eid1452",
                            "scaleY",
                            39750,
                            2250,
                            "easeInOutElastic",
                            "${SoundCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1372",
                            "scaleY",
                            35250,
                            750,
                            "swing",
                            "${Anim1Circle2}",
                            '1',
                            '0.74'
                        ],
                        [
                            "eid2157",
                            "scaleX",
                            321000,
                            1000,
                            "easeInOutElastic",
                            "${MadCircleCopy}",
                            '2',
                            '2.5'
                        ],
                        [
                            "eid1850",
                            "left",
                            125000,
                            0,
                            "easeOutElastic",
                            "${guy1}",
                            '581px',
                            '581px'
                        ],
                        [
                            "eid1851",
                            "left",
                            128000,
                            0,
                            "easeOutElastic",
                            "${guy1}",
                            '581px',
                            '581px'
                        ],
                        [
                            "eid1852",
                            "left",
                            132500,
                            3500,
                            "easeOutElastic",
                            "${guy1}",
                            '581px',
                            '441px'
                        ],
                        [
                            "eid1853",
                            "left",
                            139000,
                            0,
                            "easeOutElastic",
                            "${guy1}",
                            '441px',
                            '449px'
                        ],
                        [
                            "eid2458",
                            "left",
                            200000,
                            0,
                            "linear",
                            "${guy1}",
                            '449px',
                            '-1067px'
                        ],
                        [
                            "eid1459",
                            "top",
                            41000,
                            0,
                            "swing",
                            "${Anim2Text}",
                            '587px',
                            '587px'
                        ],
                        [
                            "eid1369",
                            "left",
                            36000,
                            500,
                            "swing",
                            "${anim1Circle3}",
                            '42px',
                            '-1576px'
                        ],
                        [
                            "eid1463",
                            "top",
                            38000,
                            0,
                            "swing",
                            "${tableGraphic}",
                            '521px',
                            '521px'
                        ],
                        [
                            "eid1600",
                            "left",
                            32000,
                            0,
                            "linear",
                            "${earinfo}",
                            '1256px',
                            '1256px'
                        ],
                        [
                            "eid1601",
                            "left",
                            68250,
                            750,
                            "easeInQuad",
                            "${earinfo}",
                            '1088px',
                            '0px'
                        ],
                        [
                            "eid1901",
                            "width",
                            143000,
                            1000,
                            "easeOutElastic",
                            "${RoundRectCopy4}",
                            '41px',
                            '240px'
                        ],
                        [
                            "eid1976",
                            "left",
                            125000,
                            0,
                            "easeOutElastic",
                            "${mountains}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1859",
                            "left",
                            131000,
                            4000,
                            "easeOutElastic",
                            "${mountains}",
                            '-7px',
                            '1464px'
                        ],
                        [
                            "eid2235",
                            "scaleX",
                            429665,
                            1000,
                            "easeInOutElastic",
                            "${HappyCirc}",
                            '1',
                            '2.02'
                        ],
                        [
                            "eid2236",
                            "scaleX",
                            431665,
                            1000,
                            "easeInOutElastic",
                            "${HappyCirc}",
                            '2.02',
                            '2.4'
                        ],
                        [
                            "eid1231",
                            "left",
                            23000,
                            0,
                            "easeInBounce",
                            "${inCirc3}",
                            '368px',
                            '368px'
                        ],
                        [
                            "eid1679",
                            "left",
                            31000,
                            0,
                            "easeInBounce",
                            "${inCirc3}",
                            '368px',
                            '-1370px'
                        ],
                        [
                            "eid1505",
                            "left",
                            32000,
                            0,
                            "linear",
                            "${smallpath2Copy}",
                            '2369px',
                            '2369px'
                        ],
                        [
                            "eid1506",
                            "left",
                            81250,
                            1000,
                            "linear",
                            "${smallpath2Copy}",
                            '956px',
                            '945px'
                        ],
                        [
                            "eid1471",
                            "left",
                            66000,
                            3000,
                            "easeInQuad",
                            "${Anim3}",
                            '0px',
                            '151px'
                        ],
                        [
                            "eid1472",
                            "left",
                            69000,
                            19000,
                            "easeOutQuint",
                            "${Anim3}",
                            '151px',
                            '149px'
                        ],
                        [
                            "eid1473",
                            "left",
                            89000,
                            0,
                            "easeOutQuint",
                            "${Anim3}",
                            '149px',
                            '149px'
                        ],
                        [
                            "eid2130",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${girl1}",
                            '-1953px',
                            '-1953px'
                        ],
                        [
                            "eid2131",
                            "left",
                            274500,
                            3128,
                            "easeInOutElastic",
                            "${girl1}",
                            '-1953px',
                            '111px'
                        ],
                        [
                            "eid2132",
                            "left",
                            315000,
                            3000,
                            "easeInOutElastic",
                            "${girl1}",
                            '111px',
                            '-642px'
                        ],
                        [
                            "eid2133",
                            "left",
                            390835,
                            3830,
                            "easeInOutElastic",
                            "${girl1}",
                            '111px',
                            '-292px'
                        ],
                        [
                            "eid2134",
                            "left",
                            425915,
                            0,
                            "easeInOutElastic",
                            "${girl1}",
                            '-292px',
                            '111px'
                        ],
                        [
                            "eid2135",
                            "left",
                            427665,
                            2000,
                            "easeInOutElastic",
                            "${girl1}",
                            '111px',
                            '233px'
                        ],
                        [
                            "eid1966",
                            "left",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            '485px',
                            '485px'
                        ],
                        [
                            "eid1974",
                            "left",
                            120000,
                            0,
                            "easeInOutElastic",
                            "${RoundRect}",
                            '485px',
                            '1200px'
                        ],
                        [
                            "eid1941",
                            "top",
                            125000,
                            1000,
                            "easeOutQuart",
                            "${CultAnim1Circle2}",
                            '-805px',
                            '109px'
                        ],
                        [
                            "eid1810",
                            "scaleX",
                            142000,
                            1000,
                            "easeOutElastic",
                            "${dotOne}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2325",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${Anim2Circle}",
                            '-336px',
                            '-336px'
                        ],
                        [
                            "eid2326",
                            "left",
                            266000,
                            8500,
                            "easeInOutElastic",
                            "${Anim2Circle}",
                            '-336px',
                            '-993px'
                        ],
                        [
                            "eid1483",
                            "top",
                            32000,
                            0,
                            "linear",
                            "${man}",
                            '66px',
                            '66px'
                        ],
                        [
                            "eid2149",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${MadCircle}",
                            '881px',
                            '881px'
                        ],
                        [
                            "eid2150",
                            "top",
                            320000,
                            0,
                            "easeInOutElastic",
                            "${MadCircle}",
                            '881px',
                            '270px'
                        ],
                        [
                            "eid2151",
                            "top",
                            332127,
                            0,
                            "easeInOutElastic",
                            "${MadCircle}",
                            '270px',
                            '1080px'
                        ],
                        [
                            "eid2223",
                            "scaleY",
                            400665,
                            1000,
                            "easeInOutElastic",
                            "${sadBox}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1359",
                            "opacity",
                            35250,
                            750,
                            "easeInCubic",
                            "${Anim1IntroText}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1276",
                            "left",
                            32000,
                            0,
                            "easeOutQuint",
                            "${yellow}",
                            '-1446px',
                            '-1446px'
                        ],
                        [
                            "eid1277",
                            "left",
                            88750,
                            0,
                            "easeOutQuint",
                            "${yellow}",
                            '-1446px',
                            '628px'
                        ],
                        [
                            "eid1278",
                            "left",
                            94250,
                            0,
                            "easeOutQuint",
                            "${yellow}",
                            '628px',
                            '2248px'
                        ],
                        [
                            "eid1836",
                            "top",
                            125000,
                            0,
                            "easeOutQuart",
                            "${CultAnim2Title}",
                            '64px',
                            '64px'
                        ],
                        [
                            "eid2475",
                            "top",
                            200000,
                            0,
                            "linear",
                            "${CultAnim2Title}",
                            '64px',
                            '5px'
                        ],
                        [
                            "eid1365",
                            "left",
                            36000,
                            500,
                            "swing",
                            "${Anim1Circle4}",
                            '115px',
                            '-1503px'
                        ],
                        [
                            "eid1266",
                            "opacity",
                            88750,
                            0,
                            "easeOutQuint",
                            "${green}",
                            '1',
                            '1'
                        ],
                        [
                            "eid2291",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${MadMusic}",
                            '37px',
                            '37px'
                        ],
                        [
                            "eid2292",
                            "left",
                            259250,
                            1000,
                            "easeInOutElastic",
                            "${MadMusic}",
                            '37px',
                            '36px'
                        ],
                        [
                            "eid2293",
                            "left",
                            266000,
                            7500,
                            "easeInOutElastic",
                            "${MadMusic}",
                            '36px',
                            '-621px'
                        ],
                        [
                            "eid1300",
                            "top",
                            32000,
                            0,
                            "linear",
                            "${Anim4Text}",
                            '72px',
                            '72px'
                        ],
                        [
                            "eid1301",
                            "top",
                            69000,
                            0,
                            "linear",
                            "${Anim4Text}",
                            '72px',
                            '28px'
                        ],
                        [
                            "eid417",
                            "scaleY",
                            0,
                            1500,
                            "easeInBounce",
                            "${titleNav}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1551",
                            "top",
                            72000,
                            0,
                            "easeInQuad",
                            "${smallpath}",
                            '358px',
                            '358px'
                        ],
                        [
                            "eid2054",
                            "top",
                            240000,
                            0,
                            "easeOutElastic",
                            "${PsychAnim2Back}",
                            '370px',
                            '370px'
                        ],
                        [
                            "eid2055",
                            "top",
                            242432,
                            0,
                            "easeOutElastic",
                            "${PsychAnim2Back}",
                            '370px',
                            '368px'
                        ],
                        [
                            "eid460",
                            "scaleX",
                            0,
                            1500,
                            "easeInQuad",
                            "${cultButton}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2155",
                            "scaleY",
                            315000,
                            0,
                            "easeInOutElastic",
                            "${MadCircle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2156",
                            "scaleY",
                            320000,
                            1000,
                            "easeInOutElastic",
                            "${MadCircle}",
                            '1',
                            '2'
                        ],
                        [
                            "eid2033",
                            "top",
                            262000,
                            0,
                            "easeInOutElastic",
                            "${PsychAnim4Back}",
                            '370px',
                            '370px'
                        ],
                        [
                            "eid1795",
                            "left",
                            125000,
                            0,
                            "easeOutElastic",
                            "${space}",
                            '-3267px',
                            '-3267px'
                        ],
                        [
                            "eid1796",
                            "left",
                            145750,
                            0,
                            "easeOutElastic",
                            "${space}",
                            '-3267px',
                            '-438px'
                        ],
                        [
                            "eid2427",
                            "left",
                            200000,
                            0,
                            "linear",
                            "${space}",
                            '-438px',
                            '-2581px'
                        ],
                        [
                            "eid1370",
                            "rotateZ",
                            33000,
                            750,
                            "swing",
                            "${anim1Circle3}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid1427",
                            "top",
                            42457,
                            1543,
                            "easeInOutElastic",
                            "${Anim2path1Copy4}",
                            '386px',
                            '278px'
                        ],
                        [
                            "eid2237",
                            "opacity",
                            429665,
                            0,
                            "easeInOutElastic",
                            "${HappyCirc}",
                            '0.699999988079071',
                            '0.699999988079071'
                        ],
                        [
                            "eid2415",
                            "scaleX",
                            242432,
                            1568,
                            "linear",
                            "${PsychAnim1Circle2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1252",
                            "top",
                            32000,
                            0,
                            "easeOutQuint",
                            "${Violet}",
                            '486px',
                            '486px'
                        ],
                        [
                            "eid1983",
                            "top",
                            88750,
                            0,
                            "easeOutQuint",
                            "${Violet}",
                            '486px',
                            '495px'
                        ],
                        [
                            "eid2056",
                            "left",
                            240000,
                            0,
                            "easeOutElastic",
                            "${PsychAnim2Back}",
                            '-58px',
                            '-58px'
                        ],
                        [
                            "eid2057",
                            "left",
                            242432,
                            0,
                            "easeOutElastic",
                            "${PsychAnim2Back}",
                            '-58px',
                            '32px'
                        ],
                        [
                            "eid2058",
                            "left",
                            249085,
                            0,
                            "easeInOutElastic",
                            "${PsychAnim2Back}",
                            '32px',
                            '1275px'
                        ],
                        [
                            "eid1771",
                            "left",
                            125000,
                            0,
                            "easeOutElastic",
                            "${CultAnim3Back}",
                            '-61px',
                            '-61px'
                        ],
                        [
                            "eid1772",
                            "left",
                            131000,
                            0,
                            "easeOutElastic",
                            "${CultAnim3Back}",
                            '-61px',
                            '41px'
                        ],
                        [
                            "eid1773",
                            "left",
                            138500,
                            0,
                            "easeOutElastic",
                            "${CultAnim3Back}",
                            '41px',
                            '1138px'
                        ],
                        [
                            "eid2479",
                            "top",
                            185000,
                            0,
                            "linear",
                            "${world}",
                            '264px',
                            '264px'
                        ],
                        [
                            "eid2424",
                            "top",
                            200000,
                            0,
                            "linear",
                            "${world}",
                            '264px',
                            '124px'
                        ],
                        [
                            "eid2141",
                            "scaleY",
                            397665,
                            1000,
                            "easeInOutElastic",
                            "${SadGraphic}",
                            '0.09',
                            '1'
                        ],
                        [
                            "eid2022",
                            "scaleY",
                            318000,
                            2000,
                            "easeInOutElastic",
                            "${yellowButton}",
                            '1',
                            '1.25'
                        ],
                        [
                            "eid2023",
                            "scaleY",
                            390835,
                            0,
                            "easeInOutElastic",
                            "${yellowButton}",
                            '1.25',
                            '1'
                        ],
                        [
                            "eid1248",
                            "left",
                            32000,
                            0,
                            "easeInOutBounce",
                            "${pulse2}",
                            '-1076px',
                            '-1076px'
                        ],
                        [
                            "eid1249",
                            "left",
                            104000,
                            0,
                            "easeInOutBounce",
                            "${pulse2}",
                            '-1076px',
                            '0px'
                        ],
                        [
                            "eid1250",
                            "left",
                            111000,
                            0,
                            "swing",
                            "${pulse2}",
                            '0px',
                            '1256px'
                        ],
                        [
                            "eid1285",
                            "left",
                            32000,
                            0,
                            "easeOutQuint",
                            "${orange}",
                            '-1809px',
                            '-1809px'
                        ],
                        [
                            "eid1740",
                            "left",
                            88750,
                            0,
                            "easeOutQuint",
                            "${orange}",
                            '265px',
                            '263px'
                        ],
                        [
                            "eid1287",
                            "left",
                            94250,
                            0,
                            "easeOutQuint",
                            "${orange}",
                            '263px',
                            '1885px'
                        ],
                        [
                            "eid2400",
                            "height",
                            243500,
                            500,
                            "easeOutQuad",
                            "${PsychAnim1Circle6}",
                            '1029px',
                            '2494px'
                        ],
                        [
                            "eid2401",
                            "height",
                            244000,
                            250,
                            "easeOutQuad",
                            "${PsychAnim1Circle6}",
                            '2494px',
                            '1082px'
                        ],
                        [
                            "eid1872",
                            "height",
                            139000,
                            3000,
                            "easeOutElastic",
                            "${peace}",
                            '435px',
                            '123px'
                        ],
                        [
                            "eid2094",
                            "scaleX",
                            432665,
                            1000,
                            "easeInOutElastic",
                            "${HappyCircleGraphic}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1412",
                            "top",
                            42457,
                            1543,
                            "easeInOutElastic",
                            "${Anim2path1Copy2}",
                            '386px',
                            '278px'
                        ],
                        [
                            "eid2310",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${BlueBar}",
                            '2305px',
                            '2305px'
                        ],
                        [
                            "eid2311",
                            "left",
                            249500,
                            166,
                            "linear",
                            "${BlueBar}",
                            '1085px',
                            '1093px'
                        ],
                        [
                            "eid2312",
                            "left",
                            249666,
                            334,
                            "linear",
                            "${BlueBar}",
                            '1093px',
                            '1088px'
                        ],
                        [
                            "eid2313",
                            "left",
                            250000,
                            750,
                            "linear",
                            "${BlueBar}",
                            '1088px',
                            '380px'
                        ],
                        [
                            "eid2314",
                            "left",
                            253750,
                            2250,
                            "easeInOutElastic",
                            "${BlueBar}",
                            '380px',
                            '1123px'
                        ],
                        [
                            "eid2212",
                            "opacity",
                            396332,
                            667,
                            "easeInOutElastic",
                            "${SadCircCopy2}",
                            '1',
                            '0.71'
                        ],
                        [
                            "eid2194",
                            "opacity",
                            396332,
                            667,
                            "easeInOutElastic",
                            "${SadCircCopy}",
                            '1',
                            '0.71'
                        ],
                        [
                            "eid445",
                            "rotateZ",
                            0,
                            1500,
                            "easeInQuad",
                            "${outCirc2}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid484",
                            "rotateZ",
                            1704,
                            28296,
                            "linear",
                            "${outCirc2}",
                            '360deg',
                            '-1800deg'
                        ],
                        [
                            "eid832",
                            "rotateZ",
                            30000,
                            0,
                            "linear",
                            "${outCirc2}",
                            '-1800deg',
                            '-1800deg'
                        ],
                        [
                            "eid1482",
                            "left",
                            49750,
                            3250,
                            "easeInOutSine",
                            "${man}",
                            '1197px',
                            '354px'
                        ],
                        [
                            "eid2076",
                            "rotateZ",
                            325000,
                            2000,
                            "easeInOutElastic",
                            "${MadCircleGraphic}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid2193",
                            "height",
                            396332,
                            667,
                            "easeInOutElastic",
                            "${SadCircCopy}",
                            '156px',
                            '185px'
                        ],
                        [
                            "eid1899",
                            "left",
                            125000,
                            0,
                            "easeOutElastic",
                            "${RoundRectCopy4}",
                            '-937px',
                            '-937px'
                        ],
                        [
                            "eid1900",
                            "left",
                            143000,
                            1000,
                            "easeOutElastic",
                            "${RoundRectCopy4}",
                            '636px',
                            '466px'
                        ],
                        [
                            "eid2462",
                            "left",
                            200000,
                            0,
                            "linear",
                            "${RoundRectCopy4}",
                            '466px',
                            '-1050px'
                        ],
                        [
                            "eid2024",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${PsychAnim6Back}",
                            '370px',
                            '370px'
                        ],
                        [
                            "eid2025",
                            "top",
                            314000,
                            0,
                            "easeInOutElastic",
                            "${PsychAnim6Back}",
                            '370px',
                            '370px'
                        ],
                        [
                            "eid1449",
                            "scaleX",
                            39750,
                            2250,
                            "swing",
                            "${SoundCopy2}",
                            '0',
                            '1.76'
                        ],
                        [
                            "eid1536",
                            "rotateZ",
                            73750,
                            0,
                            "easeInQuad",
                            "${smallpath2Copy8}",
                            '9deg',
                            '9deg'
                        ],
                        [
                            "eid2371",
                            "scaleX",
                            242432,
                            1568,
                            "easeOutQuad",
                            "${PsychAnim1Intro}",
                            '1',
                            '9.66'
                        ],
                        [
                            "eid2267",
                            "scaleY",
                            433665,
                            1000,
                            "easeInOutElastic",
                            "${HappyBox}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1848",
                            "scaleX",
                            139000,
                            3000,
                            "easeOutElastic",
                            "${guy1}",
                            '1',
                            '0.2'
                        ],
                        [
                            "eid1486",
                            "left",
                            32000,
                            0,
                            "easeOutExpo",
                            "${anim3circle2}",
                            '1452px',
                            '1452px'
                        ],
                        [
                            "eid1487",
                            "left",
                            55500,
                            0,
                            "easeOutExpo",
                            "${anim3circle2}",
                            '1452px',
                            '382px'
                        ],
                        [
                            "eid1670",
                            "height",
                            32000,
                            1000,
                            "linear",
                            "${IntroTransition}",
                            '447px',
                            '1593px'
                        ],
                        [
                            "eid1789",
                            "scaleY",
                            126250,
                            0,
                            "easeOutQuart",
                            "${CultAnim2Back}",
                            '1',
                            '1'
                        ],
                        [
                            "eid2367",
                            "top",
                            241500,
                            0,
                            "linear",
                            "${PsychAnim1Intro}",
                            '259px',
                            '259px'
                        ],
                        [
                            "eid2368",
                            "top",
                            242000,
                            0,
                            "linear",
                            "${PsychAnim1Intro}",
                            '259px',
                            '259px'
                        ],
                        [
                            "eid2369",
                            "top",
                            253750,
                            0,
                            "easeInOutElastic",
                            "${PsychAnim1Intro}",
                            '259px',
                            '269px'
                        ],
                        [
                            "eid458",
                            "scaleX",
                            0,
                            1500,
                            "easeInQuad",
                            "${psychButton}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2111",
                            "scaleX",
                            392665,
                            2000,
                            "easeInOutElastic",
                            "${Girl2}",
                            '1',
                            '1.25'
                        ],
                        [
                            "eid2112",
                            "scaleX",
                            425915,
                            0,
                            "easeInOutElastic",
                            "${Girl2}",
                            '1.25',
                            '1'
                        ],
                        [
                            "eid1318",
                            "left",
                            53500,
                            0,
                            "swing",
                            "${anim3back}",
                            '-48px',
                            '-48px'
                        ],
                        [
                            "eid1319",
                            "left",
                            55500,
                            0,
                            "swing",
                            "${anim3back}",
                            '-48px',
                            '25px'
                        ],
                        [
                            "eid1320",
                            "left",
                            65500,
                            0,
                            "swing",
                            "${anim3back}",
                            '25px',
                            '-46px'
                        ],
                        [
                            "eid2389",
                            "top",
                            240000,
                            2000,
                            "linear",
                            "${PsychAnim1Circle4}",
                            '32px',
                            '124px'
                        ],
                        [
                            "eid2390",
                            "top",
                            242432,
                            1568,
                            "linear",
                            "${PsychAnim1Circle4}",
                            '124px',
                            '-283px'
                        ],
                        [
                            "eid1507",
                            "width",
                            81250,
                            1000,
                            "linear",
                            "${smallpath2Copy}",
                            '19px',
                            '158px'
                        ],
                        [
                            "eid1570",
                            "top",
                            32000,
                            0,
                            "easeInQuad",
                            "${Ellipse3Copy2}",
                            '84px',
                            '84px'
                        ],
                        [
                            "eid1571",
                            "top",
                            78500,
                            0,
                            "linear",
                            "${Ellipse3Copy2}",
                            '84px',
                            '328px'
                        ],
                        [
                            "eid2330",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${guy32}",
                            '137px',
                            '137px'
                        ],
                        [
                            "eid2331",
                            "top",
                            253750,
                            0,
                            "easeInOutElastic",
                            "${guy32}",
                            '137px',
                            '137px'
                        ],
                        [
                            "eid2332",
                            "top",
                            266000,
                            8500,
                            "easeInOutElastic",
                            "${guy32}",
                            '137px',
                            '586px'
                        ],
                        [
                            "eid2229",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${HappyCirc}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid2230",
                            "top",
                            429665,
                            0,
                            "easeInOutElastic",
                            "${HappyCirc}",
                            '24px',
                            '274px'
                        ],
                        [
                            "eid2231",
                            "top",
                            430665,
                            1000,
                            "easeInOutElastic",
                            "${HappyCirc}",
                            '274px',
                            '255px'
                        ],
                        [
                            "eid1561",
                            "scaleY",
                            79500,
                            750,
                            "linear",
                            "${Ellipse3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1417",
                            "top",
                            42457,
                            1543,
                            "easeInOutElastic",
                            "${EllipseCopy3}",
                            '370px',
                            '156px'
                        ],
                        [
                            "eid1761",
                            "left",
                            125000,
                            0,
                            "easeOutElastic",
                            "${CultAnim4Back}",
                            '-61px',
                            '-61px'
                        ],
                        [
                            "eid1762",
                            "left",
                            139000,
                            0,
                            "easeOutElastic",
                            "${CultAnim4Back}",
                            '-61px',
                            '35px'
                        ],
                        [
                            "eid1763",
                            "left",
                            145500,
                            0,
                            "linear",
                            "${CultAnim4Back}",
                            '35px',
                            '-38px'
                        ],
                        [
                            "eid2333",
                            "left",
                            246000,
                            750,
                            "easeInOutElastic",
                            "${Anim2TextCopy}",
                            '1081px',
                            '478px'
                        ],
                        [
                            "eid2334",
                            "left",
                            249500,
                            1500,
                            "easeInOutElastic",
                            "${Anim2TextCopy}",
                            '478px',
                            '2055px'
                        ],
                        [
                            "eid1500",
                            "left",
                            32000,
                            0,
                            "linear",
                            "${smallpath2}",
                            '2365px',
                            '2365px'
                        ],
                        [
                            "eid1501",
                            "left",
                            81339,
                            1000,
                            "linear",
                            "${smallpath2}",
                            '1077px',
                            '809px'
                        ],
                        [
                            "eid1371",
                            "top",
                            33000,
                            750,
                            "swing",
                            "${Anim1Circle2}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid1335",
                            "opacity",
                            32000,
                            0,
                            "swing",
                            "${anim2forward}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1336",
                            "opacity",
                            38000,
                            0,
                            "swing",
                            "${anim2forward}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1337",
                            "opacity",
                            42698,
                            0,
                            "swing",
                            "${anim2forward}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1357",
                            "scaleX",
                            33000,
                            1000,
                            "easeInBounce",
                            "${Anim1IntroText}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1358",
                            "scaleX",
                            35250,
                            750,
                            "easeInCubic",
                            "${Anim1IntroText}",
                            '1',
                            '4'
                        ],
                        [
                            "eid1971",
                            "top",
                            0,
                            0,
                            "easeInOutElastic",
                            "${Anim6Text}",
                            '593px',
                            '593px'
                        ],
                        [
                            "eid1973",
                            "top",
                            120000,
                            0,
                            "easeInOutElastic",
                            "${Anim6Text}",
                            '593px',
                            '593px'
                        ],
                        [
                            "eid1414",
                            "left",
                            37500,
                            0,
                            "easeInOutElastic",
                            "${Anim2path1Copy2}",
                            '1106px',
                            '1106px'
                        ],
                        [
                            "eid1415",
                            "left",
                            42457,
                            1543,
                            "easeInOutElastic",
                            "${Anim2path1Copy2}",
                            '742px',
                            '637px'
                        ],
                        [
                            "eid1517",
                            "top",
                            78500,
                            1000,
                            "linear",
                            "${smallpath2Copy4}",
                            '338px',
                            '303px'
                        ],
                        [
                            "eid2066",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${MadText}",
                            '-243px',
                            '-243px'
                        ],
                        [
                            "eid2067",
                            "left",
                            325000,
                            2000,
                            "easeInOutElastic",
                            "${MadText}",
                            '-391px',
                            '65px'
                        ],
                        [
                            "eid2068",
                            "left",
                            332127,
                            0,
                            "easeInOutElastic",
                            "${MadText}",
                            '65px',
                            '32px'
                        ],
                        [
                            "eid1237",
                            "left",
                            23000,
                            0,
                            "easeInBounce",
                            "${inCirc1}",
                            '397px',
                            '397px'
                        ],
                        [
                            "eid1675",
                            "left",
                            31000,
                            0,
                            "easeInBounce",
                            "${inCirc1}",
                            '397px',
                            '-1341px'
                        ],
                        [
                            "eid2238",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${HappyCirc}",
                            '-556px',
                            '-556px'
                        ],
                        [
                            "eid2239",
                            "left",
                            429665,
                            1000,
                            "easeInOutElastic",
                            "${HappyCirc}",
                            '249px',
                            '244px'
                        ],
                        [
                            "eid2240",
                            "left",
                            430665,
                            1000,
                            "easeInOutElastic",
                            "${HappyCirc}",
                            '244px',
                            '231px'
                        ],
                        [
                            "eid2241",
                            "left",
                            435000,
                            0,
                            "easeInOutElastic",
                            "${HappyCirc}",
                            '231px',
                            '-476px'
                        ],
                        [
                            "eid1588",
                            "top",
                            32000,
                            0,
                            "easeInQuad",
                            "${Ellipse3Copy5}",
                            '251px',
                            '251px'
                        ],
                        [
                            "eid1589",
                            "top",
                            74500,
                            0,
                            "easeInOutBounce",
                            "${Ellipse3Copy5}",
                            '251px',
                            '294px'
                        ],
                        [
                            "eid1460",
                            "left",
                            38000,
                            1500,
                            "easeInOutBounce",
                            "${boomBox}",
                            '248px',
                            '-906px'
                        ],
                        [
                            "eid1391",
                            "left",
                            45000,
                            0,
                            "easeOutCubic",
                            "${Anim2path1}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid1392",
                            "left",
                            47158,
                            0,
                            "easeInOutElastic",
                            "${Anim2path1}",
                            '487px',
                            '487px'
                        ],
                        [
                            "eid1393",
                            "left",
                            47250,
                            2500,
                            "easeOutQuart",
                            "${Anim2path1}",
                            '487px',
                            '486px'
                        ],
                        [
                            "eid2180",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${SadCirc}",
                            '-556px',
                            '-556px'
                        ],
                        [
                            "eid2181",
                            "left",
                            394665,
                            0,
                            "easeInOutElastic",
                            "${SadCirc}",
                            '-556px',
                            '440px'
                        ],
                        [
                            "eid2182",
                            "left",
                            412165,
                            0,
                            "easeInOutElastic",
                            "${SadCirc}",
                            '440px',
                            '721px'
                        ],
                        [
                            "eid1294",
                            "left",
                            32000,
                            0,
                            "easeOutQuint",
                            "${Purple}",
                            '-1611px',
                            '-1611px'
                        ],
                        [
                            "eid1295",
                            "left",
                            88750,
                            0,
                            "easeOutQuint",
                            "${Purple}",
                            '-1611px',
                            '463px'
                        ],
                        [
                            "eid1296",
                            "left",
                            94250,
                            0,
                            "easeOutQuint",
                            "${Purple}",
                            '463px',
                            '2083px'
                        ],
                        [
                            "eid2264",
                            "background-color",
                            429665,
                            0,
                            "easeInOutElastic",
                            "${HappyCircCopy2}",
                            'rgba(245,228,169,1.00)',
                            'rgba(245,228,169,1.00)'
                        ],
                        [
                            "eid473",
                            "opacity",
                            0,
                            1500,
                            "easeInQuad",
                            "${bioButton}",
                            '0',
                            '1'
                        ],
                        [
                            "eid444",
                            "rotateZ",
                            0,
                            1500,
                            "easeInQuad",
                            "${inCirc3}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid486",
                            "rotateZ",
                            1704,
                            28296,
                            "linear",
                            "${inCirc3}",
                            '360deg',
                            '1440deg'
                        ],
                        [
                            "eid2144",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${SadGraphic}",
                            '-118px',
                            '-118px'
                        ],
                        [
                            "eid2145",
                            "left",
                            394665,
                            0,
                            "easeInOutElastic",
                            "${SadGraphic}",
                            '-118px',
                            '256px'
                        ],
                        [
                            "eid2146",
                            "left",
                            412165,
                            0,
                            "easeInOutElastic",
                            "${SadGraphic}",
                            '256px',
                            '537px'
                        ],
                        [
                            "eid1804",
                            "top",
                            125000,
                            0,
                            "easeOutElastic",
                            "${Anim4TextCopy}",
                            '142px',
                            '142px'
                        ],
                        [
                            "eid1805",
                            "top",
                            139750,
                            1250,
                            "easeOutElastic",
                            "${Anim4TextCopy}",
                            '142px',
                            '139px'
                        ],
                        [
                            "eid2473",
                            "top",
                            200000,
                            0,
                            "linear",
                            "${Anim4TextCopy}",
                            '139px',
                            '118px'
                        ],
                        [
                            "eid1376",
                            "left",
                            33000,
                            750,
                            "swing",
                            "${Anim1Circle2}",
                            '0px',
                            '-57px'
                        ],
                        [
                            "eid1377",
                            "left",
                            36000,
                            500,
                            "swing",
                            "${Anim1Circle2}",
                            '-57px',
                            '-1675px'
                        ],
                        [
                            "eid2489",
                            "left",
                            0,
                            0,
                            "easeOutBounce",
                            "${PsychAnim1Circle4}",
                            '1914px',
                            '1914px'
                        ],
                        [
                            "eid2396",
                            "left",
                            240000,
                            2000,
                            "linear",
                            "${PsychAnim1Circle4}",
                            '1179px',
                            '390px'
                        ],
                        [
                            "eid2397",
                            "left",
                            242432,
                            1568,
                            "linear",
                            "${PsychAnim1Circle4}",
                            '390px',
                            '-291px'
                        ],
                        [
                            "eid2013",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${yellowButton}",
                            '92px',
                            '92px'
                        ],
                        [
                            "eid2014",
                            "top",
                            277628,
                            2372,
                            "easeInOutElastic",
                            "${yellowButton}",
                            '398px',
                            '466px'
                        ],
                        [
                            "eid2015",
                            "top",
                            318000,
                            2000,
                            "easeInOutElastic",
                            "${yellowButton}",
                            '466px',
                            '470px'
                        ],
                        [
                            "eid2016",
                            "top",
                            390835,
                            3830,
                            "easeInOutElastic",
                            "${yellowButton}",
                            '466px',
                            '473px'
                        ],
                        [
                            "eid1238",
                            "left",
                            23000,
                            0,
                            "easeInBounce",
                            "${cultButton}",
                            '256px',
                            '256px'
                        ],
                        [
                            "eid1680",
                            "left",
                            31000,
                            0,
                            "easeInBounce",
                            "${cultButton}",
                            '256px',
                            '-1482px'
                        ],
                        [
                            "eid2142",
                            "rotateZ",
                            398665,
                            2000,
                            "easeInOutElastic",
                            "${SadGraphic}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid1366",
                            "rotateZ",
                            36000,
                            500,
                            "swing",
                            "${Anim1Circle4}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid452",
                            "scaleX",
                            0,
                            1500,
                            "easeInQuad",
                            "${inCirc2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1531",
                            "top",
                            75750,
                            1000,
                            "linear",
                            "${smallpath2Copy7}",
                            '374px',
                            '358px'
                        ],
                        [
                            "eid447",
                            "rotateZ",
                            0,
                            1500,
                            "easeInQuad",
                            "${cultButton}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid478",
                            "rotateZ",
                            1704,
                            28296,
                            "linear",
                            "${cultButton}",
                            '360deg',
                            '1440deg'
                        ],
                        [
                            "eid656",
                            "rotateZ",
                            30000,
                            0,
                            "linear",
                            "${cultButton}",
                            '1440deg',
                            '1440deg'
                        ],
                        [
                            "eid1919",
                            "height",
                            141000,
                            1000,
                            "easeOutElastic",
                            "${RoundRectCopy7}",
                            '33px',
                            '227px'
                        ],
                        [
                            "eid1923",
                            "left",
                            125000,
                            0,
                            "easeOutElastic",
                            "${bg2}",
                            '1252px',
                            '1252px'
                        ],
                        [
                            "eid1924",
                            "left",
                            131000,
                            0,
                            "easeOutElastic",
                            "${bg2}",
                            '1252px',
                            '0px'
                        ],
                        [
                            "eid2460",
                            "left",
                            200000,
                            0,
                            "linear",
                            "${bg2}",
                            '0px',
                            '-1516px'
                        ],
                        [
                            "eid1885",
                            "scaleX",
                            139750,
                            0,
                            "easeOutElastic",
                            "${RoundRectCopy}",
                            '1.02039',
                            '1.02039'
                        ],
                        [
                            "eid455",
                            "scaleY",
                            0,
                            1500,
                            "easeInQuad",
                            "${inCirc3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1811",
                            "top",
                            125000,
                            0,
                            "easeOutElastic",
                            "${dotOneCopy}",
                            '261px',
                            '261px'
                        ],
                        [
                            "eid2457",
                            "top",
                            200000,
                            0,
                            "linear",
                            "${dotOneCopy}",
                            '261px',
                            '233px'
                        ],
                        [
                            "eid1360",
                            "left",
                            36000,
                            500,
                            "swing",
                            "${Anim1IntroText}",
                            '250px',
                            '-1396px'
                        ],
                        [
                            "eid1639",
                            "width",
                            88000,
                            0,
                            "easeOutQuint",
                            "${Ellipse4}",
                            '878px',
                            '878px'
                        ],
                        [
                            "eid1322",
                            "opacity",
                            38000,
                            0,
                            "swing",
                            "${anim2back}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1323",
                            "opacity",
                            42698,
                            0,
                            "swing",
                            "${anim2back}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1997",
                            "scaleX",
                            427665,
                            2000,
                            "easeInOutElastic",
                            "${RedButton}",
                            '1',
                            '1.25'
                        ],
                        [
                            "eid416",
                            "scaleX",
                            0,
                            1500,
                            "easeInBounce",
                            "${titleNav}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1828",
                            "left",
                            125000,
                            0,
                            "easeOutElastic",
                            "${dotOneCopy4}",
                            '-1209px',
                            '-1209px'
                        ],
                        [
                            "eid1829",
                            "left",
                            139000,
                            0,
                            "easeOutElastic",
                            "${dotOneCopy4}",
                            '-1209px',
                            '587px'
                        ],
                        [
                            "eid2448",
                            "left",
                            200000,
                            0,
                            "linear",
                            "${dotOneCopy4}",
                            '587px',
                            '-676px'
                        ],
                        [
                            "eid1596",
                            "scaleY",
                            73750,
                            750,
                            "easeInOutBounce",
                            "${Ellipse3Copy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2195",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${SadCircCopy}",
                            '-556px',
                            '-556px'
                        ],
                        [
                            "eid2196",
                            "left",
                            394665,
                            1667,
                            "easeInOutElastic",
                            "${SadCircCopy}",
                            '440px',
                            '441px'
                        ],
                        [
                            "eid2197",
                            "left",
                            396332,
                            667,
                            "easeInOutElastic",
                            "${SadCircCopy}",
                            '441px',
                            '426px'
                        ],
                        [
                            "eid2198",
                            "left",
                            412165,
                            0,
                            "easeInOutElastic",
                            "${SadCircCopy}",
                            '426px',
                            '707px'
                        ],
                        [
                            "eid2045",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${PsychAnim3Back}",
                            '-117px',
                            '-117px'
                        ],
                        [
                            "eid2046",
                            "left",
                            249500,
                            0,
                            "easeInOutElastic",
                            "${PsychAnim3Back}",
                            '-117px',
                            '36px'
                        ],
                        [
                            "eid2047",
                            "left",
                            253500,
                            0,
                            "easeInOutElastic",
                            "${PsychAnim3Back}",
                            '36px',
                            '-46px'
                        ],
                        [
                            "eid1669",
                            "top",
                            32000,
                            1000,
                            "linear",
                            "${IntroTransition}",
                            '-401px',
                            '-399px'
                        ],
                        [
                            "eid1860",
                            "scaleX",
                            139000,
                            3000,
                            "easeOutElastic",
                            "${guy2}",
                            '1',
                            '0.2'
                        ],
                        [
                            "eid449",
                            "rotateZ",
                            0,
                            1500,
                            "easeInQuad",
                            "${bioButton}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid475",
                            "rotateZ",
                            1704,
                            28296,
                            "linear",
                            "${bioButton}",
                            '360deg',
                            '1080deg'
                        ],
                        [
                            "eid2306",
                            "left",
                            240000,
                            0,
                            "linear",
                            "${SadMusic}",
                            '37px',
                            '37px'
                        ],
                        [
                            "eid2307",
                            "left",
                            252250,
                            750,
                            "linear",
                            "${SadMusic}",
                            '37px',
                            '36px'
                        ],
                        [
                            "eid1535",
                            "top",
                            73750,
                            1000,
                            "linear",
                            "${smallpath2Copy8}",
                            '295px',
                            '301px'
                        ],
                        [
                            "eid1236",
                            "left",
                            23000,
                            0,
                            "easeInBounce",
                            "${psychButton}",
                            '163px',
                            '163px'
                        ],
                        [
                            "eid1678",
                            "left",
                            31000,
                            0,
                            "easeInBounce",
                            "${psychButton}",
                            '163px',
                            '-1575px'
                        ],
                        [
                            "eid1591",
                            "left",
                            32000,
                            0,
                            "easeInQuad",
                            "${Ellipse3Copy5}",
                            '1256px',
                            '1256px'
                        ],
                        [
                            "eid1592",
                            "left",
                            74500,
                            0,
                            "easeInOutBounce",
                            "${Ellipse3Copy5}",
                            '1256px',
                            '501px'
                        ],
                        [
                            "eid1645",
                            "scaleY",
                            88000,
                            500,
                            "easeInCubic",
                            "${Pasted4}",
                            '0',
                            '1.2'
                        ],
                        [
                            "eid1646",
                            "scaleY",
                            88500,
                            250,
                            "easeInOutCubic",
                            "${Pasted4}",
                            '1.2',
                            '0.88'
                        ],
                        [
                            "eid1647",
                            "scaleY",
                            94500,
                            1500,
                            "easeOutQuint",
                            "${Pasted4}",
                            '0.88',
                            '2'
                        ],
                        [
                            "eid1470",
                            "opacity",
                            66000,
                            3000,
                            "easeInQuad",
                            "${Anim3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid459",
                            "scaleY",
                            0,
                            1500,
                            "easeInQuad",
                            "${psychButton}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1567",
                            "left",
                            32000,
                            0,
                            "easeInQuad",
                            "${Ellipse3Copy}",
                            '1168px',
                            '1168px'
                        ],
                        [
                            "eid1568",
                            "left",
                            72750,
                            0,
                            "easeInOutElastic",
                            "${Ellipse3Copy}",
                            '1168px',
                            '427px'
                        ],
                        [
                            "eid1247",
                            "scaleX",
                            99899,
                            5101,
                            "swing",
                            "${Heart}",
                            '1',
                            '0.68'
                        ],
                        [
                            "eid1967",
                            "top",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            '-369px',
                            '-369px'
                        ],
                        [
                            "eid1975",
                            "top",
                            120000,
                            0,
                            "easeInOutElastic",
                            "${RoundRect}",
                            '-369px',
                            '-369px'
                        ],
                        [
                            "eid2365",
                            "width",
                            244750,
                            582,
                            "easeInOutElastic",
                            "${EllipseCopy4}",
                            '452px',
                            '854px'
                        ],
                        [
                            "eid2366",
                            "width",
                            268318,
                            6182,
                            "easeInOutElastic",
                            "${EllipseCopy4}",
                            '854px',
                            '1097px'
                        ],
                        [
                            "eid2343",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${guy22}",
                            '1366px',
                            '1366px'
                        ],
                        [
                            "eid2344",
                            "left",
                            249500,
                            0,
                            "easeInOutElastic",
                            "${guy22}",
                            '1366px',
                            '135px'
                        ],
                        [
                            "eid2345",
                            "left",
                            253169,
                            0,
                            "easeInOutElastic",
                            "${guy22}",
                            '135px',
                            '1306px'
                        ],
                        [
                            "eid1368",
                            "scaleY",
                            35250,
                            750,
                            "swing",
                            "${anim1Circle3}",
                            '1',
                            '0.6'
                        ],
                        [
                            "eid1834",
                            "left",
                            125000,
                            0,
                            "easeOutQuart",
                            "${CultAnim2Title}",
                            '1086px',
                            '1086px'
                        ],
                        [
                            "eid1835",
                            "left",
                            129000,
                            250,
                            "easeOutQuart",
                            "${CultAnim2Title}",
                            '1086px',
                            '533px'
                        ],
                        [
                            "eid2474",
                            "left",
                            200000,
                            0,
                            "linear",
                            "${CultAnim2Title}",
                            '533px',
                            '2399px'
                        ],
                        [
                            "eid2370",
                            "scaleY",
                            242432,
                            1568,
                            "easeOutQuad",
                            "${PsychAnim1Intro}",
                            '1',
                            '9.66'
                        ],
                        [
                            "eid1397",
                            "left",
                            32000,
                            0,
                            "easeInOutElastic",
                            "${Anim2path1Copy}",
                            '1115px',
                            '1115px'
                        ],
                        [
                            "eid1398",
                            "left",
                            45000,
                            432,
                            "linear",
                            "${Anim2path1Copy}",
                            '485px',
                            '391px'
                        ],
                        [
                            "eid1399",
                            "left",
                            45432,
                            1727,
                            "linear",
                            "${Anim2path1Copy}",
                            '391px',
                            '266px'
                        ],
                        [
                            "eid2283",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${Anim6TextCopy}",
                            '1105px',
                            '1105px'
                        ],
                        [
                            "eid2284",
                            "left",
                            274500,
                            3128,
                            "easeInOutElastic",
                            "${Anim6TextCopy}",
                            '1105px',
                            '483px'
                        ],
                        [
                            "eid2285",
                            "left",
                            315000,
                            3000,
                            "easeInOutElastic",
                            "${Anim6TextCopy}",
                            '483px',
                            '1088px'
                        ],
                        [
                            "eid2286",
                            "left",
                            390835,
                            3830,
                            "easeInOutElastic",
                            "${Anim6TextCopy}",
                            '483px',
                            '1213px'
                        ],
                        [
                            "eid2287",
                            "left",
                            425915,
                            1750,
                            "easeInOutElastic",
                            "${Anim6TextCopy}",
                            '483px',
                            '1116px'
                        ],
                        [
                            "eid2404",
                            "width",
                            243500,
                            500,
                            "easeOutQuad",
                            "${PsychAnim1Circle6}",
                            '1019px',
                            '2470px'
                        ],
                        [
                            "eid2405",
                            "width",
                            244000,
                            250,
                            "easeOutQuad",
                            "${PsychAnim1Circle6}",
                            '2470px',
                            '1072px'
                        ],
                        [
                            "eid1395",
                            "top",
                            45000,
                            432,
                            "linear",
                            "${Anim2path1Copy}",
                            '162px',
                            '67px'
                        ],
                        [
                            "eid1396",
                            "top",
                            45432,
                            1727,
                            "linear",
                            "${Anim2path1Copy}",
                            '67px',
                            '-59px'
                        ],
                        [
                            "eid2300",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${RedBar}",
                            '1925px',
                            '1925px'
                        ],
                        [
                            "eid2301",
                            "left",
                            256000,
                            1250,
                            "easeInQuad",
                            "${RedBar}",
                            '1929px',
                            '369px'
                        ],
                        [
                            "eid2302",
                            "left",
                            266000,
                            3000,
                            "easeInOutElastic",
                            "${RedBar}",
                            '369px',
                            '1512px'
                        ],
                        [
                            "eid1241",
                            "scaleY",
                            98000,
                            7000,
                            "easeInOutElastic",
                            "${Anim6Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1563",
                            "scaleX",
                            79500,
                            750,
                            "linear",
                            "${Ellipse3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1305",
                            "opacity",
                            102000,
                            0,
                            "easeInOutElastic",
                            "${anim}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1416",
                            "width",
                            42457,
                            1543,
                            "easeInOutElastic",
                            "${Anim2path1Copy2}",
                            '35px',
                            '243px'
                        ],
                        [
                            "eid1929",
                            "scaleX",
                            125000,
                            1000,
                            "easeOutQuart",
                            "${CultureIntro}",
                            '10.13',
                            '1'
                        ],
                        [
                            "eid1930",
                            "scaleX",
                            126250,
                            500,
                            "linear",
                            "${CultureIntro}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1466",
                            "top",
                            66000,
                            3000,
                            "easeInQuad",
                            "${Anim3}",
                            '0px',
                            '1685px'
                        ],
                        [
                            "eid1467",
                            "top",
                            89000,
                            0,
                            "easeOutQuint",
                            "${Anim3}",
                            '1685px',
                            '1685px'
                        ],
                        [
                            "eid2398",
                            "top",
                            243500,
                            500,
                            "easeOutQuad",
                            "${PsychAnim1Circle6}",
                            '253px',
                            '-1212px'
                        ],
                        [
                            "eid1826",
                            "top",
                            125000,
                            0,
                            "easeOutElastic",
                            "${dotOneCopy4}",
                            '431px',
                            '431px'
                        ],
                        [
                            "eid2449",
                            "top",
                            200000,
                            0,
                            "linear",
                            "${dotOneCopy4}",
                            '431px',
                            '403px'
                        ],
                        [
                            "eid1799",
                            "left",
                            125000,
                            0,
                            "easeOutCubic",
                            "${water}",
                            '-2577px',
                            '-2577px'
                        ],
                        [
                            "eid1800",
                            "left",
                            145750,
                            1250,
                            "easeOutCubic",
                            "${water}",
                            '-2577px',
                            '-206px'
                        ],
                        [
                            "eid2425",
                            "left",
                            200000,
                            0,
                            "linear",
                            "${water}",
                            '-206px',
                            '-2349px'
                        ],
                        [
                            "eid2373",
                            "left",
                            241500,
                            500,
                            "easeOutElastic",
                            "${PsychAnim1Intro}",
                            '-385px',
                            '582px'
                        ],
                        [
                            "eid1394",
                            "width",
                            47158,
                            2592,
                            "easeOutQuart",
                            "${Anim2path1}",
                            '10px',
                            '987px'
                        ],
                        [
                            "eid1663",
                            "height",
                            85000,
                            0,
                            "easeInCubic",
                            "${_4outCircle}",
                            '1241px',
                            '1241px'
                        ],
                        [
                            "eid1494",
                            "left",
                            81339,
                            870,
                            "easeOutCubic",
                            "${anim4}",
                            '-87px',
                            '-367px'
                        ],
                        [
                            "eid1495",
                            "left",
                            82209,
                            130,
                            "easeOutCubic",
                            "${anim4}",
                            '-367px',
                            '-460px'
                        ],
                        [
                            "eid1496",
                            "left",
                            86000,
                            597,
                            "easeOutQuint",
                            "${anim4}",
                            '-460px',
                            '-459px'
                        ],
                        [
                            "eid1379",
                            "scaleY",
                            45750,
                            1278,
                            "linear",
                            "${Animation2}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid1361",
                            "scaleX",
                            33000,
                            646,
                            "easeOutBounce",
                            "${Anim1Circle4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1362",
                            "scaleX",
                            35250,
                            750,
                            "easeOutBounce",
                            "${Anim1Circle4}",
                            '1',
                            '0.33'
                        ],
                        [
                            "eid443",
                            "rotateZ",
                            0,
                            1500,
                            "easeInQuad",
                            "${inCirc2}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid487",
                            "rotateZ",
                            1704,
                            28296,
                            "linear",
                            "${inCirc2}",
                            '360deg',
                            '724deg'
                        ],
                        [
                            "eid2327",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${guy32}",
                            '1508px',
                            '1508px'
                        ],
                        [
                            "eid2328",
                            "left",
                            253750,
                            0,
                            "easeInOutElastic",
                            "${guy32}",
                            '1508px',
                            '135px'
                        ],
                        [
                            "eid2329",
                            "left",
                            266000,
                            8500,
                            "easeInOutElastic",
                            "${guy32}",
                            '135px',
                            '2441px'
                        ],
                        [
                            "eid1251",
                            "top",
                            104000,
                            0,
                            "easeInOutBounce",
                            "${pulse2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1797",
                            "left",
                            147750,
                            20883,
                            "linear",
                            "${world}",
                            '1061px',
                            '-1516px'
                        ],
                        [
                            "eid2423",
                            "left",
                            200000,
                            0,
                            "linear",
                            "${world}",
                            '-1516px',
                            '-1488px'
                        ],
                        [
                            "eid1499",
                            "top",
                            81339,
                            1000,
                            "linear",
                            "${smallpath2}",
                            '470px',
                            '202px'
                        ],
                        [
                            "eid1749",
                            "left",
                            125000,
                            0,
                            "linear",
                            "${Anim5Text}",
                            '1098px',
                            '1098px'
                        ],
                        [
                            "eid1750",
                            "left",
                            145750,
                            1750,
                            "easeOutCubic",
                            "${Anim5Text}",
                            '1098px',
                            '442px'
                        ],
                        [
                            "eid2471",
                            "left",
                            200000,
                            0,
                            "linear",
                            "${Anim5Text}",
                            '442px',
                            '-1082px'
                        ],
                        [
                            "eid1807",
                            "scaleY",
                            142000,
                            1000,
                            "easeOutElastic",
                            "${dotOne}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1576",
                            "top",
                            32000,
                            0,
                            "easeInQuad",
                            "${Ellipse3Copy3}",
                            '153px',
                            '153px'
                        ],
                        [
                            "eid1577",
                            "top",
                            75750,
                            0,
                            "easeInOutBounce",
                            "${Ellipse3Copy3}",
                            '153px',
                            '365px'
                        ],
                        [
                            "eid1240",
                            "scaleX",
                            98000,
                            7000,
                            "easeInOutElastic",
                            "${Anim6Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1316",
                            "opacity",
                            55500,
                            0,
                            "swing",
                            "${anim3back}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1317",
                            "opacity",
                            65500,
                            0,
                            "swing",
                            "${anim3back}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1996",
                            "scaleY",
                            427665,
                            2000,
                            "easeInOutElastic",
                            "${RedButton}",
                            '1',
                            '1.25'
                        ],
                        [
                            "eid1952",
                            "top",
                            125000,
                            1000,
                            "easeOutQuart",
                            "${CultAnim1Circle1}",
                            '-661px',
                            '224px'
                        ],
                        [
                            "eid2470",
                            "top",
                            200000,
                            0,
                            "linear",
                            "${CultAnim1Circle1}",
                            '224px',
                            '191px'
                        ],
                        [
                            "eid1889",
                            "left",
                            125000,
                            0,
                            "easeOutElastic",
                            "${RoundRectCopy2}",
                            '-273px',
                            '-273px'
                        ],
                        [
                            "eid1890",
                            "left",
                            139750,
                            0,
                            "easeOutElastic",
                            "${RoundRectCopy2}",
                            '-273px',
                            '499px'
                        ],
                        [
                            "eid1891",
                            "left",
                            141000,
                            1000,
                            "easeOutElastic",
                            "${RoundRectCopy2}",
                            '499px',
                            '431px'
                        ],
                        [
                            "eid2465",
                            "left",
                            200000,
                            0,
                            "linear",
                            "${RoundRectCopy2}",
                            '431px',
                            '-1085px'
                        ],
                        [
                            "eid1808",
                            "left",
                            125000,
                            0,
                            "easeOutElastic",
                            "${dotOne}",
                            '-1073px',
                            '-1073px'
                        ],
                        [
                            "eid1809",
                            "left",
                            139000,
                            0,
                            "easeOutElastic",
                            "${dotOne}",
                            '-1073px',
                            '723px'
                        ],
                        [
                            "eid2450",
                            "left",
                            200000,
                            0,
                            "linear",
                            "${dotOne}",
                            '723px',
                            '-540px'
                        ],
                        [
                            "eid1474",
                            "left",
                            32000,
                            0,
                            "easeOutElastic",
                            "${ybomText}",
                            '-437px',
                            '-437px'
                        ],
                        [
                            "eid1475",
                            "left",
                            55500,
                            1500,
                            "easeInElastic",
                            "${ybomText}",
                            '-437px',
                            '37px'
                        ],
                        [
                            "eid2138",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${SadGraphic}",
                            '-424px',
                            '-424px'
                        ],
                        [
                            "eid2139",
                            "top",
                            394665,
                            0,
                            "easeInOutElastic",
                            "${SadGraphic}",
                            '-424px',
                            '82px'
                        ],
                        [
                            "eid2140",
                            "top",
                            412165,
                            0,
                            "easeInOutElastic",
                            "${SadGraphic}",
                            '82px',
                            '869px'
                        ],
                        [
                            "eid2210",
                            "scaleX",
                            394665,
                            1000,
                            "easeInOutElastic",
                            "${SadCircCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2211",
                            "scaleX",
                            395665,
                            667,
                            "easeInOutElastic",
                            "${SadCircCopy2}",
                            '0',
                            '2'
                        ],
                        [
                            "eid1405",
                            "top",
                            45000,
                            432,
                            "linear",
                            "${EllipseCopy}",
                            '157px',
                            '-33px'
                        ],
                        [
                            "eid1406",
                            "top",
                            45432,
                            1727,
                            "linear",
                            "${EllipseCopy}",
                            '-33px',
                            '-287px'
                        ],
                        [
                            "eid1658",
                            "top",
                            32000,
                            0,
                            "linear",
                            "${_4outCircle}",
                            '141px',
                            '141px'
                        ],
                        [
                            "eid1659",
                            "top",
                            82339,
                            1059,
                            "easeOutQuint",
                            "${_4outCircle}",
                            '125px',
                            '132px'
                        ],
                        [
                            "eid1716",
                            "top",
                            87945,
                            648,
                            "linear",
                            "${_4outCircle}",
                            '132px',
                            '-2px'
                        ],
                        [
                            "eid1661",
                            "top",
                            94500,
                            1615,
                            "easeInQuint",
                            "${_4outCircle}",
                            '154px',
                            '-1260px'
                        ],
                        [
                            "eid1593",
                            "scaleX",
                            74500,
                            250,
                            "easeInOutBounce",
                            "${Ellipse3Copy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1409",
                            "left",
                            37500,
                            0,
                            "easeInOutElastic",
                            "${EllipseCopy2}",
                            '1112px',
                            '1112px'
                        ],
                        [
                            "eid1410",
                            "left",
                            42457,
                            1543,
                            "easeInOutElastic",
                            "${EllipseCopy2}",
                            '748px',
                            '747px'
                        ],
                        [
                            "eid1756",
                            "left",
                            125000,
                            0,
                            "easeOutElastic",
                            "${CultAnim4Forward}",
                            '1078px',
                            '1078px'
                        ],
                        [
                            "eid1757",
                            "left",
                            139000,
                            0,
                            "easeOutElastic",
                            "${CultAnim4Forward}",
                            '1078px',
                            '948px'
                        ],
                        [
                            "eid1758",
                            "left",
                            145500,
                            0,
                            "linear",
                            "${CultAnim4Forward}",
                            '948px',
                            '1235px'
                        ],
                        [
                            "eid2378",
                            "scaleY",
                            242432,
                            1568,
                            "linear",
                            "${PsychAnim1Circle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1539",
                            "width",
                            73750,
                            1000,
                            "linear",
                            "${smallpath2Copy8}",
                            '19px',
                            '60px'
                        ],
                        [
                            "eid1566",
                            "scaleY",
                            72750,
                            346,
                            "easeInOutElastic",
                            "${Ellipse3Copy}",
                            '0',
                            '1.2'
                        ],
                        [
                            "eid1802",
                            "left",
                            125000,
                            0,
                            "easeOutElastic",
                            "${Anim4TextCopy}",
                            '1687px',
                            '1687px'
                        ],
                        [
                            "eid1803",
                            "left",
                            139750,
                            1250,
                            "easeOutElastic",
                            "${Anim4TextCopy}",
                            '1687px',
                            '533px'
                        ],
                        [
                            "eid2472",
                            "left",
                            200000,
                            0,
                            "linear",
                            "${Anim4TextCopy}",
                            '533px',
                            '-396px'
                        ],
                        [
                            "eid2275",
                            "scaleX",
                            327000,
                            1000,
                            "easeInOutElastic",
                            "${AngryBox}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1497",
                            "scaleX",
                            81339,
                            870,
                            "easeOutCubic",
                            "${anim4}",
                            '1',
                            '1.45'
                        ],
                        [
                            "eid1498",
                            "scaleX",
                            82209,
                            130,
                            "easeOutCubic",
                            "${anim4}",
                            '1.45',
                            '1.12'
                        ],
                        [
                            "eid1469",
                            "scaleX",
                            66000,
                            3000,
                            "easeInQuad",
                            "${Anim3}",
                            '1',
                            '4'
                        ],
                        [
                            "eid1235",
                            "left",
                            23000,
                            0,
                            "easeInBounce",
                            "${bioButton}",
                            '319px',
                            '319px'
                        ],
                        [
                            "eid1682",
                            "left",
                            31000,
                            0,
                            "easeInBounce",
                            "${bioButton}",
                            '319px',
                            '-1419px'
                        ],
                        [
                            "eid1440",
                            "scaleY",
                            39750,
                            2250,
                            "swing",
                            "${SoundCopy}",
                            '0',
                            '1.76'
                        ],
                        [
                            "eid453",
                            "scaleY",
                            0,
                            1500,
                            "easeInQuad",
                            "${inCirc2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2191",
                            "scaleX",
                            394665,
                            1000,
                            "easeInOutElastic",
                            "${SadCircCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2192",
                            "scaleX",
                            395665,
                            667,
                            "easeInOutElastic",
                            "${SadCircCopy}",
                            '0',
                            '2'
                        ],
                        [
                            "eid2298",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${RedBar}",
                            '42px',
                            '42px'
                        ],
                        [
                            "eid2299",
                            "top",
                            256000,
                            0,
                            "easeInOutElastic",
                            "${RedBar}",
                            '42px',
                            '31px'
                        ],
                        [
                            "eid1214",
                            "left",
                            1500,
                            21500,
                            "easeInBounce",
                            "${outCirc2}",
                            '232px',
                            '238px'
                        ],
                        [
                            "eid1683",
                            "left",
                            31000,
                            0,
                            "easeInBounce",
                            "${outCirc2}",
                            '238px',
                            '-1500px'
                        ],
                        [
                            "eid1348",
                            "scaleY",
                            33000,
                            587,
                            "swing",
                            "${Anim1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid450",
                            "scaleX",
                            0,
                            1500,
                            "easeInQuad",
                            "${outCirc1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1960",
                            "left",
                            0,
                            0,
                            "linear",
                            "${CultureIntro}",
                            '-1878px',
                            '-1878px'
                        ],
                        [
                            "eid1931",
                            "left",
                            125000,
                            0,
                            "linear",
                            "${CultureIntro}",
                            '-1878px',
                            '536px'
                        ],
                        [
                            "eid1958",
                            "left",
                            126000,
                            0,
                            "linear",
                            "${CultureIntro}",
                            '536px',
                            '536px'
                        ],
                        [
                            "eid1932",
                            "left",
                            126821,
                            0,
                            "linear",
                            "${CultureIntro}",
                            '536px',
                            '1080px'
                        ],
                        [
                            "eid1424",
                            "left",
                            37500,
                            0,
                            "easeInOutElastic",
                            "${Anim2path1Copy3}",
                            '1100px',
                            '1100px'
                        ],
                        [
                            "eid1425",
                            "left",
                            44000,
                            1000,
                            "linear",
                            "${Anim2path1Copy3}",
                            '229px',
                            '485px'
                        ],
                        [
                            "eid1790",
                            "top",
                            125000,
                            0,
                            "easeOutQuart",
                            "${CultAnim2Back}",
                            '413px',
                            '413px'
                        ],
                        [
                            "eid1791",
                            "top",
                            126250,
                            0,
                            "easeOutQuart",
                            "${CultAnim2Back}",
                            '413px',
                            '413px'
                        ],
                        [
                            "eid1792",
                            "top",
                            129521,
                            0,
                            "easeOutQuart",
                            "${CultAnim2Back}",
                            '413px',
                            '413px'
                        ],
                        [
                            "eid2268",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${HappyBox}",
                            '168px',
                            '168px'
                        ],
                        [
                            "eid2269",
                            "left",
                            433665,
                            1000,
                            "easeInOutElastic",
                            "${HappyBox}",
                            '171px',
                            '614px'
                        ],
                        [
                            "eid2270",
                            "left",
                            435000,
                            0,
                            "easeInOutElastic",
                            "${HappyBox}",
                            '614px',
                            '2042px'
                        ],
                        [
                            "eid2218",
                            "width",
                            396332,
                            666,
                            "easeInOutElastic",
                            "${SadCircCopy2}",
                            '155px',
                            '184px'
                        ],
                        [
                            "eid2219",
                            "width",
                            396998,
                            667,
                            "easeInOutElastic",
                            "${SadCircCopy2}",
                            '184px',
                            '224px'
                        ],
                        [
                            "eid2261",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${HappyCircCopy2}",
                            '-556px',
                            '-556px'
                        ],
                        [
                            "eid2262",
                            "left",
                            429665,
                            0,
                            "easeInOutElastic",
                            "${HappyCircCopy2}",
                            '-556px',
                            '249px'
                        ],
                        [
                            "eid2263",
                            "left",
                            435000,
                            0,
                            "easeInOutElastic",
                            "${HappyCircCopy2}",
                            '249px',
                            '-458px'
                        ],
                        [
                            "eid1552",
                            "height",
                            72750,
                            0,
                            "easeInQuad",
                            "${smallpath}",
                            '17px',
                            '17px'
                        ],
                        [
                            "eid468",
                            "opacity",
                            0,
                            1500,
                            "easeInQuad",
                            "${inCirc3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2232",
                            "scaleY",
                            429665,
                            1000,
                            "easeInOutElastic",
                            "${HappyCirc}",
                            '1',
                            '2.02'
                        ],
                        [
                            "eid2233",
                            "scaleY",
                            431665,
                            1000,
                            "easeInOutElastic",
                            "${HappyCirc}",
                            '2.02',
                            '2.4'
                        ],
                        [
                            "eid1953",
                            "left",
                            125000,
                            1000,
                            "easeOutQuart",
                            "${CultAnim1Circle1}",
                            '2193px',
                            '376px'
                        ],
                        [
                            "eid2469",
                            "left",
                            200000,
                            0,
                            "linear",
                            "${CultAnim1Circle1}",
                            '376px',
                            '-1485px'
                        ],
                        [
                            "eid2288",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${MadMusic}",
                            '1071px',
                            '1071px'
                        ],
                        [
                            "eid2289",
                            "top",
                            259250,
                            1000,
                            "easeInOutElastic",
                            "${MadMusic}",
                            '1071px',
                            '649px'
                        ],
                        [
                            "eid2290",
                            "top",
                            266000,
                            7500,
                            "easeInOutElastic",
                            "${MadMusic}",
                            '649px',
                            '1049px'
                        ],
                        [
                            "eid2265",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${HappyBox}",
                            '-405px',
                            '-405px'
                        ],
                        [
                            "eid2266",
                            "top",
                            433665,
                            0,
                            "easeInOutElastic",
                            "${HappyBox}",
                            '-405px',
                            '208px'
                        ],
                        [
                            "eid2359",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${EllipseCopy4}",
                            '431px',
                            '431px'
                        ],
                        [
                            "eid2360",
                            "top",
                            244750,
                            582,
                            "easeInOutElastic",
                            "${EllipseCopy4}",
                            '431px',
                            '172px'
                        ],
                        [
                            "eid2361",
                            "top",
                            268318,
                            6182,
                            "easeInOutElastic",
                            "${EllipseCopy4}",
                            '172px',
                            '-373px'
                        ],
                        [
                            "eid1555",
                            "width",
                            72000,
                            750,
                            "linear",
                            "${smallpath}",
                            '69px',
                            '113px'
                        ],
                        [
                            "eid2136",
                            "scaleY",
                            427665,
                            2000,
                            "easeInOutElastic",
                            "${girl1}",
                            '1',
                            '1.25'
                        ],
                        [
                            "eid2255",
                            "width",
                            430665,
                            1000,
                            "easeInOutElastic",
                            "${HappyCircCopy}",
                            '155px',
                            '192px'
                        ],
                        [
                            "eid2044",
                            "top",
                            249500,
                            0,
                            "easeInOutElastic",
                            "${PsychAnim3Back}",
                            '370px',
                            '370px'
                        ],
                        [
                            "eid1283",
                            "scaleX",
                            89500,
                            1138,
                            "easeOutQuint",
                            "${orange}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1383",
                            "scaleX",
                            45750,
                            1278,
                            "linear",
                            "${Animation2}",
                            '1',
                            '1.2'
                        ],
                        [
                            "eid1688",
                            "left",
                            0,
                            0,
                            "easeOutCubic",
                            "${Brain2}",
                            '541px',
                            '541px'
                        ],
                        [
                            "eid1615",
                            "left",
                            32000,
                            0,
                            "linear",
                            "${Brain2}",
                            '541px',
                            '442px'
                        ],
                        [
                            "eid1616",
                            "left",
                            82339,
                            0,
                            "linear",
                            "${Brain2}",
                            '695px',
                            '399px'
                        ],
                        [
                            "eid1617",
                            "left",
                            86597,
                            653,
                            "easeInCubic",
                            "${Brain2}",
                            '480px',
                            '151px'
                        ],
                        [
                            "eid1695",
                            "left",
                            87250,
                            750,
                            "linear",
                            "${Brain2}",
                            '151px',
                            '108px'
                        ],
                        [
                            "eid1618",
                            "left",
                            88000,
                            1000,
                            "easeInCubic",
                            "${Brain2}",
                            '108px',
                            '117px'
                        ],
                        [
                            "eid1619",
                            "left",
                            96115,
                            0,
                            "easeOutQuint",
                            "${Brain2}",
                            '117px',
                            '1429px'
                        ],
                        [
                            "eid2072",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${MadCircleGraphic}",
                            '954px',
                            '954px'
                        ],
                        [
                            "eid2073",
                            "top",
                            323000,
                            0,
                            "easeInOutElastic",
                            "${MadCircleGraphic}",
                            '954px',
                            '79px'
                        ],
                        [
                            "eid2074",
                            "top",
                            332127,
                            0,
                            "easeInOutElastic",
                            "${MadCircleGraphic}",
                            '79px',
                            '1062px'
                        ],
                        [
                            "eid1516",
                            "width",
                            79500,
                            1000,
                            "linear",
                            "${smallpath2Copy3}",
                            '19px',
                            '263px'
                        ],
                        [
                            "eid1628",
                            "scaleY",
                            88000,
                            500,
                            "easeInCubic",
                            "${Ellipse4}",
                            '0',
                            '1.2'
                        ],
                        [
                            "eid1629",
                            "scaleY",
                            88500,
                            250,
                            "easeInCubic",
                            "${Ellipse4}",
                            '1.2',
                            '0.88'
                        ],
                        [
                            "eid1630",
                            "scaleY",
                            94500,
                            1094,
                            "easeOutQuint",
                            "${Ellipse4}",
                            '0.88',
                            '2'
                        ],
                        [
                            "eid1920",
                            "top",
                            125000,
                            0,
                            "easeOutElastic",
                            "${bg2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1921",
                            "top",
                            131000,
                            0,
                            "easeOutElastic",
                            "${bg2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid2147",
                            "scaleX",
                            315000,
                            0,
                            "easeInOutElastic",
                            "${MadCircle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid2148",
                            "scaleX",
                            320000,
                            1000,
                            "easeInOutElastic",
                            "${MadCircle}",
                            '1',
                            '2'
                        ],
                        [
                            "eid1373",
                            "rotateZ",
                            33000,
                            750,
                            "swing",
                            "${Anim1Circle2}",
                            '0deg',
                            '180deg'
                        ],
                        [
                            "eid1374",
                            "rotateZ",
                            36000,
                            500,
                            "swing",
                            "${Anim1Circle2}",
                            '180deg',
                            '360deg'
                        ],
                        [
                            "eid1242",
                            "top",
                            98000,
                            1899,
                            "swing",
                            "${Heart}",
                            '768px',
                            '158px'
                        ],
                        [
                            "eid1243",
                            "top",
                            99899,
                            4101,
                            "swing",
                            "${Heart}",
                            '158px',
                            '92px'
                        ],
                        [
                            "eid1244",
                            "top",
                            104000,
                            1000,
                            "swing",
                            "${Heart}",
                            '92px',
                            '128px'
                        ],
                        [
                            "eid1965",
                            "top",
                            111000,
                            0,
                            "linear",
                            "${Heart}",
                            '128px',
                            '132px'
                        ],
                        [
                            "eid1431",
                            "width",
                            42457,
                            1543,
                            "easeInOutElastic",
                            "${Anim2path1Copy4}",
                            '35px',
                            '243px'
                        ],
                        [
                            "eid1776",
                            "top",
                            125000,
                            0,
                            "easeOutQuart",
                            "${CultAnim2Forward}",
                            '413px',
                            '413px'
                        ],
                        [
                            "eid1777",
                            "top",
                            129521,
                            0,
                            "easeOutQuart",
                            "${CultAnim2Forward}",
                            '413px',
                            '413px'
                        ],
                        [
                            "eid2271",
                            "scaleX",
                            433665,
                            1000,
                            "easeInOutElastic",
                            "${HappyBox}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1913",
                            "top",
                            125000,
                            0,
                            "easeOutElastic",
                            "${RoundRectCopy7}",
                            '601px',
                            '601px'
                        ],
                        [
                            "eid1914",
                            "top",
                            140750,
                            0,
                            "easeOutElastic",
                            "${RoundRectCopy7}",
                            '601px',
                            '601px'
                        ],
                        [
                            "eid1915",
                            "top",
                            141000,
                            1000,
                            "easeOutElastic",
                            "${RoundRectCopy7}",
                            '601px',
                            '435px'
                        ],
                        [
                            "eid1753",
                            "left",
                            125000,
                            0,
                            "easeOutCubic",
                            "${CultAnim5Back}",
                            '-61px',
                            '-61px'
                        ],
                        [
                            "eid1754",
                            "left",
                            147500,
                            0,
                            "easeOutCubic",
                            "${CultAnim5Back}",
                            '-61px',
                            '23px'
                        ],
                        [
                            "eid2478",
                            "left",
                            200000,
                            0,
                            "linear",
                            "${CultAnim5Back}",
                            '23px',
                            '-53px'
                        ],
                        [
                            "eid1774",
                            "top",
                            131000,
                            0,
                            "easeOutElastic",
                            "${CultAnim3Back}",
                            '413px',
                            '413px'
                        ],
                        [
                            "eid1775",
                            "top",
                            138500,
                            0,
                            "easeOutElastic",
                            "${CultAnim3Back}",
                            '413px',
                            '413px'
                        ],
                        [
                            "eid461",
                            "scaleY",
                            0,
                            1500,
                            "easeInQuad",
                            "${cultButton}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1461",
                            "top",
                            37500,
                            500,
                            "easeInOutBounce",
                            "${boomBox}",
                            '164px',
                            '162px'
                        ],
                        [
                            "eid1457",
                            "top",
                            41000,
                            0,
                            "swing",
                            "${Anim2Text2}",
                            '654px',
                            '654px'
                        ],
                        [
                            "eid1504",
                            "rotateZ",
                            81250,
                            0,
                            "linear",
                            "${smallpath2Copy}",
                            '-31deg',
                            '-31deg'
                        ],
                        [
                            "eid2315",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${BlueBar}",
                            '389px',
                            '389px'
                        ],
                        [
                            "eid2316",
                            "top",
                            249500,
                            0,
                            "easeInOutElastic",
                            "${BlueBar}",
                            '389px',
                            '31px'
                        ],
                        [
                            "eid1450",
                            "top",
                            37250,
                            0,
                            "swing",
                            "${SoundCopy3}",
                            '-263px',
                            '-263px'
                        ],
                        [
                            "eid1451",
                            "top",
                            39750,
                            0,
                            "swing",
                            "${SoundCopy3}",
                            '-263px',
                            '340px'
                        ],
                        [
                            "eid2205",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${SadCircCopy2}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid2206",
                            "top",
                            394665,
                            0,
                            "easeInOutElastic",
                            "${SadCircCopy2}",
                            '24px',
                            '273px'
                        ],
                        [
                            "eid2207",
                            "top",
                            396332,
                            666,
                            "easeInOutElastic",
                            "${SadCircCopy2}",
                            '273px',
                            '257px'
                        ],
                        [
                            "eid2208",
                            "top",
                            396998,
                            667,
                            "easeInOutElastic",
                            "${SadCircCopy2}",
                            '257px',
                            '238px'
                        ],
                        [
                            "eid2209",
                            "top",
                            412165,
                            0,
                            "easeInOutElastic",
                            "${SadCircCopy2}",
                            '238px',
                            '1025px'
                        ],
                        [
                            "eid1582",
                            "top",
                            32000,
                            0,
                            "easeInQuad",
                            "${Ellipse3Copy4}",
                            '152px',
                            '152px'
                        ],
                        [
                            "eid1583",
                            "top",
                            77000,
                            0,
                            "easeInOutBounce",
                            "${Ellipse3Copy4}",
                            '152px',
                            '331px'
                        ],
                        [
                            "eid1640",
                            "top",
                            32000,
                            0,
                            "easeOutQuint",
                            "${Pasted4}",
                            '645px',
                            '645px'
                        ],
                        [
                            "eid1641",
                            "top",
                            88000,
                            1000,
                            "easeOutQuint",
                            "${Pasted4}",
                            '635px',
                            '17px'
                        ],
                        [
                            "eid1642",
                            "top",
                            94500,
                            1094,
                            "easeOutQuint",
                            "${Pasted4}",
                            '17px',
                            '-1744px'
                        ],
                        [
                            "eid1643",
                            "top",
                            95594,
                            0,
                            "easeOutQuint",
                            "${Pasted4}",
                            '-1744px',
                            '-1744px'
                        ],
                        [
                            "eid1537",
                            "left",
                            69750,
                            0,
                            "easeInQuad",
                            "${smallpath2Copy8}",
                            '1544px',
                            '1544px'
                        ],
                        [
                            "eid1538",
                            "left",
                            73750,
                            1000,
                            "linear",
                            "${smallpath2Copy8}",
                            '471px',
                            '471px'
                        ],
                        [
                            "eid1438",
                            "top",
                            37250,
                            0,
                            "swing",
                            "${SoundCopy}",
                            '-259px',
                            '-259px'
                        ],
                        [
                            "eid1439",
                            "top",
                            39750,
                            0,
                            "swing",
                            "${SoundCopy}",
                            '-259px',
                            '344px'
                        ],
                        [
                            "eid1751",
                            "top",
                            125000,
                            0,
                            "linear",
                            "${Anim5Text}",
                            '37px',
                            '37px'
                        ],
                        [
                            "eid1752",
                            "top",
                            145750,
                            1750,
                            "easeOutCubic",
                            "${Anim5Text}",
                            '37px',
                            '38px'
                        ],
                        [
                            "eid2166",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${MadCircleCopy2}",
                            '624px',
                            '624px'
                        ],
                        [
                            "eid2167",
                            "left",
                            322000,
                            0,
                            "easeInOutElastic",
                            "${MadCircleCopy2}",
                            '624px',
                            '639px'
                        ],
                        [
                            "eid2168",
                            "left",
                            332127,
                            0,
                            "easeInOutElastic",
                            "${MadCircleCopy2}",
                            '639px',
                            '743px'
                        ],
                        [
                            "eid1882",
                            "left",
                            125000,
                            0,
                            "easeOutElastic",
                            "${RoundRectCopy}",
                            '-343px',
                            '-343px'
                        ],
                        [
                            "eid1883",
                            "left",
                            139750,
                            0,
                            "easeOutElastic",
                            "${RoundRectCopy}",
                            '-343px',
                            '499px'
                        ],
                        [
                            "eid1884",
                            "left",
                            143000,
                            1000,
                            "easeOutElastic",
                            "${RoundRectCopy}",
                            '499px',
                            '359px'
                        ],
                        [
                            "eid2468",
                            "left",
                            200000,
                            0,
                            "linear",
                            "${RoundRectCopy}",
                            '359px',
                            '-1157px'
                        ],
                        [
                            "eid2113",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${Girl2}",
                            '-1647px',
                            '-1647px'
                        ],
                        [
                            "eid2114",
                            "left",
                            274500,
                            3128,
                            "easeInOutElastic",
                            "${Girl2}",
                            '-1647px',
                            '424px'
                        ],
                        [
                            "eid2115",
                            "left",
                            315000,
                            3000,
                            "easeInOutElastic",
                            "${Girl2}",
                            '424px',
                            '-329px'
                        ],
                        [
                            "eid2116",
                            "left",
                            390835,
                            0,
                            "easeInOutElastic",
                            "${Girl2}",
                            '-329px',
                            '424px'
                        ],
                        [
                            "eid2117",
                            "left",
                            425915,
                            1750,
                            "easeInOutElastic",
                            "${Girl2}",
                            '424px',
                            '1077px'
                        ],
                        [
                            "eid1544",
                            "width",
                            74750,
                            1000,
                            "linear",
                            "${smallpath2Copy9}",
                            '19px',
                            '92px'
                        ],
                        [
                            "eid1455",
                            "scaleX",
                            39750,
                            2250,
                            "easeInOutElastic",
                            "${SoundCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1954",
                            "scaleY",
                            125000,
                            1000,
                            "easeOutQuart",
                            "${CultAnim1Circle1}",
                            '3',
                            '0.94'
                        ],
                        [
                            "eid1955",
                            "scaleY",
                            126250,
                            500,
                            "linear",
                            "${CultAnim1Circle1}",
                            '0.94',
                            '4'
                        ],
                        [
                            "eid2090",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${HappyCircleGraphic}",
                            '-630px',
                            '-630px'
                        ],
                        [
                            "eid2091",
                            "top",
                            432665,
                            0,
                            "easeInOutElastic",
                            "${HappyCircleGraphic}",
                            '-630px',
                            '84px'
                        ],
                        [
                            "eid2049",
                            "top",
                            249500,
                            0,
                            "easeInOutElastic",
                            "${PsychAnim3Forward}",
                            '384px',
                            '384px'
                        ],
                        [
                            "eid2050",
                            "top",
                            253500,
                            0,
                            "easeInOutElastic",
                            "${PsychAnim3Forward}",
                            '384px',
                            '384px'
                        ],
                        [
                            "eid1668",
                            "width",
                            85000,
                            0,
                            "easeInCubic",
                            "${_4outCircle}",
                            '1241px',
                            '1241px'
                        ],
                        [
                            "eid2248",
                            "scaleX",
                            429665,
                            1000,
                            "easeInOutElastic",
                            "${HappyCircCopy}",
                            '1',
                            '2.02'
                        ],
                        [
                            "eid1564",
                            "top",
                            32000,
                            0,
                            "easeInQuad",
                            "${Ellipse3Copy}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid1565",
                            "top",
                            72750,
                            0,
                            "easeInOutElastic",
                            "${Ellipse3Copy}",
                            '26px',
                            '348px'
                        ],
                        [
                            "eid1321",
                            "top",
                            32000,
                            0,
                            "swing",
                            "${anim2back}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid1831",
                            "top",
                            131000,
                            2000,
                            "easeOutElastic",
                            "${CultAnim3Text}",
                            '141px',
                            '140px'
                        ],
                        [
                            "eid1825",
                            "scaleX",
                            141000,
                            1000,
                            "easeOutElastic",
                            "${dotOneCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1423",
                            "height",
                            44000,
                            1000,
                            "linear",
                            "${Anim2path1Copy3}",
                            '2px',
                            '516px'
                        ],
                        [
                            "eid2065",
                            "top",
                            240000,
                            0,
                            "easeOutElastic",
                            "${PsychAnim1Forward}",
                            '384px',
                            '384px'
                        ],
                        [
                            "eid1849",
                            "height",
                            132500,
                            3500,
                            "easeOutElastic",
                            "${guy1}",
                            '691px',
                            '410px'
                        ],
                        [
                            "eid1674",
                            "width",
                            32000,
                            1000,
                            "linear",
                            "${IntroTransition}",
                            '447px',
                            '1593px'
                        ],
                        [
                            "eid1437",
                            "scaleX",
                            39750,
                            2250,
                            "easeInOutElastic",
                            "${Sound}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1832",
                            "left",
                            131000,
                            2000,
                            "easeOutElastic",
                            "${CultAnim3Text}",
                            '1443px',
                            '537px'
                        ],
                        [
                            "eid1833",
                            "left",
                            139000,
                            1000,
                            "easeOutElastic",
                            "${CultAnim3Text}",
                            '537px',
                            '1254px'
                        ],
                        [
                            "eid1572",
                            "scaleY",
                            78500,
                            500,
                            "linear",
                            "${Ellipse3Copy2}",
                            '0',
                            '2.93'
                        ],
                        [
                            "eid1998",
                            "scaleX",
                            392665,
                            2000,
                            "easeInOutElastic",
                            "${BlueButton}",
                            '1',
                            '1.25'
                        ],
                        [
                            "eid1999",
                            "scaleX",
                            425915,
                            0,
                            "easeInOutElastic",
                            "${BlueButton}",
                            '1.25',
                            '1'
                        ],
                        [
                            "eid1291",
                            "scaleY",
                            88750,
                            1000,
                            "easeOutQuint",
                            "${Purple}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2243",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${HappyCircCopy}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid2244",
                            "top",
                            429665,
                            0,
                            "easeInOutElastic",
                            "${HappyCircCopy}",
                            '24px',
                            '274px'
                        ],
                        [
                            "eid2245",
                            "top",
                            430665,
                            1000,
                            "easeInOutElastic",
                            "${HappyCircCopy}",
                            '274px',
                            '255px'
                        ],
                        [
                            "eid1479",
                            "opacity",
                            55500,
                            3500,
                            "easeOutExpo",
                            "${brain}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1518",
                            "rotateZ",
                            78500,
                            0,
                            "linear",
                            "${smallpath2Copy4}",
                            '-53deg',
                            '-53deg'
                        ],
                        [
                            "eid2040",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${PsychAnim4Forward}",
                            '1171px',
                            '1171px'
                        ],
                        [
                            "eid2041",
                            "left",
                            253750,
                            0,
                            "easeInOutElastic",
                            "${PsychAnim4Forward}",
                            '1171px',
                            '970px'
                        ],
                        [
                            "eid2042",
                            "left",
                            265000,
                            0,
                            "easeInOutElastic",
                            "${PsychAnim4Forward}",
                            '970px',
                            '1058px'
                        ],
                        [
                            "eid1288",
                            "top",
                            32000,
                            0,
                            "easeOutQuint",
                            "${Purple}",
                            '346px',
                            '346px'
                        ],
                        [
                            "eid1742",
                            "top",
                            88750,
                            0,
                            "easeOutQuint",
                            "${Purple}",
                            '345px',
                            '351px'
                        ],
                        [
                            "eid1290",
                            "top",
                            94250,
                            0,
                            "easeOutQuint",
                            "${Purple}",
                            '351px',
                            '345px'
                        ],
                        [
                            "eid2102",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${girl3}",
                            '-1380px',
                            '-1380px'
                        ],
                        [
                            "eid2103",
                            "left",
                            274500,
                            3128,
                            "easeInOutElastic",
                            "${girl3}",
                            '-1380px',
                            '728px'
                        ],
                        [
                            "eid2104",
                            "left",
                            318000,
                            2000,
                            "easeInOutElastic",
                            "${girl3}",
                            '728px',
                            '623px'
                        ],
                        [
                            "eid2105",
                            "left",
                            390835,
                            3830,
                            "easeInOutElastic",
                            "${girl3}",
                            '728px',
                            '1077px'
                        ],
                        [
                            "eid2106",
                            "left",
                            425915,
                            1750,
                            "easeInOutElastic",
                            "${girl3}",
                            '728px',
                            '1381px'
                        ],
                        [
                            "eid1387",
                            "top",
                            47158,
                            0,
                            "linear",
                            "${Ellipse}",
                            '-286px',
                            '-286px'
                        ],
                        [
                            "eid2256",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${HappyCircCopy2}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid2257",
                            "top",
                            429665,
                            0,
                            "easeInOutElastic",
                            "${HappyCircCopy2}",
                            '24px',
                            '274px'
                        ],
                        [
                            "eid1892",
                            "height",
                            141000,
                            1000,
                            "easeOutElastic",
                            "${RoundRectCopy2}",
                            '33px',
                            '227px'
                        ],
                        [
                            "eid1843",
                            "top",
                            125000,
                            0,
                            "easeOutElastic",
                            "${guy1}",
                            '1417px',
                            '1417px'
                        ],
                        [
                            "eid1844",
                            "top",
                            128000,
                            1000,
                            "easeOutElastic",
                            "${guy1}",
                            '1417px',
                            '445px'
                        ],
                        [
                            "eid1845",
                            "top",
                            132500,
                            3500,
                            "easeOutElastic",
                            "${guy1}",
                            '445px',
                            '329px'
                        ],
                        [
                            "eid1846",
                            "top",
                            139000,
                            3000,
                            "easeOutElastic",
                            "${guy1}",
                            '329px',
                            '413px'
                        ],
                        [
                            "eid2384",
                            "rotateZ",
                            240000,
                            2000,
                            "linear",
                            "${PsychAnim1Circle5}",
                            '360deg',
                            '0deg'
                        ],
                        [
                            "eid2011",
                            "scaleX",
                            318000,
                            2000,
                            "easeInOutElastic",
                            "${yellowButton}",
                            '1',
                            '1.25'
                        ],
                        [
                            "eid2012",
                            "scaleX",
                            390835,
                            0,
                            "easeInOutElastic",
                            "${yellowButton}",
                            '1.25',
                            '1'
                        ],
                        [
                            "eid1946",
                            "scaleX",
                            125000,
                            1000,
                            "easeOutQuart",
                            "${CultAnim1Circle2}",
                            '4',
                            '1'
                        ],
                        [
                            "eid1947",
                            "scaleX",
                            126250,
                            500,
                            "linear",
                            "${CultAnim1Circle2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1545",
                            "top",
                            64500,
                            0,
                            "linear",
                            "${smallpath2Copy10}",
                            '346px',
                            '346px'
                        ],
                        [
                            "eid1546",
                            "top",
                            72750,
                            1000,
                            "linear",
                            "${smallpath2Copy10}",
                            '346px',
                            '292px'
                        ],
                        [
                            "eid1990",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${RedButton}",
                            '-783px',
                            '-783px'
                        ],
                        [
                            "eid1991",
                            "left",
                            277628,
                            2372,
                            "easeInOutElastic",
                            "${RedButton}",
                            '-167px',
                            '166px'
                        ],
                        [
                            "eid1992",
                            "left",
                            315000,
                            3000,
                            "easeInOutElastic",
                            "${RedButton}",
                            '166px',
                            '-587px'
                        ],
                        [
                            "eid1993",
                            "left",
                            390835,
                            3830,
                            "easeInOutElastic",
                            "${RedButton}",
                            '166px',
                            '-237px'
                        ],
                        [
                            "eid1994",
                            "left",
                            425915,
                            0,
                            "easeInOutElastic",
                            "${RedButton}",
                            '-237px',
                            '166px'
                        ],
                        [
                            "eid1995",
                            "left",
                            427665,
                            2000,
                            "easeInOutElastic",
                            "${RedButton}",
                            '166px',
                            '288px'
                        ],
                        [
                            "eid1426",
                            "width",
                            44000,
                            0,
                            "easeInOutElastic",
                            "${Anim2path1Copy3}",
                            '26px',
                            '26px'
                        ],
                        [
                            "eid1480",
                            "left",
                            32000,
                            0,
                            "easeInOutSine",
                            "${brain}",
                            '1068px',
                            '1068px'
                        ],
                        [
                            "eid1481",
                            "left",
                            53000,
                            0,
                            "easeInOutSine",
                            "${brain}",
                            '1068px',
                            '563px'
                        ],
                        [
                            "eid2158",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${MadCircleCopy}",
                            '645px',
                            '645px'
                        ],
                        [
                            "eid2159",
                            "left",
                            321000,
                            0,
                            "easeInOutElastic",
                            "${MadCircleCopy}",
                            '645px',
                            '640px'
                        ],
                        [
                            "eid2160",
                            "left",
                            332127,
                            0,
                            "easeInOutElastic",
                            "${MadCircleCopy}",
                            '640px',
                            '744px'
                        ],
                        [
                            "eid1611",
                            "height",
                            86597,
                            653,
                            "easeInCubic",
                            "${Brain2}",
                            '461px',
                            '338px'
                        ],
                        [
                            "eid1612",
                            "height",
                            87250,
                            750,
                            "easeInCubic",
                            "${Brain2}",
                            '338px',
                            '516px'
                        ],
                        [
                            "eid1478",
                            "top",
                            32000,
                            0,
                            "easeInOutSine",
                            "${brain}",
                            '93px',
                            '93px'
                        ],
                        [
                            "eid1812",
                            "scaleY",
                            142000,
                            1000,
                            "easeOutElastic",
                            "${dotOneCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1936",
                            "rotateZ",
                            126250,
                            500,
                            "linear",
                            "${CultAnim1Circle3}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid1418",
                            "height",
                            42457,
                            0,
                            "easeInOutElastic",
                            "${EllipseCopy3}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid2350",
                            "top",
                            240000,
                            0,
                            "easeOutQuad",
                            "${guy2Copy}",
                            '102px',
                            '102px'
                        ],
                        [
                            "eid2351",
                            "top",
                            244750,
                            582,
                            "easeInOutElastic",
                            "${guy2Copy}",
                            '102px',
                            '137px'
                        ],
                        [
                            "eid2352",
                            "top",
                            249085,
                            0,
                            "easeInOutElastic",
                            "${guy2Copy}",
                            '137px',
                            '137px'
                        ],
                        [
                            "eid2242",
                            "width",
                            430665,
                            1000,
                            "easeInOutElastic",
                            "${HappyCirc}",
                            '155px',
                            '192px'
                        ],
                        [
                            "eid1453",
                            "left",
                            37250,
                            0,
                            "swing",
                            "${SoundCopy3}",
                            '761px',
                            '761px'
                        ],
                        [
                            "eid1454",
                            "left",
                            39750,
                            0,
                            "swing",
                            "${SoundCopy3}",
                            '761px',
                            '-330px'
                        ],
                        [
                            "eid1950",
                            "scaleX",
                            125000,
                            1000,
                            "easeOutQuart",
                            "${CultAnim1Circle1}",
                            '3',
                            '0.94'
                        ],
                        [
                            "eid1951",
                            "scaleX",
                            126250,
                            500,
                            "linear",
                            "${CultAnim1Circle1}",
                            '0.94',
                            '4'
                        ],
                        [
                            "eid1527",
                            "top",
                            76750,
                            750,
                            "linear",
                            "${smallpath2Copy6}",
                            '343px',
                            '331px'
                        ],
                        [
                            "eid2362",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${EllipseCopy4}",
                            '-902px',
                            '-902px'
                        ],
                        [
                            "eid2363",
                            "left",
                            244750,
                            582,
                            "easeInOutElastic",
                            "${EllipseCopy4}",
                            '311px',
                            '103px'
                        ],
                        [
                            "eid2364",
                            "left",
                            268318,
                            6182,
                            "easeInOutElastic",
                            "${EllipseCopy4}",
                            '103px',
                            '-37px'
                        ],
                        [
                            "eid1942",
                            "scaleY",
                            125000,
                            1000,
                            "easeOutQuart",
                            "${CultAnim1Circle2}",
                            '4',
                            '1'
                        ],
                        [
                            "eid1943",
                            "scaleY",
                            126250,
                            500,
                            "linear",
                            "${CultAnim1Circle2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2353",
                            "background-color",
                            249500,
                            1250,
                            "easeInElastic",
                            "${EllipseCopy4}",
                            'rgba(223,186,67,1)',
                            'rgba(41,128,186,1)'
                        ],
                        [
                            "eid2355",
                            "background-color",
                            253750,
                            4250,
                            "easeInOutElastic",
                            "${EllipseCopy4}",
                            'rgba(41,128,186,1)',
                            'rgba(181,96,79,1.00)'
                        ],
                        [
                            "eid2356",
                            "background-color",
                            268318,
                            6182,
                            "easeInOutElastic",
                            "${EllipseCopy4}",
                            'rgba(181,96,79,1)',
                            'rgba(24,35,42,1.00)'
                        ],
                        [
                            "eid2411",
                            "scaleX",
                            240000,
                            2000,
                            "linear",
                            "${PsychAnim1Circle3}",
                            '4',
                            '1'
                        ],
                        [
                            "eid2412",
                            "scaleX",
                            242432,
                            1568,
                            "linear",
                            "${PsychAnim1Circle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1922",
                            "opacity",
                            131000,
                            7000,
                            "easeOutElastic",
                            "${bg2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1979",
                            "top",
                            123512,
                            0,
                            "linear",
                            "${exit_Button}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid1977",
                            "top",
                            125000,
                            0,
                            "easeOutElastic",
                            "${mountains}",
                            '801px',
                            '801px'
                        ],
                        [
                            "eid1855",
                            "top",
                            126907,
                            1093,
                            "easeOutElastic",
                            "${mountains}",
                            '800px',
                            '274px'
                        ],
                        [
                            "eid1856",
                            "top",
                            128000,
                            1000,
                            "easeOutElastic",
                            "${mountains}",
                            '274px',
                            '273px'
                        ],
                        [
                            "eid1857",
                            "top",
                            129000,
                            2000,
                            "easeOutElastic",
                            "${mountains}",
                            '273px',
                            '274px'
                        ],
                        [
                            "eid1858",
                            "top",
                            131000,
                            4000,
                            "easeOutElastic",
                            "${mountains}",
                            '274px',
                            '110px'
                        ],
                        [
                            "eid2109",
                            "scaleX",
                            318000,
                            2000,
                            "easeInOutElastic",
                            "${girl3}",
                            '1',
                            '1.25'
                        ],
                        [
                            "eid2110",
                            "scaleX",
                            390835,
                            0,
                            "easeInOutElastic",
                            "${girl3}",
                            '1.25',
                            '1'
                        ],
                        [
                            "eid1820",
                            "scaleX",
                            143000,
                            1000,
                            "easeOutElastic",
                            "${dotOneCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1584",
                            "scaleY",
                            77000,
                            500,
                            "easeInOutBounce",
                            "${Ellipse3Copy4}",
                            '0',
                            '1.2'
                        ],
                        [
                            "eid2085",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${HappyText}",
                            '-155px',
                            '-155px'
                        ],
                        [
                            "eid2086",
                            "top",
                            432665,
                            0,
                            "easeInOutElastic",
                            "${HappyText}",
                            '-155px',
                            '74px'
                        ],
                        [
                            "eid2199",
                            "width",
                            396332,
                            667,
                            "easeInOutElastic",
                            "${SadCircCopy}",
                            '155px',
                            '184px'
                        ],
                        [
                            "eid2393",
                            "rotateZ",
                            240000,
                            2000,
                            "linear",
                            "${PsychAnim1Circle4}",
                            '360deg',
                            '0deg'
                        ],
                        [
                            "eid2034",
                            "scaleY",
                            266000,
                            0,
                            "easeInOutElastic",
                            "${PsychAnim4Back}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1926",
                            "scaleY",
                            125000,
                            1000,
                            "easeOutQuart",
                            "${CultureIntro}",
                            '10.13',
                            '1'
                        ],
                        [
                            "eid1927",
                            "scaleY",
                            126250,
                            500,
                            "linear",
                            "${CultureIntro}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1446",
                            "scaleY",
                            39750,
                            2250,
                            "swing",
                            "${SoundCopy2}",
                            '0',
                            '1.76'
                        ],
                        [
                            "eid2227",
                            "scaleX",
                            400665,
                            1000,
                            "easeInOutElastic",
                            "${sadBox}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2051",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${PsychAnim3Forward}",
                            '1071px',
                            '1071px'
                        ],
                        [
                            "eid2052",
                            "left",
                            249500,
                            0,
                            "easeInOutElastic",
                            "${PsychAnim3Forward}",
                            '1071px',
                            '970px'
                        ],
                        [
                            "eid2053",
                            "left",
                            253500,
                            0,
                            "easeInOutElastic",
                            "${PsychAnim3Forward}",
                            '970px',
                            '1111px'
                        ],
                        [
                            "eid1573",
                            "left",
                            32000,
                            0,
                            "easeInQuad",
                            "${Ellipse3Copy2}",
                            '1168px',
                            '1168px'
                        ],
                        [
                            "eid1574",
                            "left",
                            78500,
                            0,
                            "linear",
                            "${Ellipse3Copy2}",
                            '1168px',
                            '900px'
                        ],
                        [
                            "eid1429",
                            "left",
                            37500,
                            0,
                            "easeInOutElastic",
                            "${Anim2path1Copy4}",
                            '1106px',
                            '1106px'
                        ],
                        [
                            "eid1430",
                            "left",
                            42457,
                            1543,
                            "easeInOutElastic",
                            "${Anim2path1Copy4}",
                            '224px',
                            '119px'
                        ],
                        [
                            "eid456",
                            "scaleX",
                            0,
                            1500,
                            "easeInQuad",
                            "${outCirc2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2048",
                            "scaleY",
                            253500,
                            0,
                            "easeInOutElastic",
                            "${PsychAnim3Back}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1330",
                            "opacity",
                            32000,
                            0,
                            "swing",
                            "${anim1forward}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1331",
                            "opacity",
                            33000,
                            0,
                            "swing",
                            "${anim1forward}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1332",
                            "opacity",
                            36500,
                            0,
                            "swing",
                            "${anim1forward}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1342",
                            "opacity",
                            53500,
                            0,
                            "swing",
                            "${anim3forward}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1343",
                            "opacity",
                            55500,
                            0,
                            "swing",
                            "${anim3forward}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1344",
                            "opacity",
                            65500,
                            0,
                            "swing",
                            "${anim3forward}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1614",
                            "scaleX",
                            94500,
                            1500,
                            "easeOutQuint",
                            "${Brain2}",
                            '0.88',
                            '0'
                        ],
                        [
                            "eid2043",
                            "scaleX",
                            253500,
                            0,
                            "easeInOutElastic",
                            "${PsychAnim3Back}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1419",
                            "left",
                            37500,
                            0,
                            "easeInOutElastic",
                            "${EllipseCopy3}",
                            '1112px',
                            '1112px'
                        ],
                        [
                            "eid1420",
                            "left",
                            42457,
                            0,
                            "easeInOutElastic",
                            "${EllipseCopy3}",
                            '1112px',
                            '229px'
                        ],
                        [
                            "eid1428",
                            "height",
                            42457,
                            0,
                            "easeInOutElastic",
                            "${Anim2path1Copy4}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid1635",
                            "left",
                            88000,
                            1000,
                            "easeOutQuint",
                            "${Ellipse4}",
                            '180px',
                            '83px'
                        ],
                        [
                            "eid1636",
                            "left",
                            94500,
                            1094,
                            "easeOutQuint",
                            "${Ellipse4}",
                            '83px',
                            '585px'
                        ],
                        [
                            "eid1637",
                            "left",
                            95594,
                            0,
                            "easeOutQuint",
                            "${Ellipse4}",
                            '585px',
                            '585px'
                        ],
                        [
                            "eid1421",
                            "width",
                            42457,
                            0,
                            "easeInOutElastic",
                            "${EllipseCopy3}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid1970",
                            "left",
                            0,
                            0,
                            "easeInOutElastic",
                            "${Anim6Text}",
                            '140px',
                            '140px'
                        ],
                        [
                            "eid1972",
                            "left",
                            120000,
                            0,
                            "easeInOutElastic",
                            "${Anim6Text}",
                            '140px',
                            '1061px'
                        ],
                        [
                            "eid1400",
                            "width",
                            45000,
                            432,
                            "linear",
                            "${Anim2path1Copy}",
                            '12px',
                            '201px'
                        ],
                        [
                            "eid1401",
                            "width",
                            45432,
                            1727,
                            "linear",
                            "${Anim2path1Copy}",
                            '201px',
                            '452px'
                        ],
                        [
                            "eid2228",
                            "background-color",
                            429665,
                            0,
                            "easeInOutElastic",
                            "${HappyCirc}",
                            'rgba(245,228,169,1.00)',
                            'rgba(245,228,169,1.00)'
                        ],
                        [
                            "eid1239",
                            "left",
                            34000,
                            1000,
                            "easeOutElastic",
                            "${exit_Button}",
                            '1380px',
                            '37px'
                        ],
                        [
                            "eid1978",
                            "left",
                            123512,
                            0,
                            "linear",
                            "${exit_Button}",
                            '37px',
                            '-379px'
                        ],
                        [
                            "eid1902",
                            "top",
                            141000,
                            0,
                            "easeOutElastic",
                            "${RoundRectCopy5}",
                            '601px',
                            '601px'
                        ],
                        [
                            "eid1903",
                            "top",
                            142000,
                            1000,
                            "easeOutElastic",
                            "${RoundRectCopy5}",
                            '601px',
                            '281px'
                        ],
                        [
                            "eid1550",
                            "rotateZ",
                            72750,
                            0,
                            "easeInQuad",
                            "${smallpath2Copy10}",
                            '33deg',
                            '33deg'
                        ],
                        [
                            "eid1444",
                            "top",
                            37250,
                            0,
                            "swing",
                            "${SoundCopy2}",
                            '-262px',
                            '-262px'
                        ],
                        [
                            "eid1445",
                            "top",
                            39750,
                            0,
                            "swing",
                            "${SoundCopy2}",
                            '-262px',
                            '341px'
                        ],
                        [
                            "eid1233",
                            "left",
                            23000,
                            0,
                            "easeInBounce",
                            "${inCirc2}",
                            '380px',
                            '380px'
                        ],
                        [
                            "eid1681",
                            "left",
                            31000,
                            0,
                            "easeInBounce",
                            "${inCirc2}",
                            '380px',
                            '-1358px'
                        ],
                        [
                            "eid1349",
                            "scaleX",
                            33000,
                            587,
                            "swing",
                            "${Anim1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2247",
                            "scaleY",
                            429665,
                            1000,
                            "easeInOutElastic",
                            "${HappyCircCopy}",
                            '1',
                            '2.02'
                        ],
                        [
                            "eid2357",
                            "height",
                            244750,
                            582,
                            "easeInOutElastic",
                            "${EllipseCopy4}",
                            '452px',
                            '854px'
                        ],
                        [
                            "eid2358",
                            "height",
                            268318,
                            6182,
                            "easeInOutElastic",
                            "${EllipseCopy4}",
                            '854px',
                            '1097px'
                        ],
                        [
                            "eid2169",
                            "scaleY",
                            322000,
                            1000,
                            "easeInOutElastic",
                            "${MadCircleCopy2}",
                            '1',
                            '3'
                        ],
                        [
                            "eid1813",
                            "left",
                            125000,
                            0,
                            "easeOutElastic",
                            "${dotOneCopy}",
                            '-1337px',
                            '-1337px'
                        ],
                        [
                            "eid1814",
                            "left",
                            139000,
                            0,
                            "easeOutElastic",
                            "${dotOneCopy}",
                            '-1337px',
                            '459px'
                        ],
                        [
                            "eid2456",
                            "left",
                            200000,
                            0,
                            "linear",
                            "${dotOneCopy}",
                            '459px',
                            '-804px'
                        ],
                        [
                            "eid1435",
                            "left",
                            37250,
                            0,
                            "swing",
                            "${Sound}",
                            '246px',
                            '246px'
                        ],
                        [
                            "eid1436",
                            "left",
                            39750,
                            0,
                            "swing",
                            "${Sound}",
                            '246px',
                            '-845px'
                        ],
                        [
                            "eid1530",
                            "width",
                            76750,
                            750,
                            "linear",
                            "${smallpath2Copy6}",
                            '19px',
                            '82px'
                        ],
                        [
                            "eid1484",
                            "top",
                            32000,
                            0,
                            "easeOutExpo",
                            "${anim3circle2}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid1648",
                            "rotateZ",
                            88750,
                            2250,
                            "easeInCubic",
                            "${Pasted4}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid1649",
                            "rotateZ",
                            94500,
                            1500,
                            "easeOutQuint",
                            "${Pasted4}",
                            '360deg',
                            '1440deg'
                        ],
                        [
                            "eid1650",
                            "rotateZ",
                            96000,
                            115,
                            "easeOutQuint",
                            "${Pasted4}",
                            '1440deg',
                            '720deg'
                        ],
                        [
                            "eid2189",
                            "scaleY",
                            394665,
                            1000,
                            "easeInOutElastic",
                            "${SadCircCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2190",
                            "scaleY",
                            395665,
                            667,
                            "easeInOutElastic",
                            "${SadCircCopy}",
                            '0',
                            '2'
                        ],
                        [
                            "eid1594",
                            "top",
                            32000,
                            0,
                            "easeInQuad",
                            "${Ellipse3Copy6}",
                            '251px',
                            '251px'
                        ],
                        [
                            "eid1595",
                            "top",
                            73750,
                            0,
                            "easeInQuad",
                            "${Ellipse3Copy6}",
                            '251px',
                            '288px'
                        ],
                        [
                            "eid1293",
                            "opacity",
                            88750,
                            0,
                            "easeOutQuint",
                            "${Purple}",
                            '1',
                            '1'
                        ],
                        [
                            "eid2418",
                            "scaleY",
                            242432,
                            1568,
                            "linear",
                            "${PsychAnim1Circle2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2118",
                            "scaleY",
                            392665,
                            2000,
                            "easeInOutElastic",
                            "${Girl2}",
                            '1',
                            '1.25'
                        ],
                        [
                            "eid2119",
                            "scaleY",
                            425915,
                            0,
                            "easeInOutElastic",
                            "${Girl2}",
                            '1.25',
                            '1'
                        ],
                        [
                            "eid1840",
                            "top",
                            125000,
                            0,
                            "easeOutQuart",
                            "${CultAnim2Text}",
                            '140px',
                            '140px'
                        ],
                        [
                            "eid1841",
                            "top",
                            129000,
                            500,
                            "easeOutQuart",
                            "${CultAnim2Text}",
                            '140px',
                            '129px'
                        ],
                        [
                            "eid1842",
                            "top",
                            131000,
                            2000,
                            "easeOutElastic",
                            "${CultAnim2Text}",
                            '129px',
                            '125px'
                        ],
                        [
                            "eid1873",
                            "scaleX",
                            131000,
                            7000,
                            "easeOutElastic",
                            "${peace}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1854",
                            "width",
                            132500,
                            3500,
                            "easeOutElastic",
                            "${guy1}",
                            '332px',
                            '197px'
                        ],
                        [
                            "eid1827",
                            "scaleY",
                            141000,
                            1000,
                            "easeOutElastic",
                            "${dotOneCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1764",
                            "top",
                            125000,
                            0,
                            "easeOutElastic",
                            "${CultAnim4Back}",
                            '413px',
                            '413px'
                        ],
                        [
                            "eid1765",
                            "top",
                            145500,
                            0,
                            "linear",
                            "${CultAnim4Back}",
                            '413px',
                            '413px'
                        ],
                        [
                            "eid2276",
                            "scaleY",
                            327000,
                            1000,
                            "easeInOutElastic",
                            "${AngryBox}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1910",
                            "left",
                            125000,
                            0,
                            "easeOutElastic",
                            "${RoundRectCopy6}",
                            '-1074px',
                            '-1074px'
                        ],
                        [
                            "eid1911",
                            "left",
                            142000,
                            1000,
                            "easeOutElastic",
                            "${RoundRectCopy6}",
                            '499px',
                            '440px'
                        ],
                        [
                            "eid2466",
                            "left",
                            200000,
                            0,
                            "linear",
                            "${RoundRectCopy6}",
                            '440px',
                            '-1076px'
                        ],
                        [
                            "eid1258",
                            "left",
                            32000,
                            0,
                            "easeOutQuint",
                            "${Violet}",
                            '-1794px',
                            '-1794px'
                        ],
                        [
                            "eid1982",
                            "left",
                            88750,
                            0,
                            "easeOutQuint",
                            "${Violet}",
                            '280px',
                            '272px'
                        ],
                        [
                            "eid1260",
                            "left",
                            94250,
                            0,
                            "easeOutQuint",
                            "${Violet}",
                            '281px',
                            '1900px'
                        ],
                        [
                            "eid1315",
                            "top",
                            53500,
                            0,
                            "swing",
                            "${anim3back}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid1633",
                            "height",
                            88000,
                            0,
                            "easeOutQuint",
                            "${Ellipse4}",
                            '878px',
                            '878px'
                        ],
                        [
                            "eid1837",
                            "left",
                            125000,
                            0,
                            "easeOutQuart",
                            "${CultAnim2Text}",
                            '1080px',
                            '1080px'
                        ],
                        [
                            "eid1838",
                            "left",
                            129000,
                            500,
                            "easeOutQuart",
                            "${CultAnim2Text}",
                            '1080px',
                            '540px'
                        ],
                        [
                            "eid1839",
                            "left",
                            131000,
                            2000,
                            "easeOutElastic",
                            "${CultAnim2Text}",
                            '540px',
                            '1803px'
                        ],
                        [
                            "eid465",
                            "scaleY",
                            0,
                            1500,
                            "easeInQuad",
                            "${bioButton}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2410",
                            "rotateZ",
                            240000,
                            2000,
                            "linear",
                            "${PsychAnim1Circle3}",
                            '360deg',
                            '0deg'
                        ],
                        [
                            "eid1817",
                            "scaleY",
                            143000,
                            1000,
                            "easeOutElastic",
                            "${dotOneCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1542",
                            "left",
                            69750,
                            0,
                            "easeInQuad",
                            "${smallpath2Copy9}",
                            '1588px',
                            '1588px'
                        ],
                        [
                            "eid1543",
                            "left",
                            74750,
                            1000,
                            "linear",
                            "${smallpath2Copy9}",
                            '515px',
                            '492px'
                        ],
                        [
                            "eid1413",
                            "height",
                            42457,
                            0,
                            "easeInOutElastic",
                            "${Anim2path1Copy2}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid2246",
                            "background-color",
                            429665,
                            0,
                            "easeInOutElastic",
                            "${HappyCircCopy}",
                            'rgba(245,228,169,1.00)',
                            'rgba(245,228,169,1.00)'
                        ],
                        [
                            "eid1512",
                            "rotateZ",
                            80500,
                            0,
                            "linear",
                            "${smallpath2Copy2}",
                            '-60deg',
                            '-60deg'
                        ],
                        [
                            "eid1528",
                            "left",
                            32000,
                            0,
                            "linear",
                            "${smallpath2Copy6}",
                            '2368px',
                            '2368px'
                        ],
                        [
                            "eid1529",
                            "left",
                            76750,
                            750,
                            "linear",
                            "${smallpath2Copy6}",
                            '630px',
                            '628px'
                        ],
                        [
                            "eid1270",
                            "top",
                            32000,
                            0,
                            "easeOutQuint",
                            "${yellow}",
                            '114px',
                            '114px'
                        ],
                        [
                            "eid1743",
                            "top",
                            88750,
                            0,
                            "easeOutQuint",
                            "${yellow}",
                            '125px',
                            '124px'
                        ],
                        [
                            "eid1272",
                            "top",
                            94250,
                            0,
                            "easeOutQuint",
                            "${yellow}",
                            '124px',
                            '113px'
                        ],
                        [
                            "eid1521",
                            "width",
                            78500,
                            1000,
                            "linear",
                            "${smallpath2Copy4}",
                            '19px',
                            '107px'
                        ],
                        [
                            "eid1785",
                            "scaleX",
                            126250,
                            0,
                            "easeOutQuart",
                            "${CultAnim2Back}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1823",
                            "left",
                            125000,
                            0,
                            "easeOutElastic",
                            "${dotOneCopy3}",
                            '-1476px',
                            '-1476px'
                        ],
                        [
                            "eid1824",
                            "left",
                            139000,
                            0,
                            "easeOutElastic",
                            "${dotOneCopy3}",
                            '-1476px',
                            '320px'
                        ],
                        [
                            "eid2452",
                            "left",
                            200000,
                            0,
                            "linear",
                            "${dotOneCopy3}",
                            '320px',
                            '-943px'
                        ],
                        [
                            "eid1256",
                            "scaleX",
                            92953,
                            1150,
                            "easeOutQuint",
                            "${Violet}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1485",
                            "scaleY",
                            55500,
                            1500,
                            "easeOutElastic",
                            "${anim3circle2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid454",
                            "scaleX",
                            0,
                            1500,
                            "easeInQuad",
                            "${inCirc3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2137",
                            "scaleX",
                            427665,
                            2000,
                            "easeInOutElastic",
                            "${girl1}",
                            '1',
                            '1.25'
                        ],
                        [
                            "eid1671",
                            "opacity",
                            32000,
                            1000,
                            "linear",
                            "${IntroTransition}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1408",
                            "height",
                            42457,
                            0,
                            "easeInOutElastic",
                            "${EllipseCopy2}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid2161",
                            "scaleY",
                            321000,
                            1000,
                            "easeInOutElastic",
                            "${MadCircleCopy}",
                            '2',
                            '2.5'
                        ],
                        [
                            "eid1314",
                            "top",
                            32000,
                            0,
                            "linear",
                            "${anim4back}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid2075",
                            "scaleY",
                            323000,
                            2000,
                            "easeInOutElastic",
                            "${MadCircleGraphic}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1234",
                            "left",
                            23000,
                            0,
                            "easeInBounce",
                            "${outCirc1}",
                            '311px',
                            '311px'
                        ],
                        [
                            "eid1676",
                            "left",
                            31000,
                            0,
                            "easeInBounce",
                            "${outCirc1}",
                            '311px',
                            '-1427px'
                        ],
                        [
                            "eid1476",
                            "top",
                            32000,
                            0,
                            "easeOutElastic",
                            "${ybomText}",
                            '654px',
                            '654px'
                        ],
                        [
                            "eid1477",
                            "top",
                            55500,
                            1500,
                            "easeInElastic",
                            "${ybomText}",
                            '654px',
                            '654px'
                        ],
                        [
                            "eid1896",
                            "width",
                            144000,
                            1000,
                            "easeOutElastic",
                            "${RoundRectCopy3}",
                            '41px',
                            '590px'
                        ],
                        [
                            "eid451",
                            "scaleY",
                            0,
                            1500,
                            "easeInQuad",
                            "${outCirc1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1363",
                            "scaleY",
                            33000,
                            646,
                            "easeOutBounce",
                            "${Anim1Circle4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1364",
                            "scaleY",
                            35250,
                            750,
                            "easeOutBounce",
                            "${Anim1Circle4}",
                            '1',
                            '0.33'
                        ],
                        [
                            "eid1654",
                            "left",
                            32000,
                            0,
                            "easeOutQuint",
                            "${Pasted4}",
                            '1569px',
                            '1569px'
                        ],
                        [
                            "eid1655",
                            "left",
                            88000,
                            1000,
                            "easeOutQuint",
                            "${Pasted4}",
                            '109px',
                            '13px'
                        ],
                        [
                            "eid1656",
                            "left",
                            94500,
                            1094,
                            "easeOutQuint",
                            "${Pasted4}",
                            '13px',
                            '-247px'
                        ],
                        [
                            "eid1657",
                            "left",
                            95594,
                            0,
                            "easeOutQuint",
                            "${Pasted4}",
                            '-247px',
                            '-247px'
                        ],
                        [
                            "eid1375",
                            "scaleX",
                            35250,
                            750,
                            "swing",
                            "${Anim1Circle2}",
                            '1',
                            '0.74'
                        ],
                        [
                            "eid2303",
                            "top",
                            240000,
                            0,
                            "linear",
                            "${SadMusic}",
                            '941px',
                            '941px'
                        ],
                        [
                            "eid2304",
                            "top",
                            252250,
                            750,
                            "linear",
                            "${SadMusic}",
                            '941px',
                            '654px'
                        ],
                        [
                            "eid2305",
                            "top",
                            258436,
                            1000,
                            "easeInOutElastic",
                            "${SadMusic}",
                            '654px',
                            '979px'
                        ],
                        [
                            "eid2203",
                            "scaleY",
                            394665,
                            1000,
                            "easeInOutElastic",
                            "${SadCircCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2204",
                            "scaleY",
                            395665,
                            667,
                            "easeInOutElastic",
                            "${SadCircCopy2}",
                            '0',
                            '2'
                        ],
                        [
                            "eid463",
                            "scaleY",
                            0,
                            1500,
                            "easeInQuad",
                            "${inCirc1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2098",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${girl3}",
                            '342px',
                            '342px'
                        ],
                        [
                            "eid2099",
                            "top",
                            274500,
                            3128,
                            "easeInOutElastic",
                            "${girl3}",
                            '342px',
                            '245px'
                        ],
                        [
                            "eid2100",
                            "top",
                            318000,
                            2000,
                            "easeInOutElastic",
                            "${girl3}",
                            '245px',
                            '249px'
                        ],
                        [
                            "eid2101",
                            "top",
                            390835,
                            3830,
                            "easeInOutElastic",
                            "${girl3}",
                            '245px',
                            '252px'
                        ],
                        [
                            "eid1912",
                            "height",
                            142000,
                            1000,
                            "easeOutElastic",
                            "${RoundRectCopy6}",
                            '33px',
                            '246px'
                        ],
                        [
                            "eid2408",
                            "scaleY",
                            240000,
                            2000,
                            "linear",
                            "${PsychAnim1Circle3}",
                            '4',
                            '1'
                        ],
                        [
                            "eid2409",
                            "scaleY",
                            242432,
                            1568,
                            "linear",
                            "${PsychAnim1Circle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2319",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${HappyMusic}",
                            '799px',
                            '799px'
                        ],
                        [
                            "eid2320",
                            "top",
                            247500,
                            750,
                            "easeInOutElastic",
                            "${HappyMusic}",
                            '799px',
                            '653px'
                        ],
                        [
                            "eid2321",
                            "top",
                            251500,
                            750,
                            "linear",
                            "${HappyMusic}",
                            '653px',
                            '854px'
                        ],
                        [
                            "eid448",
                            "rotateZ",
                            0,
                            1500,
                            "easeInQuad",
                            "${inCirc1}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid488",
                            "rotateZ",
                            1704,
                            28296,
                            "linear",
                            "${inCirc1}",
                            '360deg',
                            '-720deg'
                        ],
                        [
                            "eid1864",
                            "scaleY",
                            139000,
                            3000,
                            "easeOutElastic",
                            "${guy2}",
                            '1',
                            '0.2'
                        ],
                        [
                            "eid1928",
                            "rotateZ",
                            126250,
                            500,
                            "linear",
                            "${CultureIntro}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid2078",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${MadCircleGraphic}",
                            '439px',
                            '439px'
                        ],
                        [
                            "eid2079",
                            "left",
                            323000,
                            0,
                            "easeInOutElastic",
                            "${MadCircleGraphic}",
                            '439px',
                            '449px'
                        ],
                        [
                            "eid2080",
                            "left",
                            332127,
                            0,
                            "easeInOutElastic",
                            "${MadCircleGraphic}",
                            '449px',
                            '416px'
                        ],
                        [
                            "eid467",
                            "opacity",
                            0,
                            1500,
                            "easeInQuad",
                            "${inCirc2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1341",
                            "top",
                            64500,
                            0,
                            "linear",
                            "${anim3forward}",
                            '400px',
                            '400px'
                        ],
                        [
                            "eid2213",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${SadCircCopy2}",
                            '-556px',
                            '-556px'
                        ],
                        [
                            "eid2214",
                            "left",
                            394665,
                            1667,
                            "easeInOutElastic",
                            "${SadCircCopy2}",
                            '440px',
                            '441px'
                        ],
                        [
                            "eid2215",
                            "left",
                            396332,
                            666,
                            "easeInOutElastic",
                            "${SadCircCopy2}",
                            '441px',
                            '426px'
                        ],
                        [
                            "eid2216",
                            "left",
                            396998,
                            667,
                            "easeInOutElastic",
                            "${SadCircCopy2}",
                            '426px',
                            '406px'
                        ],
                        [
                            "eid2217",
                            "left",
                            412165,
                            0,
                            "easeInOutElastic",
                            "${SadCircCopy2}",
                            '406px',
                            '687px'
                        ],
                        [
                            "eid1275",
                            "opacity",
                            88750,
                            0,
                            "easeOutQuint",
                            "${yellow}",
                            '1',
                            '1'
                        ],
                        [
                            "eid2387",
                            "left",
                            240000,
                            2000,
                            "linear",
                            "${PsychAnim1Circle5}",
                            '1387px',
                            '594px'
                        ],
                        [
                            "eid2388",
                            "left",
                            242432,
                            1568,
                            "linear",
                            "${PsychAnim1Circle5}",
                            '594px',
                            '-87px'
                        ],
                        [
                            "eid1934",
                            "scaleY",
                            125000,
                            1000,
                            "easeOutQuart",
                            "${CultAnim1Circle3}",
                            '3',
                            '1'
                        ],
                        [
                            "eid1935",
                            "scaleY",
                            126250,
                            500,
                            "linear",
                            "${CultAnim1Circle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1769",
                            "top",
                            131000,
                            0,
                            "easeOutElastic",
                            "${CultAnim3Forward}",
                            '413px',
                            '413px'
                        ],
                        [
                            "eid1770",
                            "top",
                            138500,
                            0,
                            "easeOutElastic",
                            "${CultAnim3Forward}",
                            '413px',
                            '413px'
                        ],
                        [
                            "eid1587",
                            "scaleX",
                            77000,
                            500,
                            "easeInOutBounce",
                            "${Ellipse3Copy4}",
                            '0',
                            '1.2'
                        ],
                        [
                            "eid1519",
                            "left",
                            32000,
                            0,
                            "linear",
                            "${smallpath2Copy4}",
                            '2369px',
                            '2369px'
                        ],
                        [
                            "eid1520",
                            "left",
                            78500,
                            1000,
                            "linear",
                            "${smallpath2Copy4}",
                            '902px',
                            '884px'
                        ],
                        [
                            "eid2087",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${HappyText}",
                            '850px',
                            '850px'
                        ],
                        [
                            "eid2088",
                            "left",
                            432665,
                            1000,
                            "swing",
                            "${HappyText}",
                            '1866px',
                            '615px'
                        ],
                        [
                            "eid2089",
                            "left",
                            435000,
                            0,
                            "easeInOutElastic",
                            "${HappyText}",
                            '615px',
                            '2420px'
                        ],
                        [
                            "eid2152",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${MadCircle}",
                            '645px',
                            '645px'
                        ],
                        [
                            "eid2153",
                            "left",
                            320000,
                            0,
                            "easeInOutElastic",
                            "${MadCircle}",
                            '645px',
                            '639px'
                        ],
                        [
                            "eid2154",
                            "left",
                            332127,
                            0,
                            "easeInOutElastic",
                            "${MadCircle}",
                            '639px',
                            '743px'
                        ],
                        [
                            "eid471",
                            "opacity",
                            0,
                            1500,
                            "easeInQuad",
                            "${cultButton}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1378",
                            "top",
                            45750,
                            1278,
                            "linear",
                            "${Animation2}",
                            '14px',
                            '689px'
                        ],
                        [
                            "eid2083",
                            "left",
                            398915,
                            750,
                            "easeInOutElastic",
                            "${SadHeader}",
                            '1179px',
                            '703px'
                        ],
                        [
                            "eid2084",
                            "left",
                            412165,
                            0,
                            "easeInOutElastic",
                            "${SadHeader}",
                            '703px',
                            '1137px'
                        ],
                        [
                            "eid1816",
                            "top",
                            125000,
                            0,
                            "easeOutElastic",
                            "${dotOneCopy2}",
                            '261px',
                            '261px'
                        ],
                        [
                            "eid2455",
                            "top",
                            200000,
                            0,
                            "linear",
                            "${dotOneCopy2}",
                            '261px',
                            '233px'
                        ],
                        [
                            "eid2251",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${HappyCircCopy}",
                            '-556px',
                            '-556px'
                        ],
                        [
                            "eid2252",
                            "left",
                            429665,
                            1000,
                            "easeInOutElastic",
                            "${HappyCircCopy}",
                            '249px',
                            '244px'
                        ],
                        [
                            "eid2253",
                            "left",
                            430665,
                            1000,
                            "easeInOutElastic",
                            "${HappyCircCopy}",
                            '244px',
                            '231px'
                        ],
                        [
                            "eid2254",
                            "left",
                            435000,
                            0,
                            "easeInOutElastic",
                            "${HappyCircCopy}",
                            '231px',
                            '-476px'
                        ],
                        [
                            "eid1861",
                            "top",
                            125000,
                            0,
                            "easeOutElastic",
                            "${guy2}",
                            '321px',
                            '321px'
                        ],
                        [
                            "eid1862",
                            "top",
                            128000,
                            0,
                            "easeOutElastic",
                            "${guy2}",
                            '321px',
                            '321px'
                        ],
                        [
                            "eid1863",
                            "top",
                            139000,
                            3000,
                            "easeOutElastic",
                            "${guy2}",
                            '321px',
                            '413px'
                        ],
                        [
                            "eid1569",
                            "scaleX",
                            72750,
                            346,
                            "easeInOutElastic",
                            "${Ellipse3Copy}",
                            '0',
                            '1.2'
                        ],
                        [
                            "eid1443",
                            "scaleX",
                            39750,
                            2250,
                            "swing",
                            "${SoundCopy}",
                            '0',
                            '1.76'
                        ],
                        [
                            "eid1532",
                            "left",
                            69750,
                            0,
                            "easeInQuad",
                            "${smallpath2Copy7}",
                            '1621px',
                            '1621px'
                        ],
                        [
                            "eid1533",
                            "left",
                            75750,
                            1000,
                            "linear",
                            "${smallpath2Copy7}",
                            '548px',
                            '544px'
                        ],
                        [
                            "eid2297",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${Anim4TextCopy2}",
                            '42px',
                            '42px'
                        ],
                        [
                            "eid1625",
                            "scaleX",
                            88000,
                            500,
                            "easeInCubic",
                            "${Ellipse4}",
                            '0',
                            '1.2'
                        ],
                        [
                            "eid1626",
                            "scaleX",
                            88500,
                            250,
                            "easeInCubic",
                            "${Ellipse4}",
                            '1.2',
                            '0.88'
                        ],
                        [
                            "eid1627",
                            "scaleX",
                            94500,
                            1094,
                            "easeOutQuint",
                            "${Ellipse4}",
                            '0.88',
                            '2'
                        ],
                        [
                            "eid1324",
                            "left",
                            32000,
                            0,
                            "swing",
                            "${anim2back}",
                            '-48px',
                            '-48px'
                        ],
                        [
                            "eid1325",
                            "left",
                            38000,
                            0,
                            "swing",
                            "${anim2back}",
                            '-48px',
                            '25px'
                        ],
                        [
                            "eid1326",
                            "left",
                            42698,
                            0,
                            "swing",
                            "${anim2back}",
                            '25px',
                            '-46px'
                        ],
                        [
                            "eid1581",
                            "scaleX",
                            75750,
                            250,
                            "easeInOutBounce",
                            "${Ellipse3Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2382",
                            "scaleY",
                            240000,
                            2000,
                            "linear",
                            "${PsychAnim1Circle5}",
                            '4',
                            '1'
                        ],
                        [
                            "eid2383",
                            "scaleY",
                            242432,
                            1568,
                            "linear",
                            "${PsychAnim1Circle5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2162",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${MadCircleCopy}",
                            '881px',
                            '881px'
                        ],
                        [
                            "eid2163",
                            "top",
                            321000,
                            0,
                            "easeInOutElastic",
                            "${MadCircleCopy}",
                            '881px',
                            '270px'
                        ],
                        [
                            "eid2164",
                            "top",
                            332127,
                            0,
                            "easeInOutElastic",
                            "${MadCircleCopy}",
                            '270px',
                            '1080px'
                        ],
                        [
                            "eid1333",
                            "left",
                            38000,
                            0,
                            "swing",
                            "${anim2forward}",
                            '966px',
                            '966px'
                        ],
                        [
                            "eid1334",
                            "left",
                            42698,
                            0,
                            "swing",
                            "${anim2forward}",
                            '966px',
                            '1067px'
                        ],
                        [
                            "eid1367",
                            "scaleX",
                            35250,
                            750,
                            "swing",
                            "${anim1Circle3}",
                            '1',
                            '0.6'
                        ],
                        [
                            "eid1759",
                            "top",
                            125000,
                            0,
                            "easeOutElastic",
                            "${CultAnim4Forward}",
                            '413px',
                            '413px'
                        ],
                        [
                            "eid1760",
                            "top",
                            145500,
                            0,
                            "linear",
                            "${CultAnim4Forward}",
                            '413px',
                            '413px'
                        ],
                        [
                            "eid1664",
                            "scaleX",
                            83398,
                            1602,
                            "easeOutQuint",
                            "${_4outCircle}",
                            '0',
                            '1.5'
                        ],
                        [
                            "eid1713",
                            "scaleX",
                            87945,
                            648,
                            "linear",
                            "${_4outCircle}",
                            '1.5',
                            '0.98'
                        ],
                        [
                            "eid1232",
                            "left",
                            23000,
                            0,
                            "easeInBounce",
                            "${titleNav}",
                            '441px',
                            '441px'
                        ],
                        [
                            "eid1677",
                            "left",
                            31000,
                            0,
                            "easeInBounce",
                            "${titleNav}",
                            '441px',
                            '-1297px'
                        ],
                        [
                            "eid2416",
                            "left",
                            240000,
                            2000,
                            "linear",
                            "${PsychAnim1Circle2}",
                            '1224px',
                            '439px'
                        ],
                        [
                            "eid2417",
                            "left",
                            242432,
                            1568,
                            "linear",
                            "${PsychAnim1Circle2}",
                            '439px',
                            '-242px'
                        ],
                        [
                            "eid1468",
                            "scaleY",
                            66000,
                            3000,
                            "easeInQuad",
                            "${Anim3}",
                            '1',
                            '4'
                        ],
                        [
                            "eid1662",
                            "scaleY",
                            83398,
                            1602,
                            "easeOutQuint",
                            "${_4outCircle}",
                            '0',
                            '1.5'
                        ],
                        [
                            "eid1714",
                            "scaleY",
                            85000,
                            0,
                            "linear",
                            "${_4outCircle}",
                            '1.5',
                            '1.5'
                        ],
                        [
                            "eid1725",
                            "scaleY",
                            87945,
                            648,
                            "linear",
                            "${_4outCircle}",
                            '1.5',
                            '0.98'
                        ],
                        [
                            "eid1279",
                            "top",
                            32000,
                            0,
                            "easeOutQuint",
                            "${orange}",
                            '37px',
                            '37px'
                        ],
                        [
                            "eid1741",
                            "top",
                            88750,
                            0,
                            "easeOutQuint",
                            "${orange}",
                            '24px',
                            '50px'
                        ],
                        [
                            "eid1281",
                            "top",
                            94250,
                            0,
                            "easeOutQuint",
                            "${orange}",
                            '50px',
                            '36px'
                        ],
                        [
                            "eid1672",
                            "left",
                            32000,
                            1000,
                            "linear",
                            "${IntroTransition}",
                            '-414px',
                            '-307px'
                        ],
                        [
                            "eid1673",
                            "left",
                            33000,
                            1000,
                            "easeInBounce",
                            "${IntroTransition}",
                            '-307px',
                            '-554px'
                        ],
                        [
                            "eid1948",
                            "left",
                            125000,
                            1000,
                            "easeOutQuart",
                            "${CultAnim1Circle2}",
                            '2194px',
                            '287px'
                        ],
                        [
                            "eid1949",
                            "left",
                            126821,
                            0,
                            "linear",
                            "${CultAnim1Circle2}",
                            '287px',
                            '820px'
                        ],
                        [
                            "eid2092",
                            "scaleY",
                            432665,
                            1000,
                            "easeInOutElastic",
                            "${HappyCircleGraphic}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2176",
                            "scaleY",
                            394665,
                            600,
                            "easeInOutElastic",
                            "${SadCirc}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2177",
                            "scaleY",
                            395265,
                            400,
                            "easeInOutElastic",
                            "${SadCirc}",
                            '0',
                            '2'
                        ],
                        [
                            "eid2399",
                            "scaleY",
                            241500,
                            500,
                            "easeOutQuad",
                            "${PsychAnim1Circle6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2173",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${SadCirc}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid2174",
                            "top",
                            394665,
                            0,
                            "easeInOutElastic",
                            "${SadCirc}",
                            '24px',
                            '273px'
                        ],
                        [
                            "eid2175",
                            "top",
                            412165,
                            0,
                            "easeInOutElastic",
                            "${SadCirc}",
                            '273px',
                            '1060px'
                        ],
                        [
                            "eid2006",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${BlueButton}",
                            '-783px',
                            '-783px'
                        ],
                        [
                            "eid2007",
                            "left",
                            277628,
                            2372,
                            "easeInOutElastic",
                            "${BlueButton}",
                            '-167px',
                            '484px'
                        ],
                        [
                            "eid2008",
                            "left",
                            315000,
                            3000,
                            "easeInOutElastic",
                            "${BlueButton}",
                            '484px',
                            '-269px'
                        ],
                        [
                            "eid2009",
                            "left",
                            390835,
                            0,
                            "easeInOutElastic",
                            "${BlueButton}",
                            '-269px',
                            '484px'
                        ],
                        [
                            "eid2010",
                            "left",
                            425915,
                            1750,
                            "easeInOutElastic",
                            "${BlueButton}",
                            '484px',
                            '1137px'
                        ],
                        [
                            "eid1557",
                            "left",
                            69750,
                            0,
                            "easeInQuad",
                            "${bigpath}",
                            '1132px',
                            '1132px'
                        ],
                        [
                            "eid1558",
                            "left",
                            70000,
                            0,
                            "easeInQuad",
                            "${bigpath}",
                            '1132px',
                            '0px'
                        ],
                        [
                            "eid2124",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${girl1}",
                            '337px',
                            '337px'
                        ],
                        [
                            "eid2125",
                            "top",
                            274500,
                            3128,
                            "easeInOutElastic",
                            "${girl1}",
                            '337px',
                            '252px'
                        ],
                        [
                            "eid2126",
                            "top",
                            315000,
                            3000,
                            "easeInOutElastic",
                            "${girl1}",
                            '252px',
                            '249px'
                        ],
                        [
                            "eid2127",
                            "top",
                            390835,
                            0,
                            "easeInOutElastic",
                            "${girl1}",
                            '249px',
                            '252px'
                        ],
                        [
                            "eid2128",
                            "top",
                            425915,
                            0,
                            "easeInOutElastic",
                            "${girl1}",
                            '252px',
                            '252px'
                        ],
                        [
                            "eid2129",
                            "top",
                            427665,
                            2000,
                            "easeInOutElastic",
                            "${girl1}",
                            '252px',
                            '244px'
                        ],
                        [
                            "eid1257",
                            "opacity",
                            88750,
                            0,
                            "easeOutQuint",
                            "${Violet}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1284",
                            "opacity",
                            88750,
                            0,
                            "easeOutQuint",
                            "${orange}",
                            '1',
                            '1'
                        ],
                        [
                            "eid2419",
                            "top",
                            240000,
                            2000,
                            "linear",
                            "${PsychAnim1Circle2}",
                            '74px',
                            '163px'
                        ],
                        [
                            "eid2420",
                            "top",
                            242432,
                            1568,
                            "linear",
                            "${PsychAnim1Circle2}",
                            '163px',
                            '-244px'
                        ],
                        [
                            "eid1267",
                            "left",
                            32000,
                            0,
                            "easeOutQuint",
                            "${green}",
                            '-2052px',
                            '-2052px'
                        ],
                        [
                            "eid1268",
                            "left",
                            88750,
                            0,
                            "easeOutQuint",
                            "${green}",
                            '-2052px',
                            '22px'
                        ],
                        [
                            "eid1269",
                            "left",
                            94250,
                            0,
                            "easeOutQuint",
                            "${green}",
                            '22px',
                            '1642px'
                        ],
                        [
                            "eid2032",
                            "scaleX",
                            266000,
                            0,
                            "easeInOutElastic",
                            "${PsychAnim4Back}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1881",
                            "height",
                            143000,
                            1000,
                            "easeOutElastic",
                            "${RoundRectCopy}",
                            '33px',
                            '435px'
                        ],
                        [
                            "eid1524",
                            "left",
                            32000,
                            0,
                            "linear",
                            "${smallpath2Copy5}",
                            '2366px',
                            '2366px'
                        ],
                        [
                            "eid1525",
                            "left",
                            77500,
                            1000,
                            "linear",
                            "${smallpath2Copy5}",
                            '687px',
                            '794px'
                        ],
                        [
                            "eid2028",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${PsychAnim5Back}",
                            '370px',
                            '370px'
                        ],
                        [
                            "eid2346",
                            "left",
                            240000,
                            0,
                            "easeOutQuad",
                            "${guy2Copy}",
                            '1291px',
                            '1291px'
                        ],
                        [
                            "eid2347",
                            "left",
                            244000,
                            750,
                            "easeInOutElastic",
                            "${guy2Copy}",
                            '1291px',
                            '142px'
                        ],
                        [
                            "eid2348",
                            "left",
                            244750,
                            582,
                            "easeInOutElastic",
                            "${guy2Copy}",
                            '142px',
                            '135px'
                        ],
                        [
                            "eid2349",
                            "left",
                            249085,
                            0,
                            "easeInOutElastic",
                            "${guy2Copy}",
                            '135px',
                            '-1047px'
                        ],
                        [
                            "eid1297",
                            "left",
                            32000,
                            0,
                            "linear",
                            "${Anim4Text}",
                            '1487px',
                            '1487px'
                        ],
                        [
                            "eid1298",
                            "left",
                            69000,
                            1000,
                            "easeInOutElastic",
                            "${Anim4Text}",
                            '1178px',
                            '301px'
                        ],
                        [
                            "eid1299",
                            "left",
                            80250,
                            750,
                            "easeInOutElastic",
                            "${Anim4Text}",
                            '301px',
                            '-868px'
                        ],
                        [
                            "eid2026",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${PsychAnim6Back}",
                            '-66px',
                            '-66px'
                        ],
                        [
                            "eid2027",
                            "left",
                            314000,
                            0,
                            "easeInOutElastic",
                            "${PsychAnim6Back}",
                            '-66px',
                            '22px'
                        ],
                        [
                            "eid2335",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${yellow_bar}",
                            '337px',
                            '337px'
                        ],
                        [
                            "eid2336",
                            "top",
                            245332,
                            0,
                            "easeInOutElastic",
                            "${yellow_bar}",
                            '337px',
                            '31px'
                        ],
                        [
                            "eid2372",
                            "opacity",
                            242432,
                            1568,
                            "easeOutQuad",
                            "${PsychAnim1Intro}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1411",
                            "width",
                            42457,
                            0,
                            "easeInOutElastic",
                            "${EllipseCopy2}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid1380",
                            "left",
                            45750,
                            1278,
                            "linear",
                            "${Animation2}",
                            '1055px',
                            '1312px'
                        ],
                        [
                            "eid1381",
                            "left",
                            47028,
                            2722,
                            "linear",
                            "${Animation2}",
                            '1312px',
                            '151px'
                        ],
                        [
                            "eid1382",
                            "left",
                            66000,
                            3000,
                            "easeOutElastic",
                            "${Animation2}",
                            '151px',
                            '-904px'
                        ],
                        [
                            "eid2379",
                            "scaleX",
                            242432,
                            1568,
                            "linear",
                            "${PsychAnim1Circle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1347",
                            "top",
                            36000,
                            500,
                            "swing",
                            "${Anim1}",
                            '0px',
                            '-12px'
                        ],
                        [
                            "eid2277",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${AngryBox}",
                            '-385px',
                            '-385px'
                        ],
                        [
                            "eid2278",
                            "left",
                            327000,
                            1000,
                            "easeInOutElastic",
                            "${AngryBox}",
                            '586px',
                            '120px'
                        ],
                        [
                            "eid2279",
                            "left",
                            332127,
                            0,
                            "easeInOutElastic",
                            "${AngryBox}",
                            '120px',
                            '327px'
                        ],
                        [
                            "eid1311",
                            "left",
                            32000,
                            0,
                            "linear",
                            "${anim4back}",
                            '-111px',
                            '-111px'
                        ],
                        [
                            "eid1312",
                            "left",
                            89000,
                            0,
                            "linear",
                            "${anim4back}",
                            '-111px',
                            '27px'
                        ],
                        [
                            "eid1313",
                            "left",
                            94344,
                            0,
                            "linear",
                            "${anim4back}",
                            '27px',
                            '-358px'
                        ],
                        [
                            "eid2184",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${SadCircCopy}",
                            '24px',
                            '24px'
                        ],
                        [
                            "eid2185",
                            "top",
                            394665,
                            0,
                            "easeInOutElastic",
                            "${SadCircCopy}",
                            '24px',
                            '273px'
                        ],
                        [
                            "eid2186",
                            "top",
                            396332,
                            667,
                            "easeInOutElastic",
                            "${SadCircCopy}",
                            '273px',
                            '257px'
                        ],
                        [
                            "eid2187",
                            "top",
                            412165,
                            0,
                            "easeInOutElastic",
                            "${SadCircCopy}",
                            '257px',
                            '1044px'
                        ],
                        [
                            "eid2385",
                            "scaleX",
                            240000,
                            2000,
                            "linear",
                            "${PsychAnim1Circle5}",
                            '4',
                            '1'
                        ],
                        [
                            "eid2386",
                            "scaleX",
                            242432,
                            1568,
                            "linear",
                            "${PsychAnim1Circle5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1944",
                            "rotateZ",
                            125000,
                            1000,
                            "easeOutQuart",
                            "${CultAnim1Circle2}",
                            '0deg',
                            '720deg'
                        ],
                        [
                            "eid1945",
                            "rotateZ",
                            126250,
                            500,
                            "linear",
                            "${CultAnim1Circle2}",
                            '720deg',
                            '360deg'
                        ],
                        [
                            "eid1534",
                            "width",
                            75750,
                            1000,
                            "linear",
                            "${smallpath2Copy7}",
                            '19px',
                            '107px'
                        ],
                        [
                            "eid1893",
                            "top",
                            125000,
                            0,
                            "easeOutElastic",
                            "${RoundRectCopy3}",
                            '312px',
                            '312px'
                        ],
                        [
                            "eid2107",
                            "scaleY",
                            318000,
                            2000,
                            "easeInOutElastic",
                            "${girl3}",
                            '1',
                            '1.25'
                        ],
                        [
                            "eid2108",
                            "scaleY",
                            390835,
                            0,
                            "easeInOutElastic",
                            "${girl3}",
                            '1.25',
                            '1'
                        ],
                        [
                            "eid2183",
                            "background-color",
                            394665,
                            0,
                            "easeInOutElastic",
                            "${SadCirc}",
                            'rgba(92,180,229,1.00)',
                            'rgba(92,180,229,1.00)'
                        ],
                        [
                            "eid2004",
                            "scaleY",
                            392665,
                            2000,
                            "easeInOutElastic",
                            "${BlueButton}",
                            '1',
                            '1.25'
                        ],
                        [
                            "eid2005",
                            "scaleY",
                            425915,
                            0,
                            "easeInOutElastic",
                            "${BlueButton}",
                            '1.25',
                            '1'
                        ],
                        [
                            "eid1503",
                            "top",
                            81250,
                            1000,
                            "linear",
                            "${smallpath2Copy}",
                            '543px',
                            '507px'
                        ],
                        [
                            "eid2201",
                            "height",
                            396332,
                            666,
                            "easeInOutElastic",
                            "${SadCircCopy2}",
                            '156px',
                            '185px'
                        ],
                        [
                            "eid2202",
                            "height",
                            396998,
                            667,
                            "easeInOutElastic",
                            "${SadCircCopy2}",
                            '185px',
                            '225px'
                        ],
                        [
                            "eid1513",
                            "top",
                            79500,
                            1000,
                            "linear",
                            "${smallpath2Copy3}",
                            '271px',
                            '384px'
                        ],
                        [
                            "eid442",
                            "rotateZ",
                            0,
                            1500,
                            "easeInQuad",
                            "${outCirc1}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid485",
                            "rotateZ",
                            1704,
                            28296,
                            "linear",
                            "${outCirc1}",
                            '360deg',
                            '-1080deg'
                        ],
                        [
                            "eid1556",
                            "top",
                            72380,
                            0,
                            "easeInOutElastic",
                            "${bigpath}",
                            '338px',
                            '338px'
                        ],
                        [
                            "eid1575",
                            "scaleX",
                            78500,
                            500,
                            "linear",
                            "${Ellipse3Copy2}",
                            '0',
                            '2.93'
                        ],
                        [
                            "eid1907",
                            "height",
                            142000,
                            1000,
                            "easeOutElastic",
                            "${RoundRectCopy5}",
                            '33px',
                            '246px'
                        ],
                        [
                            "eid2488",
                            "left",
                            0,
                            0,
                            "easeOutBounce",
                            "${PsychAnim1Circle3}",
                            '1694px',
                            '1694px'
                        ],
                        [
                            "eid2413",
                            "left",
                            240000,
                            2000,
                            "linear",
                            "${PsychAnim1Circle3}",
                            '1199px',
                            '406px'
                        ],
                        [
                            "eid2414",
                            "left",
                            242432,
                            1568,
                            "linear",
                            "${PsychAnim1Circle3}",
                            '406px',
                            '-275px'
                        ],
                        [
                            "eid2059",
                            "top",
                            242432,
                            0,
                            "easeOutElastic",
                            "${PsychAnim2Forward}",
                            '384px',
                            '384px'
                        ],
                        [
                            "eid1488",
                            "scaleX",
                            55500,
                            1500,
                            "easeOutElastic",
                            "${anim3circle2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1904",
                            "left",
                            125000,
                            0,
                            "easeOutElastic",
                            "${RoundRectCopy5}",
                            '-390px',
                            '-390px'
                        ],
                        [
                            "eid1905",
                            "left",
                            141000,
                            0,
                            "easeOutElastic",
                            "${RoundRectCopy5}",
                            '-390px',
                            '499px'
                        ],
                        [
                            "eid1906",
                            "left",
                            142000,
                            1000,
                            "easeOutElastic",
                            "${RoundRectCopy5}",
                            '499px',
                            '711px'
                        ],
                        [
                            "eid2459",
                            "left",
                            200000,
                            0,
                            "linear",
                            "${RoundRectCopy5}",
                            '711px',
                            '-805px'
                        ],
                        [
                            "eid1818",
                            "left",
                            125000,
                            0,
                            "easeOutElastic",
                            "${dotOneCopy2}",
                            '-1602px',
                            '-1602px'
                        ],
                        [
                            "eid1819",
                            "left",
                            139000,
                            0,
                            "easeOutElastic",
                            "${dotOneCopy2}",
                            '-1602px',
                            '194px'
                        ],
                        [
                            "eid2454",
                            "left",
                            200000,
                            0,
                            "linear",
                            "${dotOneCopy2}",
                            '194px',
                            '-1069px'
                        ],
                        [
                            "eid1345",
                            "left",
                            55500,
                            0,
                            "swing",
                            "${anim3forward}",
                            '971px',
                            '971px'
                        ],
                        [
                            "eid1346",
                            "left",
                            65500,
                            0,
                            "swing",
                            "${anim3forward}",
                            '971px',
                            '1135px'
                        ],
                        [
                            "eid1877",
                            "width",
                            139000,
                            3000,
                            "easeOutElastic",
                            "${peace}",
                            '435px',
                            '123px'
                        ],
                        [
                            "eid2165",
                            "scaleX",
                            322000,
                            1000,
                            "easeInOutElastic",
                            "${MadCircleCopy2}",
                            '1',
                            '3'
                        ],
                        [
                            "eid472",
                            "opacity",
                            0,
                            1500,
                            "easeInQuad",
                            "${inCirc1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1766",
                            "left",
                            125000,
                            0,
                            "easeOutElastic",
                            "${CultAnim3Forward}",
                            '1078px',
                            '1078px'
                        ],
                        [
                            "eid1767",
                            "left",
                            131000,
                            0,
                            "easeOutElastic",
                            "${CultAnim3Forward}",
                            '1078px',
                            '942px'
                        ],
                        [
                            "eid1768",
                            "left",
                            138500,
                            0,
                            "easeOutElastic",
                            "${CultAnim3Forward}",
                            '942px',
                            '1138px'
                        ],
                        [
                            "eid2224",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${sadBox}",
                            '-283px',
                            '-283px'
                        ],
                        [
                            "eid2225",
                            "left",
                            400665,
                            1000,
                            "easeInOutElastic",
                            "${sadBox}",
                            '348px',
                            '35px'
                        ],
                        [
                            "eid2226",
                            "left",
                            412165,
                            0,
                            "easeInOutElastic",
                            "${sadBox}",
                            '35px',
                            '316px'
                        ],
                        [
                            "eid1327",
                            "left",
                            33000,
                            0,
                            "swing",
                            "${anim1forward}",
                            '978px',
                            '978px'
                        ],
                        [
                            "eid1328",
                            "left",
                            36500,
                            0,
                            "swing",
                            "${anim1forward}",
                            '978px',
                            '1055px'
                        ],
                        [
                            "eid1329",
                            "left",
                            65500,
                            0,
                            "easeInOutSine",
                            "${anim1forward}",
                            '1055px',
                            '804px'
                        ],
                        [
                            "eid1939",
                            "left",
                            125000,
                            1000,
                            "easeOutQuart",
                            "${CultAnim1Circle3}",
                            '-394px',
                            '230px'
                        ],
                        [
                            "eid1940",
                            "left",
                            126821,
                            0,
                            "linear",
                            "${CultAnim1Circle3}",
                            '230px',
                            '890px'
                        ],
                        [
                            "eid1447",
                            "left",
                            37250,
                            0,
                            "swing",
                            "${SoundCopy2}",
                            '762px',
                            '762px'
                        ],
                        [
                            "eid1448",
                            "left",
                            39750,
                            0,
                            "swing",
                            "${SoundCopy2}",
                            '762px',
                            '-329px'
                        ],
                        [
                            "eid1432",
                            "top",
                            37250,
                            0,
                            "swing",
                            "${Sound}",
                            '-258px',
                            '-258px'
                        ],
                        [
                            "eid1433",
                            "top",
                            39750,
                            0,
                            "swing",
                            "${Sound}",
                            '-258px',
                            '345px'
                        ],
                        [
                            "eid1755",
                            "top",
                            125000,
                            0,
                            "easeOutCubic",
                            "${CultAnim5Back}",
                            '413px',
                            '413px'
                        ],
                        [
                            "eid2322",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${Anim2Circle}",
                            '941px',
                            '941px'
                        ],
                        [
                            "eid2323",
                            "top",
                            246750,
                            750,
                            "easeInOutElastic",
                            "${Anim2Circle}",
                            '941px',
                            '524px'
                        ],
                        [
                            "eid2324",
                            "top",
                            266000,
                            8500,
                            "easeInOutElastic",
                            "${Anim2Circle}",
                            '524px',
                            '924px'
                        ],
                        [
                            "eid1462",
                            "left",
                            38000,
                            750,
                            "easeOutCubic",
                            "${tableGraphic}",
                            '109px',
                            '-1056px'
                        ],
                        [
                            "eid1354",
                            "top",
                            36000,
                            500,
                            "swing",
                            "${Anim1IntroText}",
                            '297px',
                            '298px'
                        ],
                        [
                            "eid2081",
                            "top",
                            398915,
                            0,
                            "easeInOutElastic",
                            "${SadHeader}",
                            '63px',
                            '63px'
                        ],
                        [
                            "eid2082",
                            "top",
                            412165,
                            0,
                            "easeInOutElastic",
                            "${SadHeader}",
                            '63px',
                            '-435px'
                        ],
                        [
                            "eid1981",
                            "left",
                            125000,
                            500,
                            "easeOutBounce",
                            "${CultexitButton}",
                            '1133px',
                            '37px'
                        ],
                        [
                            "eid2477",
                            "left",
                            200000,
                            0,
                            "linear",
                            "${CultexitButton}",
                            '1165px',
                            '6843px'
                        ],
                        [
                            "eid1559",
                            "width",
                            70000,
                            2000,
                            "linear",
                            "${bigpath}",
                            '69px',
                            '337px'
                        ],
                        [
                            "eid1621",
                            "top",
                            88000,
                            593,
                            "easeInOutElastic",
                            "${Ellipse4}",
                            '696px',
                            '197px'
                        ],
                        [
                            "eid1722",
                            "top",
                            88593,
                            407,
                            "easeOutQuint",
                            "${Ellipse4}",
                            '197px',
                            '66px'
                        ],
                        [
                            "eid1622",
                            "top",
                            94500,
                            1094,
                            "easeOutQuint",
                            "${Ellipse4}",
                            '66px',
                            '-1403px'
                        ],
                        [
                            "eid2391",
                            "scaleY",
                            240000,
                            2000,
                            "linear",
                            "${PsychAnim1Circle4}",
                            '4',
                            '1'
                        ],
                        [
                            "eid2392",
                            "scaleY",
                            242432,
                            1568,
                            "linear",
                            "${PsychAnim1Circle4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1261",
                            "top",
                            32000,
                            0,
                            "easeOutQuint",
                            "${green}",
                            '191px',
                            '191px'
                        ],
                        [
                            "eid1744",
                            "top",
                            88750,
                            0,
                            "easeOutQuint",
                            "${green}",
                            '190px',
                            '200px'
                        ],
                        [
                            "eid1263",
                            "top",
                            94250,
                            0,
                            "easeOutQuint",
                            "${green}",
                            '200px',
                            '190px'
                        ],
                        [
                            "eid470",
                            "opacity",
                            0,
                            1500,
                            "easeInQuad",
                            "${psychButton}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2480",
                            "top",
                            185000,
                            0,
                            "linear",
                            "${worldCopy}",
                            '264px',
                            '264px'
                        ],
                        [
                            "eid2422",
                            "top",
                            200000,
                            0,
                            "linear",
                            "${worldCopy}",
                            '264px',
                            '124px'
                        ],
                        [
                            "eid2280",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${Anim6TextCopy}",
                            '67px',
                            '67px'
                        ],
                        [
                            "eid2281",
                            "top",
                            274500,
                            0,
                            "easeInOutElastic",
                            "${Anim6TextCopy}",
                            '67px',
                            '67px'
                        ],
                        [
                            "eid2282",
                            "top",
                            315000,
                            3000,
                            "easeInOutElastic",
                            "${Anim6TextCopy}",
                            '67px',
                            '63px'
                        ],
                        [
                            "eid1933",
                            "top",
                            125000,
                            1000,
                            "easeOutQuart",
                            "${CultAnim1Circle3}",
                            '267px',
                            '474px'
                        ],
                        [
                            "eid1541",
                            "rotateZ",
                            74750,
                            0,
                            "easeInQuad",
                            "${smallpath2Copy9}",
                            '66deg',
                            '66deg'
                        ],
                        [
                            "eid469",
                            "opacity",
                            0,
                            1500,
                            "easeInQuad",
                            "${outCirc2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1255",
                            "scaleY",
                            92953,
                            1150,
                            "easeOutQuint",
                            "${Violet}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1874",
                            "left",
                            125000,
                            0,
                            "easeOutElastic",
                            "${peace}",
                            '-762px',
                            '-762px'
                        ],
                        [
                            "eid1875",
                            "left",
                            131000,
                            7000,
                            "easeOutElastic",
                            "${peace}",
                            '177px',
                            '216px'
                        ],
                        [
                            "eid1876",
                            "left",
                            139000,
                            3000,
                            "easeOutElastic",
                            "${peace}",
                            '216px',
                            '458px'
                        ],
                        [
                            "eid2464",
                            "left",
                            200000,
                            0,
                            "linear",
                            "${peace}",
                            '458px',
                            '-1058px'
                        ],
                        [
                            "eid2294",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${Anim4TextCopy2}",
                            '1190px',
                            '1190px'
                        ],
                        [
                            "eid2295",
                            "left",
                            257250,
                            1186,
                            "easeInOutElastic",
                            "${Anim4TextCopy2}",
                            '1190px',
                            '426px'
                        ],
                        [
                            "eid2296",
                            "left",
                            266000,
                            3000,
                            "easeInOutElastic",
                            "${Anim4TextCopy2}",
                            '426px',
                            '1590px'
                        ],
                        [
                            "eid1282",
                            "scaleY",
                            89500,
                            1138,
                            "easeOutQuint",
                            "${orange}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1523",
                            "height",
                            77500,
                            1000,
                            "linear",
                            "${smallpath2Copy5}",
                            '17px',
                            '233px'
                        ],
                        [
                            "eid1264",
                            "scaleY",
                            91910,
                            1042,
                            "easeOutQuint",
                            "${green}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1274",
                            "scaleX",
                            90638,
                            1273,
                            "easeOutQuint",
                            "${yellow}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1585",
                            "left",
                            32000,
                            0,
                            "easeInQuad",
                            "${Ellipse3Copy4}",
                            '1251px',
                            '1251px'
                        ],
                        [
                            "eid1586",
                            "left",
                            77000,
                            0,
                            "easeInOutBounce",
                            "${Ellipse3Copy4}",
                            '1251px',
                            '621px'
                        ],
                        [
                            "eid2200",
                            "background-color",
                            394665,
                            0,
                            "easeInOutElastic",
                            "${SadCircCopy2}",
                            'rgba(92,180,229,1.00)',
                            'rgba(92,180,229,1.00)'
                        ],
                        [
                            "eid2376",
                            "left",
                            240000,
                            2000,
                            "linear",
                            "${PsychAnim1Circle}",
                            '1240px',
                            '455px'
                        ],
                        [
                            "eid2377",
                            "left",
                            242432,
                            1568,
                            "linear",
                            "${PsychAnim1Circle}",
                            '455px',
                            '-226px'
                        ],
                        [
                            "eid1937",
                            "scaleX",
                            125000,
                            1000,
                            "easeOutQuart",
                            "${CultAnim1Circle3}",
                            '3',
                            '1'
                        ],
                        [
                            "eid1938",
                            "scaleX",
                            126250,
                            500,
                            "linear",
                            "${CultAnim1Circle3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1665",
                            "left",
                            32000,
                            0,
                            "linear",
                            "${_4outCircle}",
                            '1324px',
                            '1324px'
                        ],
                        [
                            "eid1666",
                            "left",
                            82339,
                            1059,
                            "easeOutQuint",
                            "${_4outCircle}",
                            '1474px',
                            '259px'
                        ],
                        [
                            "eid1715",
                            "left",
                            87945,
                            648,
                            "linear",
                            "${_4outCircle}",
                            '259px',
                            '-91px'
                        ],
                        [
                            "eid2143",
                            "scaleX",
                            397665,
                            1000,
                            "easeInOutElastic",
                            "${SadGraphic}",
                            '0.09',
                            '1'
                        ],
                        [
                            "eid1422",
                            "top",
                            44000,
                            1000,
                            "linear",
                            "${Anim2path1Copy3}",
                            '168px',
                            '-90px'
                        ],
                        [
                            "eid1963",
                            "top",
                            0,
                            0,
                            "linear",
                            "${CultAnim1Forward}",
                            '456px',
                            '456px'
                        ],
                        [
                            "eid1783",
                            "top",
                            125000,
                            0,
                            "linear",
                            "${CultAnim1Forward}",
                            '456px',
                            '413px'
                        ],
                        [
                            "eid1784",
                            "top",
                            126136,
                            0,
                            "linear",
                            "${CultAnim1Forward}",
                            '413px',
                            '413px'
                        ],
                        [
                            "eid466",
                            "opacity",
                            0,
                            1500,
                            "easeInQuad",
                            "${outCirc1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2220",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${sadBox}",
                            '707px',
                            '707px'
                        ],
                        [
                            "eid2221",
                            "top",
                            400665,
                            1000,
                            "easeInOutElastic",
                            "${sadBox}",
                            '264px',
                            '528px'
                        ],
                        [
                            "eid2222",
                            "top",
                            412165,
                            0,
                            "easeInOutElastic",
                            "${sadBox}",
                            '528px',
                            '1315px'
                        ],
                        [
                            "eid2077",
                            "scaleX",
                            323000,
                            2000,
                            "easeInOutElastic",
                            "${MadCircleGraphic}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2249",
                            "height",
                            430665,
                            1000,
                            "easeInOutElastic",
                            "${HappyCircCopy}",
                            '156px',
                            '194px'
                        ],
                        [
                            "eid1350",
                            "opacity",
                            32000,
                            0,
                            "linear",
                            "${Anim1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1351",
                            "opacity",
                            33000,
                            0,
                            "linear",
                            "${Anim1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1492",
                            "scaleY",
                            81339,
                            870,
                            "easeOutCubic",
                            "${anim4}",
                            '1',
                            '1.45'
                        ],
                        [
                            "eid1493",
                            "scaleY",
                            82209,
                            130,
                            "easeOutCubic",
                            "${anim4}",
                            '1.45',
                            '1.12'
                        ],
                        [
                            "eid446",
                            "rotateZ",
                            0,
                            1500,
                            "easeInQuad",
                            "${psychButton}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid483",
                            "rotateZ",
                            1704,
                            28296,
                            "linear",
                            "${psychButton}",
                            '360deg',
                            '720deg'
                        ],
                        [
                            "eid1458",
                            "left",
                            41000,
                            1000,
                            "easeInOutElastic",
                            "${Anim2Text}",
                            '388px',
                            '-791px'
                        ],
                        [
                            "eid1384",
                            "left",
                            32000,
                            0,
                            "linear",
                            "${Ellipse}",
                            '1109px',
                            '1109px'
                        ],
                        [
                            "eid1385",
                            "left",
                            47158,
                            2592,
                            "linear",
                            "${Ellipse}",
                            '480px',
                            '1461px'
                        ],
                        [
                            "eid1386",
                            "left",
                            49750,
                            0,
                            "easeOutQuart",
                            "${Ellipse}",
                            '1461px',
                            '1461px'
                        ],
                        [
                            "eid1502",
                            "width",
                            81339,
                            1000,
                            "linear",
                            "${smallpath2}",
                            '19px',
                            '553px'
                        ],
                        [
                            "eid2496",
                            "left",
                            0,
                            0,
                            "easeInOutElastic",
                            "${PsychexitButton}",
                            '1050px',
                            '1050px'
                        ],
                        [
                            "eid2495",
                            "left",
                            240000,
                            1000,
                            "easeInOutElastic",
                            "${PsychexitButton}",
                            '1050px',
                            '32px'
                        ],
                        [
                            "eid2498",
                            "left",
                            436000,
                            0,
                            "easeInOutElastic",
                            "${PsychexitButton}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid2394",
                            "scaleX",
                            240000,
                            2000,
                            "linear",
                            "${PsychAnim1Circle4}",
                            '4',
                            '1'
                        ],
                        [
                            "eid2395",
                            "scaleX",
                            242432,
                            1568,
                            "linear",
                            "${PsychAnim1Circle4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1553",
                            "left",
                            69750,
                            0,
                            "easeInQuad",
                            "${smallpath}",
                            '1406px',
                            '1406px'
                        ],
                        [
                            "eid1554",
                            "left",
                            72000,
                            0,
                            "easeInQuad",
                            "${smallpath}",
                            '1406px',
                            '332px'
                        ],
                        [
                            "eid2259",
                            "scaleX",
                            429665,
                            1000,
                            "easeInOutElastic",
                            "${HappyCircCopy2}",
                            '1',
                            '2.02'
                        ],
                        [
                            "eid2093",
                            "rotateZ",
                            433165,
                            1000,
                            "easeInOutElastic",
                            "${HappyCircleGraphic}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid1599",
                            "scaleX",
                            73750,
                            750,
                            "easeInOutBounce",
                            "${Ellipse3Copy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2403",
                            "left",
                            243500,
                            500,
                            "easeOutQuad",
                            "${PsychAnim1Circle6}",
                            '512px',
                            '-939px'
                        ],
                        [
                            "eid1590",
                            "scaleY",
                            74500,
                            250,
                            "easeInOutBounce",
                            "${Ellipse3Copy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2406",
                            "top",
                            240000,
                            2000,
                            "linear",
                            "${PsychAnim1Circle3}",
                            '180px',
                            '272px'
                        ],
                        [
                            "eid2407",
                            "top",
                            242432,
                            1568,
                            "linear",
                            "${PsychAnim1Circle3}",
                            '272px',
                            '-135px'
                        ],
                        [
                            "eid2260",
                            "opacity",
                            429665,
                            0,
                            "easeInOutElastic",
                            "${HappyCircCopy2}",
                            '0.699999988079071',
                            '0.699999988079071'
                        ],
                        [
                            "eid2029",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${PsychAnim5Back}",
                            '-38px',
                            '-38px'
                        ],
                        [
                            "eid2030",
                            "left",
                            274500,
                            0,
                            "easeInOutElastic",
                            "${PsychAnim5Back}",
                            '-38px',
                            '34px'
                        ],
                        [
                            "eid2031",
                            "left",
                            300000,
                            0,
                            "easeInOutElastic",
                            "${PsychAnim5Back}",
                            '34px',
                            '-53px'
                        ],
                        [
                            "eid2402",
                            "scaleX",
                            241500,
                            500,
                            "easeOutQuad",
                            "${PsychAnim1Circle6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1245",
                            "scaleY",
                            99899,
                            5101,
                            "swing",
                            "${Heart}",
                            '1',
                            '0.68'
                        ],
                        [
                            "eid2337",
                            "left",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${yellow_bar}",
                            '1096px',
                            '1096px'
                        ],
                        [
                            "eid2338",
                            "left",
                            245332,
                            668,
                            "easeInOutElastic",
                            "${yellow_bar}",
                            '1083px',
                            '357px'
                        ],
                        [
                            "eid2339",
                            "left",
                            249500,
                            1500,
                            "easeInOutElastic",
                            "${yellow_bar}",
                            '357px',
                            '1934px'
                        ],
                        [
                            "eid1815",
                            "scaleX",
                            142000,
                            1000,
                            "easeOutElastic",
                            "${dotOneCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1916",
                            "left",
                            125000,
                            0,
                            "easeOutElastic",
                            "${RoundRectCopy7}",
                            '-390px',
                            '-390px'
                        ],
                        [
                            "eid1917",
                            "left",
                            140750,
                            0,
                            "easeOutElastic",
                            "${RoundRectCopy7}",
                            '-390px',
                            '499px'
                        ],
                        [
                            "eid1918",
                            "left",
                            141000,
                            1000,
                            "easeOutElastic",
                            "${RoundRectCopy7}",
                            '499px',
                            '567px'
                        ],
                        [
                            "eid2461",
                            "left",
                            200000,
                            0,
                            "linear",
                            "${RoundRectCopy7}",
                            '567px',
                            '-949px'
                        ],
                        [
                            "eid1961",
                            "top",
                            0,
                            0,
                            "linear",
                            "${CultureIntro}",
                            '277px',
                            '277px'
                        ],
                        [
                            "eid1925",
                            "top",
                            125000,
                            0,
                            "linear",
                            "${CultureIntro}",
                            '277px',
                            '347px'
                        ],
                        [
                            "eid1959",
                            "top",
                            126000,
                            0,
                            "linear",
                            "${CultureIntro}",
                            '347px',
                            '347px'
                        ],
                        [
                            "eid1597",
                            "left",
                            32000,
                            0,
                            "easeInQuad",
                            "${Ellipse3Copy6}",
                            '1178px',
                            '1178px'
                        ],
                        [
                            "eid1598",
                            "left",
                            73750,
                            0,
                            "easeInQuad",
                            "${Ellipse3Copy6}",
                            '1178px',
                            '459px'
                        ],
                        [
                            "eid1634",
                            "opacity",
                            88000,
                            0,
                            "easeOutQuint",
                            "${Ellipse4}",
                            '0.4',
                            '0.4'
                        ],
                        [
                            "eid2069",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${MadText}",
                            '-362px',
                            '-362px'
                        ],
                        [
                            "eid2070",
                            "top",
                            325000,
                            0,
                            "easeInOutElastic",
                            "${MadText}",
                            '-362px',
                            '165px'
                        ],
                        [
                            "eid2071",
                            "top",
                            332127,
                            0,
                            "easeInOutElastic",
                            "${MadText}",
                            '165px',
                            '1148px'
                        ],
                        [
                            "eid1548",
                            "left",
                            69750,
                            0,
                            "easeInQuad",
                            "${smallpath2Copy10}",
                            '1504px',
                            '1504px'
                        ],
                        [
                            "eid1549",
                            "left",
                            72750,
                            1000,
                            "linear",
                            "${smallpath2Copy10}",
                            '431px',
                            '450px'
                        ],
                        [
                            "eid1608",
                            "scaleY",
                            89000,
                            0,
                            "easeInOutElastic",
                            "${Brain2}",
                            '0.88',
                            '0.88'
                        ],
                        [
                            "eid1609",
                            "scaleY",
                            94500,
                            1500,
                            "easeOutQuint",
                            "${Brain2}",
                            '0.88',
                            '0'
                        ],
                        [
                            "eid1962",
                            "left",
                            0,
                            0,
                            "linear",
                            "${CultAnim1Forward}",
                            '1051px',
                            '1051px'
                        ],
                        [
                            "eid1781",
                            "left",
                            125000,
                            0,
                            "linear",
                            "${CultAnim1Forward}",
                            '1051px',
                            '964px'
                        ],
                        [
                            "eid1782",
                            "left",
                            126136,
                            0,
                            "linear",
                            "${CultAnim1Forward}",
                            '964px',
                            '1189px'
                        ],
                        [
                            "eid1402",
                            "left",
                            32000,
                            0,
                            "easeInOutElastic",
                            "${EllipseCopy}",
                            '1109px',
                            '1109px'
                        ],
                        [
                            "eid1403",
                            "left",
                            45250,
                            0,
                            "easeInOutElastic",
                            "${EllipseCopy}",
                            '1109px',
                            '479px'
                        ],
                        [
                            "eid1404",
                            "left",
                            45432,
                            1727,
                            "linear",
                            "${EllipseCopy}",
                            '479px',
                            '480px'
                        ],
                        [
                            "eid2258",
                            "scaleY",
                            429665,
                            1000,
                            "easeInOutElastic",
                            "${HappyCircCopy2}",
                            '1',
                            '2.02'
                        ],
                        [
                            "eid1806",
                            "top",
                            125000,
                            0,
                            "easeOutElastic",
                            "${dotOne}",
                            '261px',
                            '261px'
                        ],
                        [
                            "eid2451",
                            "top",
                            200000,
                            0,
                            "linear",
                            "${dotOne}",
                            '261px',
                            '233px'
                        ],
                        [
                            "eid1908",
                            "top",
                            125000,
                            0,
                            "easeOutElastic",
                            "${RoundRectCopy6}",
                            '601px',
                            '601px'
                        ],
                        [
                            "eid1909",
                            "top",
                            142000,
                            1000,
                            "easeOutElastic",
                            "${RoundRectCopy6}",
                            '601px',
                            '277px'
                        ],
                        [
                            "eid1878",
                            "top",
                            139750,
                            0,
                            "easeOutElastic",
                            "${RoundRectCopy}",
                            '601px',
                            '601px'
                        ],
                        [
                            "eid1879",
                            "top",
                            143000,
                            1000,
                            "easeOutElastic",
                            "${RoundRectCopy}",
                            '601px',
                            '255px'
                        ],
                        [
                            "eid1830",
                            "scaleX",
                            141000,
                            1000,
                            "easeOutElastic",
                            "${dotOneCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2308",
                            "left",
                            250750,
                            750,
                            "easeInOutElastic",
                            "${Anim3Text}",
                            '1098px',
                            '501px'
                        ],
                        [
                            "eid2309",
                            "left",
                            253750,
                            2250,
                            "easeInOutElastic",
                            "${Anim3Text}",
                            '501px',
                            '1244px'
                        ],
                        [
                            "eid462",
                            "scaleX",
                            0,
                            1500,
                            "easeInQuad",
                            "${inCirc1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1786",
                            "left",
                            125000,
                            0,
                            "easeOutQuart",
                            "${CultAnim2Back}",
                            '-207px',
                            '-207px'
                        ],
                        [
                            "eid1787",
                            "left",
                            126250,
                            0,
                            "easeOutQuart",
                            "${CultAnim2Back}",
                            '-207px',
                            '41px'
                        ],
                        [
                            "eid1788",
                            "left",
                            129521,
                            0,
                            "easeOutQuart",
                            "${CultAnim2Back}",
                            '41px',
                            '-63px'
                        ],
                        [
                            "eid1579",
                            "left",
                            32000,
                            0,
                            "easeInQuad",
                            "${Ellipse3Copy3}",
                            '1168px',
                            '1168px'
                        ],
                        [
                            "eid1580",
                            "left",
                            75750,
                            0,
                            "easeInOutBounce",
                            "${Ellipse3Copy3}",
                            '1168px',
                            '539px'
                        ],
                        [
                            "eid1578",
                            "scaleY",
                            75750,
                            250,
                            "easeInOutBounce",
                            "${Ellipse3Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1984",
                            "top",
                            240000,
                            0,
                            "easeInOutElastic",
                            "${RedButton}",
                            '92px',
                            '92px'
                        ],
                        [
                            "eid1985",
                            "top",
                            277628,
                            2372,
                            "easeInOutElastic",
                            "${RedButton}",
                            '398px',
                            '466px'
                        ],
                        [
                            "eid1986",
                            "top",
                            315000,
                            3000,
                            "easeInOutElastic",
                            "${RedButton}",
                            '466px',
                            '463px'
                        ],
                        [
                            "eid1987",
                            "top",
                            390835,
                            0,
                            "easeInOutElastic",
                            "${RedButton}",
                            '463px',
                            '466px'
                        ],
                        [
                            "eid1988",
                            "top",
                            425915,
                            0,
                            "easeInOutElastic",
                            "${RedButton}",
                            '466px',
                            '466px'
                        ],
                        [
                            "eid1989",
                            "top",
                            427665,
                            2000,
                            "easeInOutElastic",
                            "${RedButton}",
                            '466px',
                            '458px'
                        ],
                        [
                            "eid1798",
                            "left",
                            160731,
                            24269,
                            "linear",
                            "${worldCopy}",
                            '1098px',
                            '-930px'
                        ],
                        [
                            "eid2421",
                            "left",
                            200000,
                            0,
                            "linear",
                            "${worldCopy}",
                            '-930px',
                            '-1488px'
                        ],
                        [
                            "eid1602",
                            "top",
                            32000,
                            0,
                            "linear",
                            "${earinfo}",
                            '-2px',
                            '-2px'
                        ],
                        [
                            "eid2483",
                            "top",
                            125000,
                            0,
                            "easeOutBounce",
                            "${CultexitButton}",
                            '49px',
                            '49px'
                        ],
                        [
                            "eid2476",
                            "top",
                            200000,
                            0,
                            "linear",
                            "${CultexitButton}",
                            '49px',
                            '3405px'
                        ],
                            [ "eid2500", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${__Troopers}', [] ] ],
                            [ "eid2501", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_07_Traveling_Music}', [] ] ],
                            [ "eid2506", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_9th_Symphony}', [] ] ],
                            [ "eid2507", "trigger", 31000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_9th_Symphony}', [] ] ],
                            [ "eid2502", "trigger", 31332, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_07_Traveling_Music}', [] ] ],
                            [ "eid2508", "trigger", 31332, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_9th_Symphony}', [] ] ],
                            [ "eid2503", "trigger", 109065.83084475, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_07_Traveling_Music}', [] ] ],
                            [ "eid2504", "trigger", 125000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_07_Traveling_Music}', [] ] ],
                            [ "eid2509", "trigger", 239996, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_9th_Symphony}', [] ] ],
                            [ "eid2430", "trigger", 240000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Poker_Face}', [] ] ],
                            [ "eid2505", "trigger", 240000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_07_Traveling_Music}', [] ] ],
                            [ "eid2429", "trigger", 240000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${__Troopers}', [] ] ],
                            [ "eid2510", "trigger", 241000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${_9th_Symphony}', [] ] ],
                            [ "eid2431", "trigger", 241000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${__Troopers}', [] ] ],
                            [ "eid2491", "trigger", 242000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Poker_Face}', [] ] ],
                            [ "eid2433", "trigger", 242750, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Folsom_Prison_Blues}', [] ] ],
                            [ "eid2432", "trigger", 242750, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Poker_Face}', [0] ] ],
                            [ "eid2434", "trigger", 248882.09367783, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Poker_Face}', [] ] ],
                            [ "eid2435", "trigger", 249500, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Folsom_Prison_Blues}', [0] ] ],
                            [ "eid2438", "trigger", 249500, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${__Troopers}', [] ] ],
                            [ "eid2436", "trigger", 249500, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Puritania}', [] ] ],
                            [ "eid2437", "trigger", 249500, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Poker_Face}', [] ] ],
                            [ "eid2439", "trigger", 253169, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Folsom_Prison_Blues}', [] ] ],
                            [ "eid2441", "trigger", 253750, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${__Troopers}', [] ] ],
                            [ "eid2440", "trigger", 253750, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Puritania}', [0] ] ],
                            [ "eid2442", "trigger", 253750, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Folsom_Prison_Blues}', [] ] ],
                            [ "eid2443", "trigger", 260500, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${__Troopers}', [] ] ],
                            [ "eid2444", "trigger", 275878.46215034, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Puritania}', [] ] ],
                            [ "eid2445", "trigger", 276250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${__Troopers}', [0] ] ],
                            [ "eid2446", "trigger", 276250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Puritania}', [] ] ],
                            [ "eid2447", "trigger", 291644.2315909, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${__Troopers}', [] ] ]
                    ]
                }
            },
            "titleNav": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'title_nav',
                            rect: ['0px', '0px', '162px', '162px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/title_nav.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '162px', '162px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "bioButton": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Biology_Button2',
                            rect: ['0px', '0px', '406px', '406px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Biology_Button.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '406px', '406px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "cultButton": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '532px', '532px', 'auto', 'auto'],
                            id: 'Culture_Button',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Culture_Button.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '532px', '532px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "psychButton": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'Psychology_Button',
                            rect: ['0px', '0px', '718px', '718px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Psychology_Button.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '718px', '718px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "outCirc2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'outCirc2',
                            rect: ['0px', '0px', '568px', '568px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/outercircle2.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '568px', '568px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "outCirc1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'outercircle',
                            rect: ['0px', '0px', '423px', '423px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/outercircle.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '423px', '423px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "inCirc3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'navinnercircle3',
                            rect: ['0px', '0px', '308px', '303px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/navinnercircle3.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '308px', '303px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "inCirc2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'navinnercircle2',
                            rect: ['0px', '0px', '285px', '282px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/navinnercircle2.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '285px', '282px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "inCirc1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'navcircleinner1',
                            rect: ['0px', '0px', '251px', '252px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/navcircleinner1.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '251px', '252px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "simpButt": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'simpWhiteButton3',
                            rect: ['21px', '3px', '40px', '80px', 'auto', 'auto'],
                            transform: [[], ['221'], [0, 0, 0], [1, 1, 1]],
                            fill: ['rgba(0,0,0,0)', 'images/simpWhiteButton.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '83px', '87px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "pulse": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['269px', '160px', '520px', '516px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(173,53,30,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 77000,
                    autoPlay: true,
                    labels: {
                        "loop": 76000
                    },
                    data: [
                        [
                            "eid1186",
                            "left",
                            67500,
                            9500,
                            "easeInOutBounce",
                            "${Ellipse}",
                            '265px',
                            '269px'
                        ],
                        [
                            "eid1187",
                            "top",
                            67500,
                            9500,
                            "easeInOutBounce",
                            "${Ellipse}",
                            '122px',
                            '160px'
                        ],
                        [
                            "eid1185",
                            "scaleY",
                            67500,
                            9500,
                            "easeInOutBounce",
                            "${Ellipse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1184",
                            "scaleX",
                            67500,
                            9500,
                            "easeInOutBounce",
                            "${Ellipse}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'world',
                            rect: ['0px', '0px', '805px', '358px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/world2.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'worldCopy',
                            rect: ['871px', '0px', '805px', '358px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/world2.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1676px', '358px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("MatthewTorres_ThesisFinal_edgeActions.js");
})("EDGE-291841504");
