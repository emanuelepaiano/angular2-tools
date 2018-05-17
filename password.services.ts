/**
 * Random Password generator for Angular 2+
 * 
 * 2018 - Emanuele Paiano
 * 
 * This source is released under MIT license
 */

import { Injectable } from '@angular/core';

@Injectable()
export class PasswordServices {
    private MinLength = 8;
    constructor() {}

    generateRandom(length: number, uppercase: boolean, lowercase: boolean, symbols: boolean) {
        length < this.MinLength ? length = this.MinLength : length = length;
        let password;
        uppercase ? password = this.generateChar(true, false, false) : password = '1';
        for (let i = 0; i < length - 3 && (uppercase || lowercase) ; i++) {
            password += this.generateChar(uppercase, lowercase, false);
        }
        lowercase ? password += this.generateChar(false, lowercase, false) : password = password;
        symbols ? password += this.generateChar(false, false, true) : password += this.generateChar(uppercase, lowercase, false);
        return password;
    }

    generateChar(uppercase: boolean, lowercase: boolean, symbols: boolean) {
        const setChar: number[] = new Array;
        if (uppercase) {
            setChar[setChar.length] = this.generateBetween(65, 90);
        }
        if (lowercase) {
            setChar[setChar.length] = this.generateBetween(97, 122);
        }
        if (symbols) {
            setChar[setChar.length] = this.generateBetween(39, 47);
            setChar[setChar.length] = this.generateBetween(58, 64);
        }
        return String.fromCharCode(setChar[this.generateBetween(0, setChar.length - 1)]);
    }

    private generateBetween(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
