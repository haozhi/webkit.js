// Note: For maximum-speed code, see "Optimizing Code" on the Emscripten wiki, https://github.com/kripken/emscripten/wiki/Optimizing-Code
// Note: Some Emscripten settings may limit the speed of the generated code.
// Capture the output of this into a variable, if you want
(function(FUNCTION_TABLE_OFFSET, parentModule) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  Module.print = parentModule.print;
  Module.printErr = parentModule.printErr;
  Module.cleanups = [];
  var H_BASE = 0;
  // Each module has its own stack
  var STACKTOP = parentModule['_malloc'](TOTAL_STACK);
  assert(STACKTOP % 8 == 0);
  var STACK_MAX = STACKTOP + TOTAL_STACK;
  Module.cleanups.push(function() {
    parentModule['_free'](STACKTOP); // XXX ensure exported
    parentModule['_free'](H_BASE);
  });
// === Auto-generated preamble library stuff ===
//========================================
// Runtime essentials
//========================================
function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.pop();
    var func = callback.func;
    if (typeof func === 'number') {
      func = FUNCTION_TABLE[func];
    }
    func(callback.arg === undefined ? null : callback.arg);
  }
}
var __ATINIT__ = []; // functions called during startup
function initRuntime() {
  callRuntimeCallbacks(__ATINIT__);
}
// === Body ===
H_BASE = parentModule["_malloc"](0 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 0;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* no memory initializer */
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var Math_min = Math.min;
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    return Module["dynCall_iiiiiii"](index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iii(index,a1,a2) {
  try {
    return Module["dynCall_iii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function asmPrintInt(x, y) {
  Module.print('int ' + x + ',' + y);// + ' ' + new Error().stack);
}
function asmPrintFloat(x, y) {
  Module.print('float ' + x + ',' + y);// + ' ' + new Error().stack);
}
// EMSCRIPTEN_START_ASM
var asm = (function(global, env, buffer) {
  'almost asm';
  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var tempInt = 0, tempBigInt = 0, tempBigIntP = 0, tempBigIntS = 0, tempBigIntR = 0.0, tempBigIntI = 0, tempBigIntD = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;
  var tempRet1 = 0;
  var tempRet2 = 0;
  var tempRet3 = 0;
  var tempRet4 = 0;
  var tempRet5 = 0;
  var tempRet6 = 0;
  var tempRet7 = 0;
  var tempRet8 = 0;
  var tempRet9 = 0;
  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var abort=env.abort;
  var assert=env.assert;
  var asmPrintInt=env.asmPrintInt;
  var asmPrintFloat=env.asmPrintFloat;
  var Math_min=env.min;
  var invoke_ii=env.invoke_ii;
  var invoke_vi=env.invoke_vi;
  var invoke_iiiiiii=env.invoke_iiiiiii;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore16JSSQLTransaction10executeSqlEPN3JSC9ExecStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, d31 = +0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, d41 = +0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 i10 = i4 + 48 | 0;
 i11 = i4 + 56 | 0;
 i12 = i4 + 80 | 0;
 i13 = i4 + 88 | 0;
 i14 = i4 + 96 | 0;
 i15 = i3 + 32 | 0;
 if ((HEAP32[i15 >> 2] | 0) == 1) {
  __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i3, 12);
  HEAP32[i1 + 4 >> 2] = -4;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i16 = i3 + 48 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 i18 = HEAP32[i16 + 4 >> 2] | 0;
 i16 = i6 | 0;
 HEAP32[i16 >> 2] = i17;
 HEAP32[i16 + 4 >> 2] = i18;
 i16 = i17;
 do {
  if ((i17 & 0 | 0) == 0 & (i18 & -1 | 0) == (-5 | 0)) {
   if ((HEAP8[(HEAP32[i16 >> 2] | 0) + 52 | 0] | 0) != 5) {
    i19 = 6;
    break;
   }
   i20 = i16;
  } else {
   i19 = 6;
  }
 } while (0);
 if ((i19 | 0) == 6) {
  i20 = __ZNK3JSC7JSValue16toStringSlowCaseEPNS_9ExecStateE(i6, i3) | 0;
 }
 i6 = i20 + 12 | 0;
 i16 = HEAP32[i6 >> 2] | 0;
 if ((i16 | 0) == 0) {
  __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i20, i3);
  i20 = HEAP32[i6 >> 2] | 0;
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = i20;
  if ((i20 | 0) == 0) {
   i21 = i6;
  } else {
   i22 = i20;
   i23 = i6;
   i19 = 10;
  }
 } else {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = i16;
  i22 = i16;
  i23 = i6;
  i19 = 10;
 }
 if ((i19 | 0) == 10) {
  i6 = i22 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
  i21 = i23;
 }
 i23 = i3 + 16 | 0;
 i6 = (HEAP32[(HEAP32[i23 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
 do {
  if ((HEAP32[i6 >> 2] & 0 | 0) == 0 & (HEAP32[i6 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
   i22 = i7 | 0;
   HEAP32[i22 >> 2] = 0;
   i16 = i7 + 4 | 0;
   HEAP32[i16 >> 2] = 0;
   i20 = i7 + 8 | 0;
   HEAP32[i20 >> 2] = 0;
   i18 = HEAP32[i15 >> 2] | 0;
   L20 : do {
    if ((i18 - 1 | 0) >>> 0 > 1 >>> 0) {
     i17 = i3 + 56 | 0;
     i24 = HEAP32[i17 >> 2] | 0;
     i25 = HEAP32[i17 + 4 >> 2] | 0;
     if ((i25 + 4 | 0) >>> 0 < 2 >>> 0) {
      i26 = i18;
      i19 = 64;
      break;
     }
     do {
      if ((i24 & 0 | 0) == 0 & (i25 & -1 | 0) == (-5 | 0)) {
       i17 = __ZN3JSC6JSCell9getObjectEv(i24) | 0;
       if ((i17 | 0) == 0) {
        break;
       }
       HEAP32[i9 >> 2] = HEAP32[(HEAP32[(HEAP32[(HEAP32[i23 >> 2] & -65536) + 1076 >> 2] | 0) + 20884 >> 2] | 0) + 568 >> 2];
       __ZNK3JSC8JSObject3getEPNS_9ExecStateENS_12PropertyNameE(i8, i17, i3, i9);
       i27 = HEAP32[i23 >> 2] | 0;
       i28 = (HEAP32[(i27 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
       if (!((HEAP32[i28 >> 2] & 0 | 0) == 0 & (HEAP32[i28 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
        HEAP32[i1 + 4 >> 2] = -4;
        HEAP32[i1 >> 2] = 0;
        break L20;
       }
       i28 = HEAP32[i8 + 4 >> 2] | 0;
       if ((i28 | 0) == -1) {
        i29 = HEAP32[i8 >> 2] | 0;
        i30 = i27;
       } else {
        if (i28 >>> 0 < 4294967289 >>> 0) {
         d31 = +HEAPF64[i8 >> 3];
        } else {
         d31 = +__ZNK3JSC7JSValue16toNumberSlowCaseEPNS_9ExecStateE(i8, i3);
        }
        i28 = __ZN3JSC7toInt32Ed(d31) | 0;
        i29 = i28;
        i30 = HEAP32[i23 >> 2] | 0;
       }
       i28 = (HEAP32[(i30 & -65536) + 1076 >> 2] | 0) + 24800 | 0;
       if (!((HEAP32[i28 >> 2] & 0 | 0) == 0 & (HEAP32[i28 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
        HEAP32[i1 + 4 >> 2] = -4;
        HEAP32[i1 >> 2] = 0;
        break L20;
       }
       L40 : do {
        if ((i29 | 0) != 0) {
         i28 = i10 + 4 | 0;
         i27 = i11 | 0;
         i32 = i11 + 8 | 0;
         i33 = i11 + 16 | 0;
         i34 = i10;
         i35 = i10;
         i36 = 0;
         L42 : while (1) {
          __ZNK3JSC8JSObject3getEPNS_9ExecStateEj(i10, i17, i3, i36);
          i37 = (HEAP32[(HEAP32[i23 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
          if (!((HEAP32[i37 >> 2] & 0 | 0) == 0 & (HEAP32[i37 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
           i19 = 31;
           break;
          }
          i37 = HEAP32[i28 >> 2] | 0;
          do {
           if ((i37 + 4 | 0) >>> 0 < 2 >>> 0) {
            HEAP32[i27 >> 2] = 0;
            HEAPF64[i32 >> 3] = +0;
            HEAP32[i33 >> 2] = 0;
            i38 = HEAP32[i20 >> 2] | 0;
            if ((i38 | 0) == (HEAP32[i16 >> 2] | 0)) {
             __ZN3WTF6VectorIN7WebCore8SQLValueELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i7, i11);
            } else {
             __ZN7WebCore8SQLValueC1ERKS0_((HEAP32[i22 >> 2] | 0) + (i38 * 24 & -1) | 0, i11);
             HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
            }
            i38 = HEAP32[i33 >> 2] | 0;
            if ((i38 | 0) == 0) {
             break;
            }
            i39 = i38 | 0;
            i40 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
            if ((i40 | 0) == 0) {
             __ZN3WTF10StringImpl7destroyEPS0_(i38);
             break;
            } else {
             HEAP32[i39 >> 2] = i40;
             break;
            }
           } else {
            i40 = (i37 | 0) == -1;
            if (i40 | i37 >>> 0 < 4294967289 >>> 0) {
             if (i40) {
              d41 = +(HEAP32[i34 >> 2] | 0);
             } else {
              d41 = +HEAPF64[i35 >> 3];
             }
             i40 = HEAP32[i20 >> 2] | 0;
             if ((i40 | 0) == (HEAP32[i16 >> 2] | 0)) {
              i39 = i40 + 1 | 0;
              i38 = i39 + (i40 >>> 2) | 0;
              i42 = i38 >>> 0 > 16 >>> 0 ? i38 : 16;
              __ZN3WTF6VectorIN7WebCore8SQLValueELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i7, i42 >>> 0 > i39 >>> 0 ? i42 : i39);
              i39 = HEAP32[i22 >> 2] | 0;
              i42 = HEAP32[i20 >> 2] | 0;
              HEAP32[i39 + (i42 * 24 & -1) >> 2] = 1;
              HEAPF64[i39 + (i42 * 24 & -1) + 8 >> 3] = d41;
              HEAP32[i39 + (i42 * 24 & -1) + 16 >> 2] = 0;
              HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
              break;
             } else {
              i42 = HEAP32[i22 >> 2] | 0;
              HEAP32[i42 + (i40 * 24 & -1) >> 2] = 1;
              HEAPF64[i42 + (i40 * 24 & -1) + 8 >> 3] = d41;
              HEAP32[i42 + (i40 * 24 & -1) + 16 >> 2] = 0;
              HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
              break;
             }
            }
            do {
             if ((i37 | 0) == -5) {
              i40 = HEAP32[i34 >> 2] | 0;
              if ((HEAP8[(HEAP32[i40 >> 2] | 0) + 52 | 0] | 0) != 5) {
               i19 = 50;
               break;
              }
              i43 = i40;
             } else {
              i19 = 50;
             }
            } while (0);
            if ((i19 | 0) == 50) {
             i19 = 0;
             i43 = __ZNK3JSC7JSValue16toStringSlowCaseEPNS_9ExecStateE(i10, i3) | 0;
            }
            if ((HEAP32[i43 + 12 >> 2] | 0) == 0) {
             __ZNK3JSC12JSRopeString11resolveRopeEPNS_9ExecStateE(i43, i3);
            }
            i40 = i43 + 12 | 0;
            i42 = HEAP32[i20 >> 2] | 0;
            if ((i42 | 0) == (HEAP32[i16 >> 2] | 0)) {
             i39 = i42 + 1 | 0;
             i38 = i39 + (i42 >>> 2) | 0;
             i44 = i38 >>> 0 > 16 >>> 0 ? i38 : 16;
             __ZN3WTF6VectorIN7WebCore8SQLValueELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i7, i44 >>> 0 > i39 >>> 0 ? i44 : i39);
             i39 = HEAP32[i22 >> 2] | 0;
             i44 = HEAP32[i20 >> 2] | 0;
             HEAP32[i39 + (i44 * 24 & -1) >> 2] = 2;
             HEAPF64[i39 + (i44 * 24 & -1) + 8 >> 3] = +0;
             i38 = HEAP32[i40 >> 2] | 0;
             HEAP32[i39 + (i44 * 24 & -1) + 16 >> 2] = i38;
             if ((i38 | 0) != 0) {
              i44 = i38 | 0;
              HEAP32[i44 >> 2] = (HEAP32[i44 >> 2] | 0) + 2;
             }
             i45 = HEAP32[i20 >> 2] | 0;
            } else {
             i44 = HEAP32[i22 >> 2] | 0;
             HEAP32[i44 + (i42 * 24 & -1) >> 2] = 2;
             HEAPF64[i44 + (i42 * 24 & -1) + 8 >> 3] = +0;
             i38 = HEAP32[i40 >> 2] | 0;
             HEAP32[i44 + (i42 * 24 & -1) + 16 >> 2] = i38;
             if ((i38 | 0) != 0) {
              i42 = i38 | 0;
              HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 2;
             }
             i45 = HEAP32[i20 >> 2] | 0;
            }
            HEAP32[i20 >> 2] = i45 + 1;
            i42 = (HEAP32[(HEAP32[i23 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
            if (!((HEAP32[i42 >> 2] & 0 | 0) == 0 & (HEAP32[i42 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
             i19 = 61;
             break L42;
            }
           }
          } while (0);
          i36 = i36 + 1 | 0;
          if (i36 >>> 0 >= i29 >>> 0) {
           break L40;
          }
         }
         if ((i19 | 0) == 31) {
          HEAP32[i1 + 4 >> 2] = -4;
          HEAP32[i1 >> 2] = 0;
          break L20;
         } else if ((i19 | 0) == 61) {
          HEAP32[i1 + 4 >> 2] = -4;
          HEAP32[i1 >> 2] = 0;
          break L20;
         }
        }
       } while (0);
       i26 = HEAP32[i15 >> 2] | 0;
       i19 = 64;
       break L20;
      }
     } while (0);
     __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i3, 17);
     HEAP32[i1 + 4 >> 2] = -4;
     HEAP32[i1 >> 2] = 0;
    } else {
     i26 = i18;
     i19 = 64;
    }
   } while (0);
   L91 : do {
    if ((i19 | 0) == 64) {
     L93 : do {
      if ((i26 - 1 | 0) >>> 0 > 2 >>> 0) {
       i18 = i3 + 64 | 0;
       i24 = HEAP32[i18 >> 2] | 0;
       i25 = HEAP32[i18 + 4 >> 2] | 0;
       if ((i25 + 4 | 0) >>> 0 < 2 >>> 0) {
        i46 = 0;
        i47 = i26;
        break;
       }
       do {
        if ((i24 & 0 | 0) == 0 & (i25 & -1 | 0) == (-5 | 0)) {
         i18 = __ZN3JSC6JSCell9getObjectEv(i24) | 0;
         if ((i18 | 0) == 0) {
          break;
         }
         i17 = HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0;
         i36 = __ZN3WTF10fastMallocEj(20) | 0;
         __ZN7WebCore22JSSQLStatementCallbackC1EPN3JSC8JSObjectEPNS_17JSDOMGlobalObjectE(i36, i18, i17);
         i46 = i36;
         i47 = HEAP32[i15 >> 2] | 0;
         break L93;
        }
       } while (0);
       __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i3, 17);
       HEAP32[i1 + 4 >> 2] = -4;
       HEAP32[i1 >> 2] = 0;
       break L91;
      } else {
       i46 = 0;
       i47 = i26;
      }
     } while (0);
     L101 : do {
      if ((i47 - 1 | 0) >>> 0 > 3 >>> 0) {
       i24 = i3 + 72 | 0;
       i25 = HEAP32[i24 >> 2] | 0;
       i36 = HEAP32[i24 + 4 >> 2] | 0;
       if ((i36 + 4 | 0) >>> 0 < 2 >>> 0) {
        i48 = 0;
        break;
       }
       do {
        if ((i25 & 0 | 0) == 0 & (i36 & -1 | 0) == (-5 | 0)) {
         i24 = __ZN3JSC6JSCell9getObjectEv(i25) | 0;
         if ((i24 | 0) == 0) {
          break;
         }
         i17 = HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0;
         i18 = __ZN3WTF10fastMallocEj(20) | 0;
         __ZN7WebCore27JSSQLStatementErrorCallbackC1EPN3JSC8JSObjectEPNS_17JSDOMGlobalObjectE(i18, i24, i17);
         i48 = i18;
         break L101;
        }
       } while (0);
       __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i3, 17);
       HEAP32[i1 + 4 >> 2] = -4;
       HEAP32[i1 >> 2] = 0;
       if ((i46 | 0) == 0) {
        break L91;
       }
       i25 = i46 + 4 | 0;
       i36 = i25 | 0;
       if (((tempValue = HEAP32[i36 >> 2] | 0, HEAP32[i36 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
        break L91;
       }
       i36 = i25 - 4 | 0;
       if ((i36 | 0) == 0) {
        break L91;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i36 >> 2] | 0) + 4 >> 2] & 1](i36);
       break L91;
      } else {
       i48 = 0;
      }
     } while (0);
     HEAP32[i12 >> 2] = 0;
     i36 = HEAP32[i2 + 12 >> 2] | 0;
     i25 = i13 | 0;
     HEAP32[i25 >> 2] = i46;
     i18 = i14 | 0;
     HEAP32[i18 >> 2] = i48;
     __ZN7WebCore14SQLTransaction10executeSQLERKN3WTF6StringERKNS1_6VectorINS_8SQLValueELj0ENS1_15CrashOnOverflowEEENS1_10PassRefPtrINS_20SQLStatementCallbackEEENSB_INS_25SQLStatementErrorCallbackEEERi(i36, i5, i7, i13, i14, i12);
     i36 = HEAP32[i18 >> 2] | 0;
     do {
      if ((i36 | 0) != 0) {
       i18 = i36 + 4 | 0;
       i17 = i18 | 0;
       if (((tempValue = HEAP32[i17 >> 2] | 0, HEAP32[i17 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
        break;
       }
       i17 = i18 - 4 | 0;
       if ((i17 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 1](i17);
      }
     } while (0);
     i36 = HEAP32[i25 >> 2] | 0;
     do {
      if ((i36 | 0) != 0) {
       i17 = i36 + 4 | 0;
       i18 = i17 | 0;
       if (((tempValue = HEAP32[i18 >> 2] | 0, HEAP32[i18 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
        break;
       }
       i18 = i17 - 4 | 0;
       if ((i18 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
      }
     } while (0);
     __ZN7WebCore15setDOMExceptionEPN3JSC9ExecStateEi(i3, HEAP32[i12 >> 2] | 0);
     HEAP32[i1 + 4 >> 2] = -4;
     HEAP32[i1 >> 2] = 0;
    }
   } while (0);
   i36 = HEAP32[i20 >> 2] | 0;
   if ((i36 | 0) != 0) {
    i25 = HEAP32[i22 >> 2] | 0;
    i18 = i25 + (i36 * 24 & -1) | 0;
    i36 = i25;
    while (1) {
     i25 = HEAP32[i36 + 16 >> 2] | 0;
     do {
      if ((i25 | 0) != 0) {
       i17 = i25 | 0;
       i24 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
       if ((i24 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i25);
        break;
       } else {
        HEAP32[i17 >> 2] = i24;
        break;
       }
      }
     } while (0);
     i36 = i36 + 24 | 0;
     if ((i36 | 0) == (i18 | 0)) {
      break;
     }
    }
    HEAP32[i20 >> 2] = 0;
   }
   i18 = HEAP32[i22 >> 2] | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   HEAP32[i22 >> 2] = 0;
   HEAP32[i16 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i18);
  } else {
   HEAP32[i1 + 4 >> 2] = -4;
   HEAP32[i1 >> 2] = 0;
  }
 } while (0);
 i1 = HEAP32[i21 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i21 = i1 | 0;
 i12 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
 if ((i12 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i21 >> 2] = i12;
  STACKTOP = i4;
  return;
 }
}
function __ZNK3JSC8JSObject3getEPNS_9ExecStateENS_12PropertyNameE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = (i2 | 0) == 0;
 i15 = i13 + 16 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = i13 + 20 | 0;
 HEAP32[i16 >> 2] = -1;
 i17 = i13 + 24 | 0;
 HEAP32[i17 >> 2] = (i14 ? 0 : 0) | i2;
 HEAP32[i17 + 4 >> 2] = i14 ? -6 : -5;
 i14 = HEAP32[i4 >> 2] | 0;
 i4 = i3 + 16 | 0;
 i18 = i9 | 0;
 i19 = i11 | 0;
 i20 = i12 | 0;
 i21 = i2;
 while (1) {
  i22 = i21 | 0;
  i2 = HEAP32[i22 >> 2] | 0;
  if ((HEAP8[i2 + 53 | 0] & 32) == 0) {
   i23 = HEAP32[(HEAP32[i4 >> 2] & -65536) + 1076 >> 2] | 0;
   HEAP32[i18 >> 2] = i14;
   i24 = __ZN3JSC9Structure3getERNS_2VMENS_12PropertyNameERjRPNS_6JSCellE(i2, i23, i9, i7, i8) | 0;
   if ((i24 | 0) != -1) {
    i25 = 4;
    break;
   }
   HEAP32[i19 >> 2] = i14;
   if (__ZN3JSC8JSObject22getOwnPropertySlotSlowEPNS_9ExecStateENS_12PropertyNameERNS_12PropertySlotE(i21, i3, i11, i13) | 0) {
    break;
   }
  } else {
   i23 = HEAP32[i2 >> 2] | 0;
   if ((i23 | 0) != 0) {
    if ((i23 | 0) != (HEAP32[i23 >> 2] | 0)) {
     i25 = 13;
     break;
    }
   }
   i23 = HEAP32[(HEAP32[((HEAP32[(i21 & -65536) + 1048 >> 2] | 0) == 2 ? i21 + 8 | 0 : i2 + 32 | 0) >> 2] | 0) + 52 >> 2] | 0;
   HEAP32[i20 >> 2] = i14;
   if (FUNCTION_TABLE_iiiii[i23 & 1](i21, i3, i12, i13) | 0) {
    break;
   }
  }
  i23 = (HEAP32[i22 >> 2] | 0) + 8 | 0;
  i2 = HEAP32[i23 >> 2] | 0;
  if (!((i2 & 0 | 0) == 0 & (HEAP32[i23 + 4 >> 2] & -1 | 0) == (-5 | 0))) {
   i25 = 24;
   break;
  }
  i23 = i2;
  if ((HEAPU8[(HEAP32[i23 >> 2] | 0) + 52 | 0] | 0) >>> 0 <= 16 >>> 0) {
   i25 = 24;
   break;
  }
  i21 = i23;
 }
 L13 : do {
  if ((i25 | 0) == 24) {
   HEAP32[i1 + 4 >> 2] = -4;
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i5;
   return;
  } else if ((i25 | 0) == 4) {
   if ((i24 | 0) < 100) {
    i26 = i21 + (i24 + 1 << 3) | 0;
   } else {
    i26 = (HEAP32[i21 + 4 >> 2] | 0) - 8 + (99 - i24 << 3) | 0;
   }
   i12 = i26 | 0;
   i20 = HEAP32[i12 >> 2] | 0;
   i11 = HEAP32[i12 + 4 >> 2] | 0;
   i12 = i11;
   do {
    if ((HEAP8[(HEAP32[i22 >> 2] | 0) + 58 | 0] & 8) != 0 & ((i12 | 0) == (-5 | 0) & 0 == 0)) {
     if ((HEAP8[(HEAP32[i20 >> 2] | 0) + 52 | 0] | 0) != 8) {
      break;
     }
     i19 = i10 | 0;
     HEAP32[i19 >> 2] = i20 & -1;
     HEAP32[i19 + 4 >> 2] = i11 & 0 | -5;
     __ZN3JSC8JSObject22fillGetterPropertySlotERNS_12PropertySlotENS_7JSValueEji(i21, i13, i10, HEAP32[i7 >> 2] | 0, i24);
     break L13;
    }
   } while (0);
   i19 = HEAP32[i7 >> 2] | 0;
   i8 = i13 + 8 | 0;
   HEAP32[i8 >> 2] = i20 & -1;
   HEAP32[i8 + 4 >> 2] = i12 | i11 & 0;
   HEAP32[i13 >> 2] = i19;
   HEAP32[i13 + 32 >> 2] = i21;
   HEAP32[i15 >> 2] = 1;
   HEAP32[i16 >> 2] = i24;
  } else if ((i25 | 0) == 13) {
   _WTFCrash();
  }
 } while (0);
 i25 = HEAP32[i15 >> 2] | 0;
 if ((i25 | 0) == 1) {
  i15 = i13 + 8 | 0;
  i24 = HEAP32[i15 + 4 >> 2] | 0;
  i16 = i1 | 0;
  HEAP32[i16 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i16 + 4 >> 2] = i24;
  STACKTOP = i5;
  return;
 } else if ((i25 | 0) == 4) {
  i24 = i13 + 8 | 0;
  i16 = HEAP32[i13 + 32 >> 2] | 0;
  i15 = (i16 | 0) == 0;
  i21 = FUNCTION_TABLE_iiiiiii[HEAP32[i24 >> 2] & 1](i3, (i15 ? 0 : 0) | i16, (i15 ? -6 : -5) | 0, HEAP32[i17 >> 2] | 0, HEAP32[i17 + 4 >> 2] | 0, HEAP32[i24 + 4 >> 2] | 0) | 0;
  i24 = i1 | 0;
  HEAP32[i24 >> 2] = i21;
  HEAP32[i24 + 4 >> 2] = tempRet0;
  STACKTOP = i5;
  return;
 } else if ((i25 | 0) == 2) {
  __ZNK3JSC12PropertySlot14functionGetterEPNS_9ExecStateE(i1, i13, i3);
  STACKTOP = i5;
  return;
 } else {
  i25 = HEAP32[i13 + 8 >> 2] | 0;
  i24 = HEAP32[i13 + 32 >> 2] | 0;
  i13 = (i24 | 0) == 0;
  i21 = HEAP32[i17 >> 2] | 0;
  i15 = HEAP32[i17 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = i14;
  i14 = FUNCTION_TABLE_iiiiiii[i25 & 1](i3, (i13 ? 0 : 0) | i24, (i13 ? -6 : -5) | 0, i21, i15, i6) | 0;
  i6 = i1 | 0;
  HEAP32[i6 >> 2] = i14;
  HEAP32[i6 + 4 >> 2] = tempRet0;
  STACKTOP = i5;
  return;
 }
}
function __ZNK3JSC8JSObject3getEPNS_9ExecStateEj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = (i2 | 0) == 0;
 i10 = i8 + 16 | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i8 + 20 >> 2] = -1;
 i11 = i8 + 24 | 0;
 HEAP32[i11 >> 2] = (i9 ? 0 : 0) | i2;
 HEAP32[i11 + 4 >> 2] = i9 ? -6 : -5;
 i9 = i2;
 while (1) {
  i2 = i9 | 0;
  i12 = HEAP32[i2 >> 2] | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  if ((i13 | 0) != 0) {
   if ((i13 | 0) != (HEAP32[i13 >> 2] | 0)) {
    i14 = 4;
    break;
   }
  }
  if (FUNCTION_TABLE_iiiii[HEAP32[(HEAP32[((HEAP32[(i9 & -65536) + 1048 >> 2] | 0) == 2 ? i9 + 8 | 0 : i12 + 32 | 0) >> 2] | 0) + 56 >> 2] & 1](i9, i3, i4, i8) | 0) {
   i14 = 9;
   break;
  }
  i12 = (HEAP32[i2 >> 2] | 0) + 8 | 0;
  i2 = HEAP32[i12 >> 2] | 0;
  if (!((i2 & 0 | 0) == 0 & (HEAP32[i12 + 4 >> 2] & -1 | 0) == (-5 | 0))) {
   i14 = 17;
   break;
  }
  i12 = i2;
  if ((HEAPU8[(HEAP32[i12 >> 2] | 0) + 52 | 0] | 0) >>> 0 <= 16 >>> 0) {
   i14 = 17;
   break;
  }
  i9 = i12;
 }
 if ((i14 | 0) == 4) {
  _WTFCrash();
 } else if ((i14 | 0) == 9) {
  i9 = HEAP32[i10 >> 2] | 0;
  if ((i9 | 0) == 1) {
   i10 = i8 + 8 | 0;
   i12 = HEAP32[i10 + 4 >> 2] | 0;
   i2 = i1 | 0;
   HEAP32[i2 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i2 + 4 >> 2] = i12;
   STACKTOP = i5;
   return;
  } else if ((i9 | 0) == 4) {
   i12 = i8 + 8 | 0;
   i2 = HEAP32[i8 + 32 >> 2] | 0;
   i10 = (i2 | 0) == 0;
   i13 = FUNCTION_TABLE_iiiiiii[HEAP32[i12 >> 2] & 1](i3, (i10 ? 0 : 0) | i2, (i10 ? -6 : -5) | 0, HEAP32[i11 >> 2] | 0, HEAP32[i11 + 4 >> 2] | 0, HEAP32[i12 + 4 >> 2] | 0) | 0;
   i12 = i1 | 0;
   HEAP32[i12 >> 2] = i13;
   HEAP32[i12 + 4 >> 2] = tempRet0;
   STACKTOP = i5;
   return;
  } else if ((i9 | 0) == 2) {
   __ZNK3JSC12PropertySlot14functionGetterEPNS_9ExecStateE(i1, i8, i3);
   STACKTOP = i5;
   return;
  } else {
   i9 = HEAP32[i8 + 8 >> 2] | 0;
   i12 = HEAP32[i8 + 32 >> 2] | 0;
   i8 = (i12 | 0) == 0;
   i13 = HEAP32[i11 >> 2] | 0;
   i10 = HEAP32[i11 + 4 >> 2] | 0;
   __ZN3JSC10Identifier4fromEPNS_9ExecStateEj(i7, i3, i4);
   i4 = i7 | 0;
   HEAP32[i6 >> 2] = HEAP32[i4 >> 2];
   i7 = FUNCTION_TABLE_iiiiiii[i9 & 1](i3, (i8 ? 0 : 0) | i12, (i8 ? -6 : -5) | 0, i13, i10, i6) | 0;
   i6 = i1 | 0;
   HEAP32[i6 >> 2] = i7;
   HEAP32[i6 + 4 >> 2] = tempRet0;
   i6 = HEAP32[i4 >> 2] | 0;
   if ((i6 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i4 = i6 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    STACKTOP = i5;
    return;
   } else {
    HEAP32[i4 >> 2] = i7;
    STACKTOP = i5;
    return;
   }
  }
 } else if ((i14 | 0) == 17) {
  HEAP32[i1 + 4 >> 2] = -4;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore8SQLValueELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 <= i2 >>> 0) {
   if ((i7 + (i4 * 24 & -1) | 0) >>> 0 <= i2 >>> 0) {
    break;
   }
   i8 = HEAP32[i1 + 4 >> 2] | 0;
   i9 = i8 + 1 + (i8 >>> 2) | 0;
   i8 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
   __ZN3WTF6VectorIN7WebCore8SQLValueELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
   i8 = HEAP32[i6 >> 2] | 0;
   i10 = i8 + (((i2 - i7 | 0) / 24 & -1) * 24 & -1) | 0;
   i11 = i8;
   i12 = HEAP32[i3 >> 2] | 0;
   i13 = i11 + (i12 * 24 & -1) | 0;
   __ZN7WebCore8SQLValueC1ERKS0_(i13, i10);
   i14 = HEAP32[i3 >> 2] | 0;
   i15 = i14 + 1 | 0;
   HEAP32[i3 >> 2] = i15;
   return;
  }
 } while (0);
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = i7 + 1 + (i7 >>> 2) | 0;
 i7 = i4 >>> 0 > 16 >>> 0 ? i4 : 16;
 __ZN3WTF6VectorIN7WebCore8SQLValueELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i7 >>> 0 > i5 >>> 0 ? i7 : i5);
 i10 = i2;
 i11 = HEAP32[i6 >> 2] | 0;
 i12 = HEAP32[i3 >> 2] | 0;
 i13 = i11 + (i12 * 24 & -1) | 0;
 __ZN7WebCore8SQLValueC1ERKS0_(i13, i10);
 i14 = HEAP32[i3 >> 2] | 0;
 i15 = i14 + 1 | 0;
 HEAP32[i3 >> 2] = i15;
 return;
}
function __ZN3WTF6VectorIN7WebCore8SQLValueELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 * 24 & -1) | 0;
 if (i2 >>> 0 > 178956970 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 24 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 24 & -1;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   __ZN7WebCore8SQLValueC1ERKS0_(i7, i6);
   i2 = HEAP32[i6 + 16 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i8 = i2 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i2);
      break;
     } else {
      HEAP32[i8 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i2 = i6 + 24 | 0;
   if ((i2 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i2;
    i7 = i7 + 24 | 0;
   }
  }
 }
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function _memset(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = i1 + i3 | 0;
 if ((i3 | 0) >= 20) {
  i2 = i2 & 255;
  i5 = i1 & 3;
  i6 = i2 | i2 << 8 | i2 << 16 | i2 << 24;
  i7 = i4 & ~3;
  if (i5) {
   i5 = i1 + 4 - i5 | 0;
   while ((i1 | 0) < (i5 | 0)) {
    HEAP8[i1] = i2;
    i1 = i1 + 1 | 0;
   }
  }
  while ((i1 | 0) < (i7 | 0)) {
   HEAP32[i1 >> 2] = i6;
   i1 = i1 + 4 | 0;
  }
 }
 while ((i1 | 0) < (i4 | 0)) {
  HEAP8[i1] = i2;
  i1 = i1 + 1 | 0;
 }
 return i1 - i3 | 0;
}
function _memcpy(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1 | 0;
 if ((i1 & 3) == (i2 & 3)) {
  while (i1 & 3) {
   if ((i3 | 0) == 0) return i4 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
   i1 = i1 + 1 | 0;
   i2 = i2 + 1 | 0;
   i3 = i3 - 1 | 0;
  }
  while ((i3 | 0) >= 4) {
   HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
   i1 = i1 + 4 | 0;
   i2 = i2 + 4 | 0;
   i3 = i3 - 4 | 0;
  }
 }
 while ((i3 | 0) > 0) {
  HEAP8[i1] = HEAP8[i2] | 0;
  i1 = i1 + 1 | 0;
  i2 = i2 + 1 | 0;
  i3 = i3 - 1 | 0;
 }
 return i4 | 0;
}
function copyTempDouble(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
 HEAP8[tempDoublePtr + 4 | 0] = HEAP8[i1 + 4 | 0];
 HEAP8[tempDoublePtr + 5 | 0] = HEAP8[i1 + 5 | 0];
 HEAP8[tempDoublePtr + 6 | 0] = HEAP8[i1 + 6 | 0];
 HEAP8[tempDoublePtr + 7 | 0] = HEAP8[i1 + 7 | 0];
}
function dynCall_iiiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 return FUNCTION_TABLE_iiiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function b2(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(2);
 return 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function _strlen(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1;
 while (HEAP8[i2] | 0) {
  i2 = i2 + 1 | 0;
 }
 return i2 - i1 | 0;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function b3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(3);
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
}
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function stackRestore(i1) {
 i1 = i1 | 0;
 STACKTOP = i1;
}
function setTempRet9(i1) {
 i1 = i1 | 0;
 tempRet9 = i1;
}
function setTempRet8(i1) {
 i1 = i1 | 0;
 tempRet8 = i1;
}
function setTempRet7(i1) {
 i1 = i1 | 0;
 tempRet7 = i1;
}
function setTempRet6(i1) {
 i1 = i1 | 0;
 tempRet6 = i1;
}
function setTempRet5(i1) {
 i1 = i1 | 0;
 tempRet5 = i1;
}
function setTempRet4(i1) {
 i1 = i1 | 0;
 tempRet4 = i1;
}
function setTempRet3(i1) {
 i1 = i1 | 0;
 tempRet3 = i1;
}
function setTempRet2(i1) {
 i1 = i1 | 0;
 tempRet2 = i1;
}
function setTempRet1(i1) {
 i1 = i1 | 0;
 tempRet1 = i1;
}
function setTempRet0(i1) {
 i1 = i1 | 0;
 tempRet0 = i1;
}
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b4() {
 abort(4);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1];
  var FUNCTION_TABLE_iiiiiii = [b2,b2];
  var FUNCTION_TABLE_iiiii = [b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_vi: dynCall_vi, dynCall_iiiiiii: dynCall_iiiiiii, dynCall_iiiii: dynCall_iiiii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_vi": invoke_vi, "invoke_iiiiiii": invoke_iiiiiii, "invoke_iiiii": invoke_iiiii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = asm["dynCall_iiiiiii"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
// Warning: printing of i64 values may be slightly rounded! No deep i64 math used, so precise i64 code not included
var i64Math = null;
// === Auto-generated postamble setup entry stuff ===
function run(args) {
  initRuntime();
}
Module['run'] = run;
// {{PRE_RUN_ADDITIONS}}
run();
// {{POST_RUN_ADDITIONS}}
  // {{MODULE_ADDITIONS}}
  return Module;
});
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN3WTF6VectorIN7WebCore8SQLValueELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZNK3JSC8JSObject3getEPNS_9ExecStateENS_12PropertyNameE","_memset","__ZN3WTF6VectorIN7WebCore8SQLValueELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_","__ZNK3JSC8JSObject3getEPNS_9ExecStateEj","_memcpy","__ZN7WebCore16JSSQLTransaction10executeSqlEPN3JSC9ExecStateE"]
