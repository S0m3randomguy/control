
/**
 * Control namespace functionality in blocks
 */
//% color=#404040 weight=0 icon="\uf013" block="Control"
//% groups=["Device control", "Debugging", "Device & session information"]
namespace blockControl {
    /*
    Device control
        control.runInParallel
        control.waitForEvent
        control.runInBackground: deprecated
        control.createBuffer
        control.createBufferFromUTF8
        
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
     * Run code in parallel
     */
    //% block="run code in parallel"
    //% blockId="blockControl_run_in_parallel"
    //% group="Device control"
    //% weight=70
    export function runInParallel(handler: () => void): void {
        control.runInParallel(handler);
    }
}