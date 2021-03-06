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
var __ZN7WebCore25CustomFilterParameterListC1Ev;
var __ZN7WebCore25CustomFilterParameterListC1Ej;
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
var Math_min = Math.min;
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiidi(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiidi"](index,a1,a2,a3,a4,a5);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vii(index,a1,a2) {
  try {
    Module["dynCall_vii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
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
  var invoke_vi=env.invoke_vi;
  var invoke_viiidi=env.invoke_viiidi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore25CustomFilterParameterList5blendERKS0_dRKNS_10LayoutSizeERS0_(i1, i2, d3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i2 + 8 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i10 = 0;
  } else {
   i11 = i1 + 8 | 0;
   i12 = i2 | 0;
   i13 = i1 | 0;
   i14 = i5 | 0;
   i15 = i5 + 8 | 0;
   i16 = i5 + 4 | 0;
   i17 = i5 | 0;
   i18 = i7 | 0;
   i19 = 0;
   i20 = 0;
   i21 = i9;
   L3 : while (1) {
    i22 = i20;
    i23 = i21;
    while (1) {
     if (i22 >>> 0 >= (HEAP32[i11 >> 2] | 0) >>> 0) {
      i24 = i22;
      i25 = i19;
      i26 = i23;
      break L3;
     }
     i27 = HEAP32[(HEAP32[i12 >> 2] | 0) + (i19 << 2) >> 2] | 0;
     i28 = HEAP32[(HEAP32[i13 >> 2] | 0) + (i22 << 2) >> 2] | 0;
     i29 = i27 + 8 | 0;
     i30 = i28 + 8 | 0;
     if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i29 >> 2] | 0, HEAP32[i30 >> 2] | 0) | 0) {
      i31 = 8;
      break;
     }
     i32 = __ZN3WTF24codePointCompareLessThanERKNS_6StringES2_(i29, i30) | 0;
     i33 = HEAP32[i15 >> 2] | 0;
     i34 = (i33 | 0) == (HEAP32[i16 >> 2] | 0);
     if (i32) {
      i31 = 19;
      break;
     }
     do {
      if (i34) {
       __ZN3WTF6VectorINS_6RefPtrIN7WebCore21CustomFilterParameterEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i14, i33 + 1 | 0);
       HEAP32[(HEAP32[i17 >> 2] | 0) + (HEAP32[i15 >> 2] << 2) >> 2] = i28;
       if ((i28 | 0) == 0) {
        break;
       }
       i32 = i28 + 4 | 0;
       HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
      } else {
       HEAP32[(HEAP32[i17 >> 2] | 0) + (i33 << 2) >> 2] = i28;
       if ((i28 | 0) == 0) {
        break;
       }
       i32 = i28 + 4 | 0;
       HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
      }
     } while (0);
     HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
     i32 = i22 + 1 | 0;
     i30 = HEAP32[i8 >> 2] | 0;
     if (i19 >>> 0 < i30 >>> 0) {
      i22 = i32;
      i23 = i30;
     } else {
      i24 = i32;
      i25 = i19;
      i26 = i30;
      break L3;
     }
    }
    if ((i31 | 0) == 19) {
     i31 = 0;
     do {
      if (i34) {
       __ZN3WTF6VectorINS_6RefPtrIN7WebCore21CustomFilterParameterEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i14, i33 + 1 | 0);
       HEAP32[(HEAP32[i17 >> 2] | 0) + (HEAP32[i15 >> 2] << 2) >> 2] = i27;
       if ((i27 | 0) == 0) {
        break;
       }
       i23 = i27 + 4 | 0;
       HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
      } else {
       HEAP32[(HEAP32[i17 >> 2] | 0) + (i33 << 2) >> 2] = i27;
       if ((i27 | 0) == 0) {
        break;
       }
       i23 = i27 + 4 | 0;
       HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
      }
     } while (0);
     HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
     i35 = i22;
    } else if ((i31 | 0) == 8) {
     i31 = 0;
     FUNCTION_TABLE_viiidi[HEAP32[(HEAP32[i28 >> 2] | 0) + 8 >> 2] & 1](i7, i28, i27, d3, i4);
     i23 = HEAP32[i15 >> 2] | 0;
     if ((i23 | 0) == (HEAP32[i16 >> 2] | 0)) {
      __ZN3WTF6VectorINS_6RefPtrIN7WebCore21CustomFilterParameterEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i14, i23 + 1 | 0);
      i30 = (HEAP32[i17 >> 2] | 0) + (HEAP32[i15 >> 2] << 2) | 0;
      i32 = HEAP32[i18 >> 2] | 0;
      HEAP32[i18 >> 2] = 0;
      HEAP32[i30 >> 2] = i32;
     } else {
      i32 = (HEAP32[i17 >> 2] | 0) + (i23 << 2) | 0;
      i23 = HEAP32[i18 >> 2] | 0;
      HEAP32[i18 >> 2] = 0;
      HEAP32[i32 >> 2] = i23;
     }
     HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
     i23 = HEAP32[i18 >> 2] | 0;
     do {
      if ((i23 | 0) != 0) {
       i32 = i23 + 4 | 0;
       i30 = i32 | 0;
       i29 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
       if ((i29 | 0) != 0) {
        HEAP32[i30 >> 2] = i29;
        break;
       }
       i29 = i32 - 4 | 0;
       if ((i29 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i29 >> 2] | 0) + 4 >> 2] & 3](i29);
      }
     } while (0);
     i35 = i22 + 1 | 0;
    }
    i23 = i19 + 1 | 0;
    i29 = HEAP32[i8 >> 2] | 0;
    if (i23 >>> 0 < i29 >>> 0) {
     i19 = i23;
     i20 = i35;
     i21 = i29;
    } else {
     i24 = i35;
     i25 = i23;
     i26 = i29;
     break;
    }
   }
   if (i25 >>> 0 >= i26 >>> 0) {
    i10 = i24;
    break;
   }
   i21 = i5 | 0;
   i20 = i2 | 0;
   i19 = i5 + 8 | 0;
   i18 = i5 + 4 | 0;
   i15 = i5 | 0;
   i17 = i25;
   i14 = HEAP32[i19 >> 2] | 0;
   while (1) {
    i16 = (HEAP32[i20 >> 2] | 0) + (i17 << 2) | 0;
    if ((i14 | 0) == (HEAP32[i18 >> 2] | 0)) {
     i13 = i14 + 1 | 0;
     i12 = HEAP32[i15 >> 2] | 0;
     do {
      if (i12 >>> 0 > i16 >>> 0) {
       i31 = 39;
      } else {
       if ((i12 + (i14 << 2) | 0) >>> 0 <= i16 >>> 0) {
        i31 = 39;
        break;
       }
       __ZN3WTF6VectorINS_6RefPtrIN7WebCore21CustomFilterParameterEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i21, i13);
       i11 = HEAP32[i15 >> 2] | 0;
       i36 = i11 + (i16 - i12 >> 2 << 2) | 0;
       i37 = i11;
      }
     } while (0);
     if ((i31 | 0) == 39) {
      i31 = 0;
      __ZN3WTF6VectorINS_6RefPtrIN7WebCore21CustomFilterParameterEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i21, i13);
      i36 = i16;
      i37 = HEAP32[i15 >> 2] | 0;
     }
     i12 = HEAP32[i36 >> 2] | 0;
     HEAP32[i37 + (HEAP32[i19 >> 2] << 2) >> 2] = i12;
     if ((i12 | 0) != 0) {
      i22 = i12 + 4 | 0;
      HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
     }
    } else {
     i22 = HEAP32[i16 >> 2] | 0;
     HEAP32[(HEAP32[i15 >> 2] | 0) + (i14 << 2) >> 2] = i22;
     if ((i22 | 0) != 0) {
      i12 = i22 + 4 | 0;
      HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
     }
    }
    i12 = (HEAP32[i19 >> 2] | 0) + 1 | 0;
    HEAP32[i19 >> 2] = i12;
    i22 = i17 + 1 | 0;
    if (i22 >>> 0 < (HEAP32[i8 >> 2] | 0) >>> 0) {
     i17 = i22;
     i14 = i12;
    } else {
     i10 = i24;
     break;
    }
   }
  }
 } while (0);
 i24 = i1 + 8 | 0;
 if (i10 >>> 0 >= (HEAP32[i24 >> 2] | 0) >>> 0) {
  STACKTOP = i6;
  return;
 }
 i8 = i5 | 0;
 i37 = i1 | 0;
 i1 = i5 + 8 | 0;
 i36 = i5 + 4 | 0;
 i25 = i5 | 0;
 i5 = i10;
 i10 = HEAP32[i1 >> 2] | 0;
 while (1) {
  i2 = (HEAP32[i37 >> 2] | 0) + (i5 << 2) | 0;
  if ((i10 | 0) == (HEAP32[i36 >> 2] | 0)) {
   i26 = i10 + 1 | 0;
   i35 = HEAP32[i25 >> 2] | 0;
   do {
    if (i35 >>> 0 > i2 >>> 0) {
     i31 = 51;
    } else {
     if ((i35 + (i10 << 2) | 0) >>> 0 <= i2 >>> 0) {
      i31 = 51;
      break;
     }
     __ZN3WTF6VectorINS_6RefPtrIN7WebCore21CustomFilterParameterEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i8, i26);
     i4 = HEAP32[i25 >> 2] | 0;
     i38 = i4 + (i2 - i35 >> 2 << 2) | 0;
     i39 = i4;
    }
   } while (0);
   if ((i31 | 0) == 51) {
    i31 = 0;
    __ZN3WTF6VectorINS_6RefPtrIN7WebCore21CustomFilterParameterEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i8, i26);
    i38 = i2;
    i39 = HEAP32[i25 >> 2] | 0;
   }
   i35 = HEAP32[i38 >> 2] | 0;
   HEAP32[i39 + (HEAP32[i1 >> 2] << 2) >> 2] = i35;
   if ((i35 | 0) != 0) {
    i4 = i35 + 4 | 0;
    HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
   }
  } else {
   i4 = HEAP32[i2 >> 2] | 0;
   HEAP32[(HEAP32[i25 >> 2] | 0) + (i10 << 2) >> 2] = i4;
   if ((i4 | 0) != 0) {
    i35 = i4 + 4 | 0;
    HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 1;
   }
  }
  i10 = (HEAP32[i1 >> 2] | 0) + 1 | 0;
  HEAP32[i1 >> 2] = i10;
  i5 = i5 + 1 | 0;
  if (i5 >>> 0 >= (HEAP32[i24 >> 2] | 0) >>> 0) {
   break;
  }
 }
 STACKTOP = i6;
 return;
}
function __ZN3WTF24codePointCompareLessThanERKNS_6StringES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i2 = (i1 | 0) != 0;
 if ((i3 | 0) == 0) {
  if (!i2) {
   i4 = 0;
   i5 = (i4 | 0) < 0;
   return i5 | 0;
  }
  i4 = ((HEAP32[i1 + 4 >> 2] | 0) != 0) << 31 >> 31;
  i5 = (i4 | 0) < 0;
  return i5 | 0;
 }
 if (!i2) {
  i4 = (HEAP32[i3 + 4 >> 2] | 0) != 0 | 0;
  i5 = (i4 | 0) < 0;
  return i5 | 0;
 }
 i2 = (HEAP32[i1 + 16 >> 2] & 32 | 0) != 0;
 if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
  if (i2) {
   i6 = HEAP32[i1 + 4 >> 2] | 0;
   i7 = HEAP32[i3 + 4 >> 2] | 0;
   i8 = i7 >>> 0 > i6 >>> 0 ? i6 : i7;
   L16 : do {
    if ((i8 | 0) == 0) {
     i9 = 28;
    } else {
     i10 = HEAP32[i1 + 8 >> 2] | 0;
     i11 = HEAP32[i3 + 8 >> 2] | 0;
     i12 = 0;
     while (1) {
      i13 = HEAPU8[i10] | 0;
      i14 = HEAPU16[i11 >> 1] | 0;
      if ((i13 | 0) != (i14 | 0)) {
       break;
      }
      i15 = i12 + 1 | 0;
      if (i15 >>> 0 < i8 >>> 0) {
       i10 = i10 + 1 | 0;
       i11 = i11 + 2 | 0;
       i12 = i15;
      } else {
       i9 = 28;
       break L16;
      }
     }
     i16 = i13 >>> 0 > i14 >>> 0 ? 1 : -1;
    }
   } while (0);
   do {
    if ((i9 | 0) == 28) {
     if ((i7 | 0) == (i6 | 0)) {
      i16 = 0;
      break;
     }
     i16 = i7 >>> 0 < i6 >>> 0 ? 1 : -1;
    }
   } while (0);
   i4 = -i16 | 0;
   i5 = (i4 | 0) < 0;
   return i5 | 0;
  }
  i16 = HEAP32[i3 + 4 >> 2] | 0;
  i6 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i16 >>> 0 < i6 >>> 0 ? i16 : i6;
  L28 : do {
   if ((i7 | 0) != 0) {
    i9 = HEAP32[i3 + 8 >> 2] | 0;
    i14 = HEAP32[i1 + 8 >> 2] | 0;
    i13 = 0;
    while (1) {
     i17 = HEAP16[i9 >> 1] | 0;
     i18 = HEAP16[i14 >> 1] | 0;
     if (i17 << 16 >> 16 != i18 << 16 >> 16) {
      break;
     }
     i8 = i13 + 1 | 0;
     if (i8 >>> 0 < i7 >>> 0) {
      i9 = i9 + 2 | 0;
      i14 = i14 + 2 | 0;
      i13 = i8;
     } else {
      break L28;
     }
    }
    i4 = (i17 & 65535) >>> 0 > (i18 & 65535) >>> 0 ? 1 : -1;
    i5 = (i4 | 0) < 0;
    return i5 | 0;
   }
  } while (0);
  if ((i16 | 0) == (i6 | 0)) {
   i4 = 0;
   i5 = (i4 | 0) < 0;
   return i5 | 0;
  }
  i4 = i16 >>> 0 > i6 >>> 0 ? 1 : -1;
  i5 = (i4 | 0) < 0;
  return i5 | 0;
 }
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 i16 = HEAP32[i3 + 8 >> 2] | 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if (i2) {
  i2 = i6 >>> 0 < i3 >>> 0 ? i6 : i3;
  L43 : do {
   if ((i2 | 0) != 0) {
    i18 = i16;
    i17 = HEAP32[i1 + 8 >> 2] | 0;
    i7 = 0;
    while (1) {
     i19 = HEAP8[i18] | 0;
     i20 = HEAP8[i17] | 0;
     if (i19 << 24 >> 24 != i20 << 24 >> 24) {
      break;
     }
     i13 = i7 + 1 | 0;
     if (i13 >>> 0 < i2 >>> 0) {
      i18 = i18 + 1 | 0;
      i17 = i17 + 1 | 0;
      i7 = i13;
     } else {
      break L43;
     }
    }
    i4 = (i19 & 255) >>> 0 > (i20 & 255) >>> 0 ? 1 : -1;
    i5 = (i4 | 0) < 0;
    return i5 | 0;
   }
  } while (0);
  if ((i6 | 0) == (i3 | 0)) {
   i4 = 0;
   i5 = (i4 | 0) < 0;
   return i5 | 0;
  }
  i4 = i6 >>> 0 > i3 >>> 0 ? 1 : -1;
  i5 = (i4 | 0) < 0;
  return i5 | 0;
 } else {
  i20 = i3 >>> 0 > i6 >>> 0 ? i6 : i3;
  L56 : do {
   if ((i20 | 0) != 0) {
    i19 = i16;
    i2 = HEAP32[i1 + 8 >> 2] | 0;
    i7 = 0;
    while (1) {
     i21 = HEAPU8[i19] | 0;
     i22 = HEAPU16[i2 >> 1] | 0;
     if ((i21 | 0) != (i22 | 0)) {
      break;
     }
     i17 = i7 + 1 | 0;
     if (i17 >>> 0 < i20 >>> 0) {
      i19 = i19 + 1 | 0;
      i2 = i2 + 2 | 0;
      i7 = i17;
     } else {
      break L56;
     }
    }
    i4 = i21 >>> 0 > i22 >>> 0 ? 1 : -1;
    i5 = (i4 | 0) < 0;
    return i5 | 0;
   }
  } while (0);
  if ((i3 | 0) == (i6 | 0)) {
   i4 = 0;
   i5 = (i4 | 0) < 0;
   return i5 | 0;
  }
  i4 = i3 >>> 0 < i6 >>> 0 ? 1 : -1;
  i5 = (i4 | 0) < 0;
  return i5 | 0;
 }
 return 0;
}
function __ZNK7WebCore25CustomFilterParameterListeqERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 if ((i4 | 0) != (HEAP32[i5 >> 2] | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 if ((i4 | 0) == 0) {
  i6 = 1;
  return i6 | 0;
 }
 i7 = i1 | 0;
 i1 = i2 | 0;
 i2 = 0;
 i8 = i4;
 i9 = i4;
 while (1) {
  i4 = HEAP32[(HEAP32[i7 >> 2] | 0) + (i2 << 2) >> 2] | 0;
  if (i8 >>> 0 <= i2 >>> 0) {
   i10 = 5;
   break;
  }
  i11 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 << 2) >> 2] | 0;
  if ((i4 | 0) == (i11 | 0)) {
   i12 = i9;
  } else {
   if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 1](i4, i11) | 0)) {
    i6 = 0;
    i10 = 13;
    break;
   }
   i12 = HEAP32[i3 >> 2] | 0;
  }
  i11 = i2 + 1 | 0;
  if (i11 >>> 0 >= i12 >>> 0) {
   i6 = 1;
   i10 = 15;
   break;
  }
  i2 = i11;
  i8 = HEAP32[i5 >> 2] | 0;
  i9 = i12;
 }
 if ((i10 | 0) == 5) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i10 | 0) == 13) {
  return i6 | 0;
 } else if ((i10 | 0) == 15) {
  return i6 | 0;
 }
 return 0;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore21CustomFilterParameterEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 + (i4 >>> 2) | 0;
 i6 = i5 >>> 0 > 16 >>> 0 ? i5 : 16;
 i5 = i6 >>> 0 > i2 >>> 0 ? i6 : i2;
 if (i4 >>> 0 >= i5 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if (i5 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
 HEAP32[i3 >> 2] = i1 >>> 2;
 i5 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i4 >> 2] = i5;
 i1 = i2;
 _memcpy(i5 | 0, i1 | 0, i6 << 2) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore25CustomFilterParameterList22checkAlphabeticalOrderEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 i3 = i1 | 0;
 i1 = 1;
 while (1) {
  if (i1 >>> 0 >= i2 >>> 0) {
   i4 = 1;
   i5 = 7;
   break;
  }
  i6 = i1 - 1 | 0;
  if (i2 >>> 0 <= i6 >>> 0) {
   i5 = 4;
   break;
  }
  i7 = HEAP32[i3 >> 2] | 0;
  if (__ZN3WTF24codePointCompareLessThanERKNS_6StringES2_((HEAP32[i7 + (i6 << 2) >> 2] | 0) + 8 | 0, (HEAP32[i7 + (i1 << 2) >> 2] | 0) + 8 | 0) | 0) {
   i1 = i1 + 1 | 0;
  } else {
   i4 = 0;
   i5 = 8;
   break;
  }
 }
 if ((i5 | 0) == 7) {
  return i4 | 0;
 } else if ((i5 | 0) == 8) {
  return i4 | 0;
 } else if ((i5 | 0) == 4) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 return 0;
}
function __ZN7WebCore25CustomFilterParameterListC2Ej(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 | 0;
 HEAP32[i3 >> 2] = 0;
 i4 = i1 + 4 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i1 + 8 | 0;
 HEAP32[i5 >> 2] = i2;
 if ((i2 | 0) == 0) {
  return;
 }
 if (i2 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
 HEAP32[i4 >> 2] = i1 >>> 2;
 i4 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i3 >> 2] = i4;
 if ((i4 | 0) == 0) {
  return;
 }
 _memset(i4 | 0, 0, HEAP32[i5 >> 2] << 2 | 0) | 0;
 return;
}
function __ZN7WebCore25CustomFilterParameterListC1Ej(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 | 0;
 HEAP32[i3 >> 2] = 0;
 i4 = i1 + 4 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i1 + 8 | 0;
 HEAP32[i5 >> 2] = i2;
 if ((i2 | 0) == 0) {
  return;
 }
 if (i2 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
 HEAP32[i4 >> 2] = i1 >>> 2;
 i4 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i3 >> 2] = i4;
 if ((i4 | 0) == 0) {
  return;
 }
 _memset(i4 | 0, 0, HEAP32[i5 >> 2] << 2 | 0) | 0;
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
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viiidi(i1, i2, i3, i4, d5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiidi[i1 & 1](i2 | 0, i3 | 0, i4 | 0, +d5, i6 | 0);
}
function __ZN7WebCore25CustomFilterParameterListC2Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 return;
}
function __ZN7WebCore25CustomFilterParameterListC1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 return;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
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
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function b1(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 abort(1);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 3](i2 | 0);
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
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
}
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
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
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
}
function b4() {
 abort(4);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore25CustomFilterParameterListC2Ev,b0];
  var FUNCTION_TABLE_viiidi = [b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore25CustomFilterParameterListC2Ej,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_viiidi: dynCall_viiidi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_viiidi": invoke_viiidi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_viiidi = Module["dynCall_viiidi"] = asm["dynCall_viiidi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZNK7WebCore25CustomFilterParameterList5blendERKS0_dRKNS_10LayoutSizeERS0_","__ZN7WebCore25CustomFilterParameterListC2Ej","__ZNK7WebCore25CustomFilterParameterListeqERKS0_","_memset","__ZN3WTF6VectorINS_6RefPtrIN7WebCore21CustomFilterParameterEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","_memcpy","__ZN7WebCore25CustomFilterParameterListC2Ev","__ZNK7WebCore25CustomFilterParameterList22checkAlphabeticalOrderEv","__ZN3WTF24codePointCompareLessThanERKNS_6StringES2_"]
