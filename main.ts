
/**
 * Control namespace functionality in blocks
 */
//% color=#404040 weight=0 icon="\uf013" block="Control"
//% groups=["Device control", "Debugging", "Device & session information"]
namespace blockControl {
    /*
        
    Debug
        control.dmesgValue
        control.gc
        control.heapDump
        control.setDebugFlags
        control.heapSnapshot
        control.benchmark

    Device & session information
        control.millis
        control.micros
        control.deviceSerialNumber
        control.deviceLongSerialNumber
        control.deviceDalVersion
        control.profilingEnabled
        control.allocateEventSource
        control.programHash
        control.programName
        control.ramSize
    */

    //% block="assert $condition or exit with code $code"
    //% blockId="blockControl_assert"
    //% code.defl=20
    //% group="Device control"
    //% weight=100
    export function assert(condition: boolean, code: number): void {
        control.assert(condition, code);
    }

    /**
     * Announce event that happened to registered handlers.
     * @param src Micro:Bit component ID. Visit hyperlink for more information
     * (https://github.com/microsoft/pxt-microbit/blob/master/libs/core/dal.d.ts)
     * @param value Component specific code
     */
    //% block="raise event $src with value $value"
    //% blockId="blockControl_raise_event"
    //% src.defl=1
    //% group="Device control"
    //% weight=90
    export function raiseEvent(src: number, value: number): void {
        control.raiseEvent(src, value);
    }

    /**
     * Run code on registered event
     * @param src Micro:Bit component ID. Visit hyperlink for more information
     * (https://github.com/microsoft/pxt-microbit/blob/master/libs/core/dal.d.ts)
     * @param value Component specific code
     * @flags Flags to enable
     */
    //% block="run code on event with id $src, code $value ||, flags $flags"
    //% blockId="blockControl_on_event"
    //% src.defl=1
    //% group="Device control"
    //% weight=80
    export function onEvent(src: number, value: number, handler: () => void, flags?: number): void {
        control.onEvent(src, value, handler, flags);
    }

    /**
     * Block calling thread until event is run
     * @param src Micro:Bit component ID. Visit hyperlink for more information
     * (https://github.com/microsoft/pxt-microbit/blob/master/libs/core/dal.d.ts)
     * @param value Component specific code
     */
    //% block="wait for event with id $src, code $value"
    //% blockId="blockControl_wait_for_event"
    //% src.defl=1
    //% group="Device control"
    //% weight=70
    export function waitForEvent(src: number, value: number): void {
        control.waitForEvent(src, value);
    }

    /**
     * Run code in parallel
     */
    //% block="run code in parallel"
    //% blockId="blockControl_run_in_parallel"
    //% group="Device control"
    //% weight=60
    export function runInParallel(handler: () => void): void {
        control.runInParallel(handler);
    }

    /**
     * Deprecated; Use control.runInParallel
     * Run code in the background
     */
    //% block="run code in the background"
    //% blockId="blockControl_run_in_background"
    //% group="Device control"
    //% weight=50
    //% deprecated=true
    export function runInBackground(handler: () => void): void {
        control.runInBackground(handler);
    }

    /**
     * Create a new zero-initiated buffer.
     * @param size Number of bytes in the buffer
     * @returns A Buffer object
     */
    //% block="create buffer of size $size"
    //% blockId="blockControl_create_buffer"
    //% size.defl=1024
    //% group="Device control"
    //% weight=40
    export function createBuffer(size: number): Buffer {
        return control.createBuffer(size);
    }

    /**
     * Create a new buffer from UTF8-encoded string.
     * @param str UTF8 string
     * @returns A Buffer object
     */
    //% block="run code in parallel"
    //% blockId="blockControl_create_buffer_UTF8"
    //% group="Device control"
    //% weight=40
    export function createBufferFromUTF8(str: string): Buffer {
        return control.createBufferFromUTF8(str);
    }



    /**
     * Dump internal information about a value
     * @param value Value to dump
     */
    //% block="dump internal information about $value"
    //% blockId="blockControl_dmesg_value"
    //% group="Debugging"
    //% weight=100
    export function dmesgValue(value: any): void {
        control.dmesgValue(value);
    }
}