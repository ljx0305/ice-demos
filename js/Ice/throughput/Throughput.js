// **********************************************************************
//
// Copyright (c) 2003-2015 ZeroC, Inc. All rights reserved.
//
// This copy of Ice is licensed to you under the terms described in the
// ICE_LICENSE file included in this distribution.
//
// **********************************************************************
//
// Ice version 3.6b
//
// <auto-generated>
//
// Generated from file `Throughput.ice'
//
// Warning: do not edit this file.
//
// </auto-generated>
//

(function(module, require, exports)
{
    var Ice = require("zeroc-icejs").Ice;
    var __M = Ice.__M;
    var Slice = Ice.Slice;

    var Demo = __M.module("Demo");
    Slice.defineSequence(Demo, "ByteSeqHelper", "Ice.ByteHelper", true);

    Object.defineProperty(Demo, 'ByteSeqSize', {
        value: 500000
    });
    Slice.defineSequence(Demo, "StringSeqHelper", "Ice.StringHelper", false);

    Object.defineProperty(Demo, 'StringSeqSize', {
        value: 50000
    });

    Demo.StringDouble = Slice.defineStruct(
        function(s, d)
        {
            this.s = s !== undefined ? s : null;
            this.d = d !== undefined ? d : 0.0;
        },
        false,
        function(__os)
        {
            __os.writeString(this.s);
            __os.writeDouble(this.d);
        },
        function(__is)
        {
            this.s = __is.readString();
            this.d = __is.readDouble();
        },
        9, 
        false);
    Slice.defineSequence(Demo, "StringDoubleSeqHelper", "Demo.StringDouble", false);

    Object.defineProperty(Demo, 'StringDoubleSeqSize', {
        value: 50000
    });

    Demo.Fixed = Slice.defineStruct(
        function(i, j, d)
        {
            this.i = i !== undefined ? i : 0;
            this.j = j !== undefined ? j : 0;
            this.d = d !== undefined ? d : 0.0;
        },
        false,
        function(__os)
        {
            __os.writeInt(this.i);
            __os.writeInt(this.j);
            __os.writeDouble(this.d);
        },
        function(__is)
        {
            this.i = __is.readInt();
            this.j = __is.readInt();
            this.d = __is.readDouble();
        },
        16, 
        true);
    Slice.defineSequence(Demo, "FixedSeqHelper", "Demo.Fixed", true);

    Object.defineProperty(Demo, 'FixedSeqSize', {
        value: 50000
    });

    Demo.Throughput = Slice.defineObject(
        undefined,
        Ice.Object, undefined, 0,
        [
            "::Demo::Throughput",
            "::Ice::Object"
        ],
        -1, undefined, undefined, false);

    Demo.ThroughputPrx = Slice.defineProxy(Ice.ObjectPrx, Demo.Throughput.ice_staticId, undefined);

    Slice.defineOperations(Demo.Throughput, Demo.ThroughputPrx,
    {
        "needsWarmup": [, , , , , [1], , , , , ],
        "startWarmup": [, , , , , , , , , , ],
        "endWarmup": [, , , , , , , , , , ],
        "sendByteSeq": [, , , , , , [["Demo.ByteSeqHelper"]], , , , ],
        "recvByteSeq": [, , , , , ["Demo.ByteSeqHelper"], , , , , ],
        "echoByteSeq": [, , , , , ["Demo.ByteSeqHelper"], [["Demo.ByteSeqHelper"]], , , , ],
        "sendStringSeq": [, , , , , , [["Demo.StringSeqHelper"]], , , , ],
        "recvStringSeq": [, , , , , ["Demo.StringSeqHelper"], , , , , ],
        "echoStringSeq": [, , , , , ["Demo.StringSeqHelper"], [["Demo.StringSeqHelper"]], , , , ],
        "sendStructSeq": [, , , , , , [["Demo.StringDoubleSeqHelper"]], , , , ],
        "recvStructSeq": [, , , , , ["Demo.StringDoubleSeqHelper"], , , , , ],
        "echoStructSeq": [, , , , , ["Demo.StringDoubleSeqHelper"], [["Demo.StringDoubleSeqHelper"]], , , , ],
        "sendFixedSeq": [, , , , , , [["Demo.FixedSeqHelper"]], , , , ],
        "recvFixedSeq": [, , , , , ["Demo.FixedSeqHelper"], , , , , ],
        "echoFixedSeq": [, , , , , ["Demo.FixedSeqHelper"], [["Demo.FixedSeqHelper"]], , , , ],
        "shutdown": [, , , , , , , , , , ]
    });
    exports.Demo = Demo;
}
(typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? module : undefined,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? require : window.Ice.__require,
 typeof(global) !== "undefined" && typeof(global.process) !== "undefined" ? exports : window));