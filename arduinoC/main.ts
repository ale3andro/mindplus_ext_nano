\   
enum SIZE {
    //% block="29*29"
    1,
    //% block="58*58"
    2
}

enum LED_PORTS {
    //% block="0"
    0,
    //% block="1"
    1,
    //% block="2"
    2,
    //% block="3"
    3,
    //% block="4"
    4,
    //% block="5"
    5,
    //% block="6"
    6,
    //% block="7"
    7,
    //% block="8"
    8,
    //% block="9"
    9,
    //% block="10"
    10,
    //% block="11"
    11,
    //% block="12"
    12,
    //% block="13"
    13
}

enum DIGITAL_PORTS {
    //% block="0"
    0,
    //% block="1"
    1,
    //% block="2"
    2,
    //% block="3"
    3,
    //% block="4"
    4,
    //% block="5"
    5,
    //% block="6"
    6,
    //% block="7"
    7,
    //% block="8"
    8,
    //% block="9"
    9,
    //% block="10"
    10,
    //% block="11"
    11,
    //% block="12"
    12,
    //% block="13"
    13
}

enum PWM_PORTS {
    //% block="3"
    3,
    //% block="5"
    5,
    //% block="6"
    6,
    //% block="9"
    9,
    //% block="10"
    10,
    //% block="11"
    11
}

enum ANALOG_PORTS {
    //% block="A0"
    0,
    //% block="A1"
    1,
    //% block="A2"
    2,
    //% block="A3"
    3,
    //% block="A4"
    4,
    //% block="A5"
    5,
    //% block="A6"
    6,
    //% block="A7"
    7,
}

enum DIRECTIONS {
    //% block="Ρολογιού"
    HIGH,
    //% block="Αντίστροφη Ρολογιού"
    LOW
}

enum LED_STATES {
    //% block="Άναψε"
    HIGH,
    //% block="Σβήσε"
    LOW
}

enum BUZZER_TONES_DURATION {
    //% block="Μισό"
    500,
    //% block="Τέταρτο"
    250,
    //% block="Όγδοο"
    125,
    //% block="Ολόκληρο"
    1000,
    //% block="Διπλό"
    2000,
    //% block="Στοπ"
    0,
}

enum BUZZER_TONES {
    //% block="Χαμηλό Ντο (C3)"
    131,
    //% block="Χαμηλό Ντο# (C#3)"
    139,
    //% block="Χαμηλό Ρε (D3)"
    147,
    //% block="Χαμηλό Ρε# (D#3)"
    156,
    //% block="Χαμηλό Μι (E3)"
    165,
    //% block="Χαμηλό Φα (C3)"
    175,
    //% block="Χαμηλό Φα# (F#3)"
    185,
    //% block="Χαμηλό Σολ (G3)"
    196,
    //% block="Χαμηλό Σολ# (G#3)"
    208,
    //% block="Χαμηλό Λα (A3)"
    220,
    //% block="Χαμηλό Λα# (A#3)"
    233,
    //% block="Χαμηλό Σι (B3)"
    247,
    //% block="Μεσαίο Ντο (C4)"
    262,
    //% block="Μεσαίο Ντο# (C#4)"
    277,
    //% block="Μεσαίο Ρε (D4)"
    294,
    //% block="Μεσαίο Ρε# (D#4)"
    311,
    //% block="Μεσαίο Μι (E4)"
    330,
    //% block="Μεσαίο Φα (F4)"
    349,
    //% block="Μεσαίο Φα# (F#4)"
    370,
    //% block="Μεσαίο Σολ (G4)"
    392,
    //% block="Μεσαίο Σολ# (G#4)"
    415,
    //% block="Μεσαίο Λα (A4)"
    440,
    //% block="Μεσαίο Λα# (A#4)"
    466,
    //% block="Μεσαίο Σι (B4)"
    494,
    //% block="Υψηλό Ντο (C5)"
    523,
    //% block="Υψηλό Ντο# (C#5)"
    554,
    //% block="Υψηλό Ρε (D5)"
    587,
    //% block="Υψηλό Ρε# (D#5)"
    622,
    //% block="Υψηλό Μι (E5)"
    659,
    //% block="Υψηλό Φα (F5)"
    698,
    //% block="Υψηλό Φα# (F#5)"
    740,
    //% block="Υψηλό Σολ (G5)"
    784,
    //% block="Υψηλό Σολ# (G#5)"
    831,
    //% block="Υψηλό Λα (A5)"
    880,
    //% block="Υψηλό Λα# (A#5)"
    932,
    //% block="Υψηλό Σι (B5)"
    988,
}

//% color="#1c0dbd" iconWidth=50 iconHeight=40
namespace alxNano {

    //% block="Led στο pin [BUTTON] [STATE]" blockType="command"
    //% BUTTON.shadow="dropdown" BUTTON.options="LED_PORTS" BUTTON.defl="LED_PORTS.13"
    //% STATE.shadow="dropdown" STATE.options="LED_STATES" STATE.defl="LED_STATES.HIGH"
    export function setLedState(parameter: any, block: any) {
        let button = parameter.BUTTON.code;
        button = replace(button);
        let state = parameter.STATE.code;
        if(Generator.board === 'arduino' || Generator.board === 'arduinonano'){
            Generator.addCode(`digitalWrite(${button}, ${state});`);
        }
    }

    //% block="Led στο pin [BUTTON] άναψε με φωτεινότητα [INTENSITY]" blockType="command"
    //% BUTTON.shadow="dropdown" BUTTON.options="PWM_PORTS" BUTTON.defl="PWM_PORTS.6"
    //% INTENSITY.shadow="range" INTENSITY.defl="255" INTENSITY.params.max="255"
    export function setLedIntensity(parameter: any, block: any) {
        let button = parameter.BUTTON.code;
        button = replace(button);
        let intensity=parameter.INTENSITY.code;

        if(Generator.board === 'arduino' || Generator.board === 'arduinonano'){
            Generator.addCode(`analogWrite(${button}, ${intensity});`);
        }
    }

    //% block="Buzzer στο pin [BUTTON] παίξε νότα [TONE] για [DURATION]" blockType="command"
    //% BUTTON.shadow="dropdown" BUTTON.options="DIGITAL_PORTS" BUTTON.defl="DIGITAL_PORTS.6"
    //% TONE.shadow="dropdown" TONE.options="BUZZER_TONES" TONE.defl="BUZZER_TONES.262"
    //% DURATION.shadow="dropdown" DURATION.options="BUZZER_TONES_DURATION" DURATION.defl="BUZZER_TONES_DURATION.500"
    export function setBuzzerState(parameter: any, block: any) {
        let button = parameter.BUTTON.code;
        button = replace(button);
        let tone = parameter.TONE.code;
        let duration = parameter.DURATION.code;
        if(Generator.board === 'arduino' || Generator.board === 'arduinonano'){
            Generator.addInclude("DFRobot_Tone","#include <DFRobot_Libraries.h>");
            Generator.addObject(`DFRobot_Tone_${button}` ,`DFRobot_Tone`,`alx_tone_${button}`);
            Generator.addCode(`alx_tone_${button}.play(${button}, ${tone}, ${duration});`);
        }
    }

    //% block="Laser στο pin [BUTTON] [STATE]" blockType="command"
    //% BUTTON.shadow="dropdown" BUTTON.options="DIGITAL_PORTS" BUTTON.defl="DIGITAL_PORTS.6"
    //% STATE.shadow="dropdown" STATE.options="LED_STATES" STATE.defl="LED_STATES.HIGH"
    export function setLaserState(parameter: any, block: any) {
        let button = parameter.BUTTON.code;
        button = replace(button);
        let state = parameter.STATE.code;
        if(Generator.board === 'arduino' || Generator.board === 'arduinonano'){
            Generator.addCode(`digitalWrite(${button}, ${state});`);
        }
    }

    //% block="Σέρβο στο pin [BUTTON] όρισε γωνία [ANGLE]" blockType="command"
    //% BUTTON.shadow="dropdown" BUTTON.options="DIGITAL_PORTS" BUTTON.defl="DIGITAL_PORTS.9"
    //% ANGLE.shadow="range" ANGLE.defl="90" ANGLE.params.max="180"
    export function setServoAngle(parameter: any, block: any) {
        let button=parameter.BUTTON.code;
        let angle=parameter.ANGLE.code;
        if(Generator.board === 'arduino' || Generator.board === 'arduinonano'){
            Generator.addInclude("DFRobot_servo","#include <DFRobot_Servo.h>");
            Generator.addObject(`servo_object_${button}` ,`Servo`,`servo_${button}`);
            Generator.addSetup(`servo_setup_${button}`, `servo_${button}.attach(${button});`);
            Generator.addCode(`servo_${button}.angle(${angle});`);
        }
    }

    //% block="Διάβασε θερμοκρασία από το pin [BUTTON]" blockType="reporter"
    //% BUTTON.shadow="dropdown" BUTTON.options="DIGITAL_PORTS" BUTTON.defl="DIGITAL_PORTS.6"
    export function getTemperature(parameter: any, block: any) {
        let button = parameter.BUTTON.code;
        button = replace(button);
        if(Generator.board === 'arduino' || Generator.board === 'arduinonano'){
            Generator.addInclude("DFRobot_DHT","#include <DFRobot_DHT.h>");
            Generator.addObject(`DHT_alx_${button}` ,`DFRobot_DHT`,`dht11_${button}`);
            Generator.addSetup(`DHT_alx_begin_${button}`, `dht11_${button}.begin(${button}, DHT11);`);
            Generator.addCode(`dht11_${button}.getTemperature()`);
        }
    }

    //% block="Διάβασε υγρασία από το pin [BUTTON]" blockType="reporter"
    //% BUTTON.shadow="dropdown" BUTTON.options="DIGITAL_PORTS" BUTTON.defl="DIGITAL_PORTS.6"
    export function getHumidity(parameter: any, block: any) {
        let button = parameter.BUTTON.code;
        button = replace(button);
        if(Generator.board === 'arduino' || Generator.board === 'arduinonano'){
            Generator.addInclude("DFRobot_DHT","#include <DFRobot_DHT.h>");
            Generator.addObject(`DHT_alx_${button}` ,`DFRobot_DHT`,`dht11_${button}`);
            Generator.addSetup(`DHT_alx_begin_${button}`, `dht11_${button}.begin(${button}, DHT11);`);
            Generator.addCode(`dht11_${button}.getHumidity()`);
        }
    }

    //% block="Διάβασε επίπεδο φωτός από το pin [BUTTON]" blockType="reporter"
    //% BUTTON.shadow="dropdown" BUTTON.options="ANALOG_PORTS" BUTTON.defl="ANALOG_PORTS.A0"
    export function getLightLevel(parameter: any, block: any) {
        let button = parameter.BUTTON.code;
        button = replace(button);
        if(Generator.board === 'arduino' || Generator.board === 'arduinonano'){
            Generator.addCode(`analogRead(${button})`);
        }
    }

    //% block="Διάβασε ποτενσιόμετρο από το pin [BUTTON]" blockType="reporter"
    //% BUTTON.shadow="dropdown" BUTTON.options="ANALOG_PORTS" BUTTON.defl="ANALOG_PORTS.0"
    export function getPotensiometerLevel(parameter: any, block: any) {
        let button = parameter.BUTTON.code;
        button = replace(button);
        if(Generator.board === 'arduino' || Generator.board === 'arduinonano'){
            Generator.addCode(`analogRead(${button})`);
        }
    }

    //% block="Διάβασε ένταση ήχου από το μικρόφωνο στο pin [BUTTON]" blockType="reporter"
    //% BUTTON.shadow="dropdown" BUTTON.options="ANALOG_PORTS" BUTTON.defl="ANALOG_PORTS.0"
    export function getSoundLevel(parameter: any, block: any) {
        let button = parameter.BUTTON.code;
        button = replace(button);
        if(Generator.board === 'arduino' || Generator.board === 'arduinonano'){
            Generator.addCode(`analogRead(${button})`);
        }
    }    

    //% block="Κουμπί πίεσης στο pin [BUTTON], είναι πατημένο;" blockType="boolean"
    //% BUTTON.shadow="dropdown" BUTTON.options="DIGITAL_PORTS" BUTTON.defl="DIGITAL_PORTS.6"
    export function getPressButtonStatus(parameter: any, block: any) {
        let button=parameter.BUTTON.code;
        if(Generator.board === 'arduino' || Generator.board === 'arduinonano'){
            Generator.addCode(`!digitalRead(${button})`);
        }
    }

    //% block="Κουμπί αφής στο pin [BUTTON], είναι πατημένο;" blockType="boolean"
    //% BUTTON.shadow="dropdown" BUTTON.options="DIGITAL_PORTS" BUTTON.defl="DIGITAL_PORTS.6"
    export function getTactileButtonStatus(parameter: any, block: any) {
        let button=parameter.BUTTON.code;
        if(Generator.board === 'arduino' || Generator.board === 'arduinonano'){
            Generator.addCode(`digitalRead(${button})`);
        }
    }

    //% block="Αισθητήρας κίνησης στο pin [BUTTON]. Ανιχνεύτηκε κίνηση;" blockType="boolean"
    //% BUTTON.shadow="dropdown" BUTTON.options="DIGITAL_PORTS" BUTTON.defl="DIGITAL_PORTS.6"
    export function getPirSensorStatus(parameter: any, block: any) {
        let button=parameter.BUTTON.code;
        if(Generator.board === 'arduino' || Generator.board === 'arduinonano'){
            Generator.addCode(`digitalRead(${button})`);
        }
    }

    //% block="Διάβασε απόσταση (Trig->A0 και Echo->2" blockType="reporter"
    export function getDistance(parameter: any, block: any) {
        if(Generator.board === 'arduino' || Generator.board === 'arduinonano'){
            Generator.addInclude("DFRobot_URM","#include <DFRobot_URM10.h>");
            Generator.addObject(`DFRobot_URM` ,`DFRobot_URM10`,`alx_distance`);
            Generator.addCode(`(alx_distance.getDistanceCM(A0, 2))`);
        }
    }

    //% block="Oθόνη I2C αρχικοποίηση στη διεύθυνση 0x3F με 2 γραμμές" blockType="command"
    export function initI2CLed(parameter: any, block: any) {
        if(Generator.board === 'arduino' || Generator.board === 'arduinonano'){
            Generator.addInclude("Wire_library","#include <Wire.h>");
            Generator.addInclude("LiquidCrystal_I2C","#include <LiquidCrystal_I2C.h>");
            Generator.addObject(`LiquidCrystal_I2C_object` ,`LiquidCrystal_I2C`,`alx_lcd(0x3F, 16, 2);`);
            Generator.addSetup(`init`, `alx_lcd.init();`);
            Generator.addSetup(`backlight`, `alx_lcd.backlight();`);
        }
    }

    //% block="Oθόνη I2C γράψε [MESSAGE] στη γραμμή [LINE]" blockType="command"
    //% MESSAGE.shadow="string" MESSAGE,defl="S1"
    //% LINE.shadow="range" LINE.defl="0" LINE.params.max="3"
    export function writeI2CLed(parameter: any, block: any) {
        let message = parameter.MESSAGE.code
        let line = parameter.LINE.code
        if(Generator.board === 'arduino' || Generator.board === 'arduinonano'){
            Generator.addCode(`alx_lcd.setCursor(0, ${line});`)
            Generator.addCode(`alx_lcd.print(${message});`)
        }
    }

    //% block="Oθόνη I2C καθάρισε" blockType="command"
    export function clearI2CLed(parameter: any, block: any) {
        if(Generator.board === 'arduino' || Generator.board === 'arduinonano'){
            Generator.addCode(`alx_lcd.clear();`);
        }
    }

    function replace(str :string) {
        return str.replace("+", "");
    }
}

