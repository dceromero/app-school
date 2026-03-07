//mypreset.ts
import { definePreset } from '@primeuix/themes';
import Lara from '@primeuix/themes/lara';

const MyPreset = definePreset(Lara, {
    semantic: {
        primary: {
            50: '{blue.50}',
            100: '{blue.100}',
            200: '{blue.200}',
            300: '{blue.300}',
            400: '{blue.400}',
            500: '{blue.500}',
            600: '{blue.600}',
            700: '{blue.700}',
            800: '{blue.800}',
            900: '{blue.900}',
            950: '{blue.950}'
        },
        danger:{
            50: '{red.50}',
            100: '{red.100}',
            200: '{red.200}',
            300: '{red.300}',
            400: '{red.400}',
            500: '{red.500}',
            600: '{red.600}',
            700: '{red.700}',
            800: '{red.800}',
            900: '{red.900}',
            950: '{red.950}'
        },
        success:{
            50: '{lime.50}',
            100: '{lime.100}',
            200: '{lime.200}', 
            300: '{lime.300}',
            400: '{lime.400}', 
            500: '{lime.500}', 
            600: '{lime.600}', 
            700: '{lime.700}', 
            800: '{lime.800}', 
            900: '{lime.900}', 
            950: '{lime.950}'
        }
    }
});

export default MyPreset;

