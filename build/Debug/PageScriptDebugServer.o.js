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
H_BASE = parentModule["_malloc"](96 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 96;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore21PageScriptDebugServerC1Ev;
var __ZN7WebCore21PageScriptDebugServerD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
;
;
;
;
;
;
;
;
var Math_min = Math.min;
function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
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
function invoke_viii(index,a1,a2,a3) {
  try {
    Module["dynCall_viii"](index,a1,a2,a3);
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
  var __ZTVN7WebCore21PageScriptDebugServerE=(H_BASE+8)|0;
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
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN3WTF9HashTableIPN7WebCore4PageENS_12KeyValuePairIS3_NS_6OwnPtrINS_7HashSetIPNS1_19ScriptDebugListenerENS_7PtrHashIS8_EENS_10HashTraitsIS8_EEEEEEEENS_24KeyValuePairKeyExtractorISF_EENS9_IS3_EENS_7HashMapIS3_SE_SI_NSB_IS3_EENSB_ISE_EEE18KeyValuePairTraitsESK_E3addINS_17HashMapTranslatorISN_SI_EERKS3_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS3_SF_SH_SI_SN_SK_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i7 = 8;
  } else {
   i8 = i6 << 1;
   i7 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i8 | 0) ? i6 : i8;
  }
  __ZN3WTF9HashTableIPN7WebCore4PageENS_12KeyValuePairIS3_NS_6OwnPtrINS_7HashSetIPNS1_19ScriptDebugListenerENS_7PtrHashIS8_EENS_10HashTraitsIS8_EEEEEEEENS_24KeyValuePairKeyExtractorISF_EENS9_IS3_EENS_7HashMapIS3_SE_SI_NSB_IS3_EENSB_ISE_EEE18KeyValuePairTraitsESK_E6rehashEiPSF_(i2, i7, 0) | 0;
  i9 = HEAP32[i4 >> 2] | 0;
 } else {
  i9 = i5;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i8 = i7;
 i6 = i8 + ~(i8 << 15) | 0;
 i8 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i8 >>> 6 ^ i8;
 i8 = i6 + ~(i6 << 11) | 0;
 i6 = i8 >>> 16 ^ i8;
 i8 = i6 & i5;
 i10 = i9 + (i8 << 3) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i10;
   i13 = i7;
  } else {
   i14 = (i6 >>> 23) + ~i6 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i8;
   i18 = i10;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i7 | 0)) {
     i20 = 8;
     break;
    }
    i21 = (i19 | 0) == -1 ? i18 : i16;
    i22 = (i15 | 0) == 0 ? i14 : i15;
    i23 = i22 + i17 & i5;
    i24 = i9 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i20 = 10;
     break;
    } else {
     i15 = i22;
     i16 = i21;
     i17 = i23;
     i18 = i24;
     i19 = i25;
    }
   }
   if ((i20 | 0) == 8) {
    i19 = i9 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i20 | 0) == 10) {
    if ((i21 | 0) == 0) {
     i12 = i24;
     i13 = i7;
     break;
    }
    i19 = i21;
    HEAP32[i19 >> 2] = 0;
    HEAP32[i19 + 4 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i12 = i21;
    i13 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i12 >> 2] = i13;
 i13 = i12 + 4 | 0;
 i3 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 if ((i3 | 0) != 0) {
  i13 = HEAP32[i3 >> 2] | 0;
  if ((i13 | 0) != 0) {
   __ZN3WTF8fastFreeEPv(i13);
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i2 + 12 | 0;
 i13 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i13;
 i3 = i2 + 4 | 0;
 i21 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i13 << 1 | 0) < (i21 | 0)) {
  i26 = i12;
  i27 = i21;
 } else {
  if ((i21 | 0) == 0) {
   i28 = 8;
  } else {
   i7 = i21 << 1;
   i28 = (i13 * 6 & -1 | 0) < (i7 | 0) ? i21 : i7;
  }
  i7 = __ZN3WTF9HashTableIPN7WebCore4PageENS_12KeyValuePairIS3_NS_6OwnPtrINS_7HashSetIPNS1_19ScriptDebugListenerENS_7PtrHashIS8_EENS_10HashTraitsIS8_EEEEEEEENS_24KeyValuePairKeyExtractorISF_EENS9_IS3_EENS_7HashMapIS3_SE_SI_NSB_IS3_EENSB_ISE_EEE18KeyValuePairTraitsESK_E6rehashEiPSF_(i2, i28, i12) | 0;
  i26 = i7;
  i27 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i4 >> 2] | 0) + (i27 << 3) | 0;
 i27 = i1;
 HEAP32[i27 >> 2] = i26;
 HEAP32[i27 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore4PageENS_12KeyValuePairIS3_NS_6OwnPtrINS_7HashSetIPNS1_19ScriptDebugListenerENS_7PtrHashIS8_EENS_10HashTraitsIS8_EEEEEEEENS_24KeyValuePairKeyExtractorISF_EENS9_IS3_EENS_7HashMapIS3_SE_SI_NSB_IS3_EENSB_ISE_EEE18KeyValuePairTraitsESK_E6rehashEiPSF_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i8 = 0;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i2 = i7 + (i10 << 3) | 0;
  i12 = i2 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L8 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 6;
    } else {
     i24 = (i18 >>> 23) + ~i18 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i14;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L8;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 3) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 6;
       break;
      } else {
       i25 = i31;
       i26 = i32;
       i27 = i33;
       i28 = i34;
       i29 = i35;
      }
     }
    }
   } while (0);
   if ((i23 | 0) == 6) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i16 = i30 + 4 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i36 = i13;
   } else {
    i20 = HEAP32[i17 >> 2] | 0;
    if ((i20 | 0) != 0) {
     __ZN3WTF8fastFreeEPv(i20);
    }
    __ZN3WTF8fastFreeEPv(i17);
    i36 = HEAP32[i12 >> 2] | 0;
   }
   HEAP32[i30 >> 2] = i36;
   i17 = i7 + (i10 << 3) + 4 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i16 >> 2] = i20;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i20 = i10 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i20;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i37 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i37 << 3) >> 2] | 0) != -1) {
    i1 = HEAP32[i7 + (i37 << 3) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) != 0) {
     __ZN3WTF8fastFreeEPv(i11);
    }
    __ZN3WTF8fastFreeEPv(i1);
   }
  } while (0);
  i2 = i37 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i37 = i2;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableIPN7WebCore19ScriptDebugListenerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = 8;
  } else {
   i9 = i7 << 1;
   i8 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i9 | 0) ? i7 : i9;
  }
  __ZN3WTF9HashTableIPN7WebCore19ScriptDebugListenerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i8;
 i9 = i3 + ~(i3 << 15) | 0;
 i3 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i3 >>> 6 ^ i3;
 i3 = i9 + ~(i9 << 11) | 0;
 i9 = i3 >>> 16 ^ i3;
 i3 = i9 & i6;
 i7 = i10 + (i3 << 2) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i7;
   i13 = 11;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i7;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 8;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 10;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 8) {
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i13 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 11;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   }
  }
 } while (0);
 if ((i13 | 0) == 11) {
  i25 = i12;
  i26 = i2 + 16 | 0;
 }
 HEAP32[i25 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i12;
 i4 = i2 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i26 >> 2] | 0) + i12 << 1 | 0) < (i13 | 0)) {
  i27 = i25;
  i28 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i29 = 8;
  } else {
   i26 = i13 << 1;
   i29 = (i12 * 6 & -1 | 0) < (i26 | 0) ? i13 : i26;
  }
  i26 = __ZN3WTF9HashTableIPN7WebCore19ScriptDebugListenerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
  i27 = i26;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore21PageScriptDebugServer14removeListenerEPNS_19ScriptDebugListenerEPNS_4PageE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = i2;
 i2 = i1 + 200 | 0;
 i6 = i2 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = HEAP32[i1 + 204 >> 2] | 0;
  i9 = i8 << 3 | 0;
  i10 = 0;
  i11 = i8;
 } else {
  i8 = HEAP32[i1 + 208 >> 2] | 0;
  i12 = i3;
  i13 = i12 + ~(i12 << 15) | 0;
  i12 = (i13 >>> 10 ^ i13) * 9 & -1;
  i13 = i12 >>> 6 ^ i12;
  i12 = i13 + ~(i13 << 11) | 0;
  i13 = i12 >>> 16 ^ i12;
  i12 = i8 & i13;
  i14 = i7 + (i12 << 3) | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  L4 : do {
   if ((i15 | 0) == (i3 | 0)) {
    i16 = i14;
   } else {
    i17 = (i13 >>> 23) + ~i13 | 0;
    i18 = i17 << 12 ^ i17;
    i17 = i18 >>> 7 ^ i18;
    i18 = i17 << 2 ^ i17;
    i17 = i18 >>> 20 ^ i18 | 1;
    i18 = 0;
    i19 = i12;
    i20 = i15;
    while (1) {
     if ((i20 | 0) == 0) {
      i16 = 0;
      break L4;
     }
     i21 = (i18 | 0) == 0 ? i17 : i18;
     i22 = i21 + i19 & i8;
     i23 = i7 + (i22 << 3) | 0;
     i24 = HEAP32[i23 >> 2] | 0;
     if ((i24 | 0) == (i3 | 0)) {
      i16 = i23;
      break;
     } else {
      i18 = i21;
      i19 = i22;
      i20 = i24;
     }
    }
   }
  } while (0);
  i8 = HEAP32[i1 + 204 >> 2] | 0;
  i9 = (i16 | 0) == 0 ? i7 + (i8 << 3) | 0 : i16;
  i10 = i7;
  i11 = i8;
 }
 i8 = i1 + 204 | 0;
 if ((i9 | 0) == (i10 + (i11 << 3) | 0)) {
  STACKTOP = i4;
  return;
 }
 i11 = i9 + 4 | 0;
 i10 = HEAP32[i11 >> 2] | 0;
 __ZN3WTF7HashSetIPN7WebCore19ScriptDebugListenerENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i10, i5) | 0;
 if ((HEAP32[i10 + 12 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 do {
  if ((i9 | 0) != ((HEAP32[i6 >> 2] | 0) + (HEAP32[i8 >> 2] << 3) | 0)) {
   i10 = i2 | 0;
   i5 = HEAP32[i11 >> 2] | 0;
   if ((i5 | 0) != 0) {
    i7 = HEAP32[i5 >> 2] | 0;
    if ((i7 | 0) != 0) {
     __ZN3WTF8fastFreeEPv(i7);
    }
    __ZN3WTF8fastFreeEPv(i5);
   }
   HEAP32[i9 >> 2] = -1;
   i5 = i1 + 216 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
   i5 = i1 + 212 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i7;
   i5 = HEAP32[i8 >> 2] | 0;
   if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
    break;
   }
   __ZN3WTF9HashTableIPN7WebCore4PageENS_12KeyValuePairIS3_NS_6OwnPtrINS_7HashSetIPNS1_19ScriptDebugListenerENS_7PtrHashIS8_EENS_10HashTraitsIS8_EEEEEEEENS_24KeyValuePairKeyExtractorISF_EENS9_IS3_EENS_7HashMapIS3_SE_SI_NSB_IS3_EENSB_ISE_EEE18KeyValuePairTraitsESK_E6rehashEiPSF_(i10, (i5 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 if ((HEAP32[i1 + 220 >> 2] | 0) == (i3 | 0)) {
  HEAP8[i1 + 116 | 0] = 1;
 }
 __ZN7WebCore17ScriptDebugServer27recompileAllJSFunctionsSoonEv(i1 | 0);
 __ZN7WebCore4Page11setDebuggerEPN3JSC8DebuggerE(i3, 0);
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore19ScriptDebugListenerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
 if ((i5 | 0) == 0) {
  i8 = 0;
  i9 = i1 + 16 | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i8 | 0;
 } else {
  i11 = 0;
  i12 = 0;
 }
 while (1) {
  i2 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L7 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 5;
    } else {
     i24 = (i18 >>> 23) + ~i18 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i14;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L7;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 2) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 5;
       break;
      } else {
       i25 = i31;
       i26 = i32;
       i27 = i33;
       i28 = i34;
       i29 = i35;
      }
     }
    }
   } while (0);
   if ((i23 | 0) == 5) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   HEAP32[i30 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i16;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN7WebCore21PageScriptDebugServer19setJavaScriptPausedEPNS_5FrameEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i1 = i2 + 460 | 0;
 if (!(__ZN7WebCore16ScriptController17canExecuteScriptsENS_33ReasonForCallingCanExecuteScriptsE(HEAP32[i1 >> 2] | 0, 1) | 0)) {
  return;
 }
 HEAP8[(HEAP32[i1 >> 2] | 0) + 28 | 0] = i3 & 1;
 i1 = HEAP32[i2 + 456 >> 2] | 0;
 if (i3) {
  __ZN7WebCore8Document43suspendScriptedAnimationControllerCallbacksEv(i1);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 256 >> 2] & 15](i1, 0);
 } else {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 260 >> 2] & 15](i1, 0);
  __ZN7WebCore8Document42resumeScriptedAnimationControllerCallbacksEv(i1);
 }
 i1 = HEAP32[i2 + 452 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = HEAP32[i1 + 76 >> 2] | 0;
 i4 = HEAP32[i1 + 80 >> 2] | 0;
 i5 = i2 + (i4 << 2) | 0;
 if ((HEAP32[i1 + 88 >> 2] | 0) == 0) {
  return;
 }
 L14 : do {
  if ((i4 | 0) == 0) {
   i6 = i2;
  } else {
   i1 = i2;
   while (1) {
    i7 = HEAP32[i1 >> 2] | 0;
    if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
     i6 = i1;
     break L14;
    }
    i1 = i1 + 4 | 0;
    if ((i1 | 0) == (i5 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i6 | 0) == (i5 | 0)) {
  return;
 }
 i2 = i6;
 i4 = HEAP32[i6 >> 2] | 0;
 L23 : while (1) {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 40 >> 2] & 1](i4) | 0) {
   __ZN7WebCore10PluginView19setJavaScriptPausedEb(i4, i3);
  }
  i6 = i2 + 4 | 0;
  if ((i6 | 0) == (i5 | 0)) {
   i8 = 22;
   break;
  } else {
   i9 = i6;
  }
  while (1) {
   i10 = HEAP32[i9 >> 2] | 0;
   i6 = i10;
   if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
    break;
   }
   i6 = i9 + 4 | 0;
   if ((i6 | 0) == (i5 | 0)) {
    i8 = 26;
    break L23;
   } else {
    i9 = i6;
   }
  }
  if ((i9 | 0) == (i5 | 0)) {
   i8 = 25;
   break;
  } else {
   i2 = i9;
   i4 = i10;
  }
 }
 if ((i8 | 0) == 22) {
  return;
 } else if ((i8 | 0) == 25) {
  return;
 } else if ((i8 | 0) == 26) {
  return;
 }
}
function __ZN3WTF7HashSetIPN7WebCore19ScriptDebugListenerENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 2 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  i2 = i8;
  i9 = i2 + ~(i2 << 15) | 0;
  i2 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i2 >>> 6 ^ i2;
  i2 = i9 + ~(i9 << 11) | 0;
  i9 = i2 >>> 16 ^ i2;
  i2 = i9 & i4;
  i10 = i3 + (i2 << 2) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L4 : do {
   if ((i11 | 0) == (i8 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i2;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L4;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 << 2) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i8 | 0)) {
      i12 = i19;
      break;
     } else {
      i14 = i17;
      i15 = i18;
      i16 = i20;
     }
    }
   }
  } while (0);
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 2) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 2) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN7WebCore19ScriptDebugListenerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore21PageScriptDebugServer11addListenerEPNS_19ScriptDebugListenerEPNS_4PageE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 40 | 0;
 HEAP32[i5 >> 2] = i2;
 HEAP32[i6 >> 2] = i3;
 HEAP32[i7 >> 2] = 0;
 __ZN3WTF9HashTableIPN7WebCore4PageENS_12KeyValuePairIS3_NS_6OwnPtrINS_7HashSetIPNS1_19ScriptDebugListenerENS_7PtrHashIS8_EENS_10HashTraitsIS8_EEEEEEEENS_24KeyValuePairKeyExtractorISF_EENS9_IS3_EENS_7HashMapIS3_SE_SI_NSB_IS3_EENSB_ISE_EEE18KeyValuePairTraitsESK_E3addINS_17HashMapTranslatorISN_SI_EERKS3_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS3_SF_SH_SI_SN_SK_EEEEOT0_OT1_(i8, i1 + 200 | 0, i6, i7);
 i7 = (HEAP32[i8 >> 2] | 0) + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i3 = __ZN3WTF10fastMallocEj(20) | 0;
   i2 = i3;
   _memset(i3 | 0, 0, 20) | 0;
   i3 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i2;
   if ((i3 | 0) == 0) {
    i10 = i2;
    break;
   }
   i2 = HEAP32[i3 >> 2] | 0;
   if ((i2 | 0) != 0) {
    __ZN3WTF8fastFreeEPv(i2);
   }
   __ZN3WTF8fastFreeEPv(i3);
   i10 = HEAP32[i7 >> 2] | 0;
  } else {
   i10 = i8;
  }
 } while (0);
 __ZN3WTF9HashTableIPN7WebCore19ScriptDebugListenerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i9, i10 | 0, i5, i5);
 __ZN7WebCore17ScriptDebugServer27recompileAllJSFunctionsSoonEv(i1 | 0);
 __ZN7WebCore4Page11setDebuggerEPN3JSC8DebuggerE(HEAP32[i6 >> 2] | 0, i1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore21PageScriptDebugServer19setJavaScriptPausedERKNS_9PageGroupEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 __ZN3WTF28setMainThreadCallbacksPausedEb(i3);
 i4 = HEAP32[i2 + 24 >> 2] | 0;
 i5 = HEAP32[i2 + 28 >> 2] | 0;
 i6 = i4 + (i5 << 2) | 0;
 if ((HEAP32[i2 + 36 >> 2] | 0) == 0) {
  return;
 }
 L4 : do {
  if ((i5 | 0) == 0) {
   i7 = i4;
  } else {
   i2 = i4;
   while (1) {
    i8 = HEAP32[i2 >> 2] | 0;
    if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
     i7 = i2;
     break L4;
    }
    i2 = i2 + 4 | 0;
    if ((i2 | 0) == (i6 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i7 | 0) == (i6 | 0)) {
  return;
 } else {
  i9 = i7;
 }
 L12 : while (1) {
  i7 = HEAP32[i9 >> 2] | 0;
  __ZN7WebCore4Page16setDefersLoadingEb(i7, i3);
  i4 = HEAP32[i7 + 60 >> 2] | 0;
  if ((i4 | 0) != 0) {
   i7 = i4;
   while (1) {
    __ZN7WebCore21PageScriptDebugServer19setJavaScriptPausedEPNS_5FrameEb(i1, i7, i3);
    i7 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i7 + 40 | 0, 0) | 0;
    if ((i7 | 0) == 0) {
     break;
    }
   }
  }
  i7 = i9 + 4 | 0;
  if ((i7 | 0) == (i6 | 0)) {
   i10 = 19;
   break;
  } else {
   i11 = i7;
  }
  while (1) {
   i7 = HEAP32[i11 >> 2] | 0;
   if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
    break;
   }
   i7 = i11 + 4 | 0;
   if ((i7 | 0) == (i6 | 0)) {
    i10 = 18;
    break L12;
   } else {
    i11 = i7;
   }
  }
  if ((i11 | 0) == (i6 | 0)) {
   i10 = 17;
   break;
  } else {
   i9 = i11;
  }
 }
 if ((i10 | 0) == 17) {
  return;
 } else if ((i10 | 0) == 18) {
  return;
 } else if ((i10 | 0) == 19) {
  return;
 }
}
function __ZN7WebCore21PageScriptDebugServer27getListenersForGlobalObjectEPN3JSC14JSGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = HEAP32[(HEAP32[i2 + 660 >> 2] | 0) + 52 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i2 = HEAP32[i3 + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = HEAP32[i1 + 208 >> 2] | 0;
 i5 = HEAP32[i1 + 200 >> 2] | 0;
 i1 = i2;
 i6 = i1 + ~(i1 << 15) | 0;
 i1 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i1 >>> 6 ^ i1;
 i1 = i6 + ~(i6 << 11) | 0;
 i6 = i1 >>> 16 ^ i1;
 if ((i5 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = i3 & i6;
 i7 = i5 + (i1 << 3) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L10 : do {
  if ((i8 | 0) == (i2 | 0)) {
   i9 = i7;
  } else {
   i10 = (i6 >>> 23) + ~i6 | 0;
   i11 = i10 << 12 ^ i10;
   i10 = i11 >>> 7 ^ i11;
   i11 = i10 << 2 ^ i10;
   i10 = i11 >>> 20 ^ i11 | 1;
   i11 = 0;
   i12 = i1;
   i13 = i8;
   while (1) {
    if ((i13 | 0) == 0) {
     i4 = 0;
     break;
    }
    i14 = (i11 | 0) == 0 ? i10 : i11;
    i15 = i14 + i12 & i3;
    i16 = i5 + (i15 << 3) | 0;
    i17 = HEAP32[i16 >> 2] | 0;
    if ((i17 | 0) == (i2 | 0)) {
     i9 = i16;
     break L10;
    } else {
     i11 = i14;
     i12 = i15;
     i13 = i17;
    }
   }
   return i4 | 0;
  }
 } while (0);
 if ((i9 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = HEAP32[i9 + 4 >> 2] | 0;
 return i4 | 0;
}
function __ZN7WebCore21PageScriptDebugServer19setJavaScriptPausedEPNS_9FrameViewEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 76 >> 2] | 0;
 i4 = HEAP32[i2 + 80 >> 2] | 0;
 i5 = i1 + (i4 << 2) | 0;
 if ((HEAP32[i2 + 88 >> 2] | 0) == 0) {
  return;
 }
 L7 : do {
  if ((i4 | 0) == 0) {
   i6 = i1;
  } else {
   i2 = i1;
   while (1) {
    i7 = HEAP32[i2 >> 2] | 0;
    if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
     i6 = i2;
     break L7;
    }
    i2 = i2 + 4 | 0;
    if ((i2 | 0) == (i5 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i6 | 0) == (i5 | 0)) {
  return;
 } else {
  i8 = i6;
 }
 L15 : while (1) {
  i6 = HEAP32[i8 >> 2] | 0;
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 40 >> 2] & 1](i6) | 0) {
   __ZN7WebCore10PluginView19setJavaScriptPausedEb(i6, i3);
  }
  i6 = i8 + 4 | 0;
  if ((i6 | 0) == (i5 | 0)) {
   i9 = 20;
   break;
  } else {
   i10 = i6;
  }
  while (1) {
   i6 = HEAP32[i10 >> 2] | 0;
   if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
    break;
   }
   i6 = i10 + 4 | 0;
   if ((i6 | 0) == (i5 | 0)) {
    i9 = 14;
    break L15;
   } else {
    i10 = i6;
   }
  }
  if ((i10 | 0) == (i5 | 0)) {
   i9 = 19;
   break;
  } else {
   i8 = i10;
  }
 }
 if ((i9 | 0) == 14) {
  return;
 } else if ((i9 | 0) == 19) {
  return;
 } else if ((i9 | 0) == 20) {
  return;
 }
}
function __ZN7WebCore21PageScriptDebugServerD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 200 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1 | 0;
  __ZN7WebCore17ScriptDebugServerD2Ev(i3);
  i4 = i1 | 0;
  __ZN3WTF8fastFreeEPv(i4);
  return;
 }
 i5 = HEAP32[i1 + 204 >> 2] | 0;
 if ((i5 | 0) > 0) {
  i6 = 0;
  while (1) {
   do {
    if ((HEAP32[i2 + (i6 << 3) >> 2] | 0) != -1) {
     i7 = HEAP32[i2 + (i6 << 3) + 4 >> 2] | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     i8 = HEAP32[i7 >> 2] | 0;
     if ((i8 | 0) != 0) {
      __ZN3WTF8fastFreeEPv(i8);
     }
     __ZN3WTF8fastFreeEPv(i7);
    }
   } while (0);
   i6 = i6 + 1 | 0;
   if ((i6 | 0) >= (i5 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
 i3 = i1 | 0;
 __ZN7WebCore17ScriptDebugServerD2Ev(i3);
 i4 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN7WebCore21PageScriptDebugServerD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 200 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1 | 0;
  __ZN7WebCore17ScriptDebugServerD2Ev(i3);
  return;
 }
 i4 = HEAP32[i1 + 204 >> 2] | 0;
 if ((i4 | 0) > 0) {
  i5 = 0;
  while (1) {
   do {
    if ((HEAP32[i2 + (i5 << 3) >> 2] | 0) != -1) {
     i6 = HEAP32[i2 + (i5 << 3) + 4 >> 2] | 0;
     if ((i6 | 0) == 0) {
      break;
     }
     i7 = HEAP32[i6 >> 2] | 0;
     if ((i7 | 0) != 0) {
      __ZN3WTF8fastFreeEPv(i7);
     }
     __ZN3WTF8fastFreeEPv(i6);
    }
   } while (0);
   i5 = i5 + 1 | 0;
   if ((i5 | 0) >= (i4 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
 i3 = i1 | 0;
 __ZN7WebCore17ScriptDebugServerD2Ev(i3);
 return;
}
function __ZN7WebCore21PageScriptDebugServerD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 200 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1 | 0;
  __ZN7WebCore17ScriptDebugServerD2Ev(i3);
  return;
 }
 i4 = HEAP32[i1 + 204 >> 2] | 0;
 if ((i4 | 0) > 0) {
  i5 = 0;
  while (1) {
   do {
    if ((HEAP32[i2 + (i5 << 3) >> 2] | 0) != -1) {
     i6 = HEAP32[i2 + (i5 << 3) + 4 >> 2] | 0;
     if ((i6 | 0) == 0) {
      break;
     }
     i7 = HEAP32[i6 >> 2] | 0;
     if ((i7 | 0) != 0) {
      __ZN3WTF8fastFreeEPv(i7);
     }
     __ZN3WTF8fastFreeEPv(i6);
    }
   } while (0);
   i5 = i5 + 1 | 0;
   if ((i5 | 0) >= (i4 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
 i3 = i1 | 0;
 __ZN7WebCore17ScriptDebugServerD2Ev(i3);
 return;
}
function __ZN7WebCore21PageScriptDebugServer23recompileAllJSFunctionsEPNS_5TimerINS_17ScriptDebugServerEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 __ZN3JSC12JSLockHolderC1EPNS_2VME(i3, __ZN7WebCore15JSDOMWindowBase8commonVMEv() | 0);
 if ((HEAP32[(__ZN7WebCore15JSDOMWindowBase8commonVMEv() | 0) + 24688 >> 2] | 0) == 0) {
  __ZN3JSC8Debugger23recompileAllJSFunctionsEPNS_2VME(i1, __ZN7WebCore15JSDOMWindowBase8commonVMEv() | 0);
  __ZN3JSC12JSLockHolderD1Ev(i3);
  STACKTOP = i2;
  return;
 } else {
  __ZN7WebCore17ScriptDebugServer27recompileAllJSFunctionsSoonEv(i1 | 0);
  __ZN3JSC12JSLockHolderD1Ev(i3);
  STACKTOP = i2;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_iii + 6;
}
function __ZN7WebCore21PageScriptDebugServer11didContinueEPN3JSC14JSGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[(HEAP32[i2 + 660 >> 2] | 0) + 52 >> 2] | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 + 220 >> 2] = 0;
  return;
 }
 i2 = HEAP32[i3 + 32 >> 2] | 0;
 HEAP32[i1 + 220 >> 2] = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = i2 + 160 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore4Page9initGroupEv(i2);
  i5 = HEAP32[i3 >> 2] | 0;
 } else {
  i5 = i4;
 }
 __ZN7WebCore21PageScriptDebugServer19setJavaScriptPausedERKNS_9PageGroupEb(i1, i5, 0);
 return;
}
function __ZN7WebCore21PageScriptDebugServer8didPauseEPN3JSC14JSGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[(HEAP32[i2 + 660 >> 2] | 0) + 52 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i2 = HEAP32[i3 + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i1 + 220 >> 2] = i2;
 i3 = i2 + 160 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore4Page9initGroupEv(i2);
  i5 = HEAP32[i3 >> 2] | 0;
 } else {
  i5 = i4;
 }
 __ZN7WebCore21PageScriptDebugServer19setJavaScriptPausedERKNS_9PageGroupEb(i1, i5, 1);
 return;
}
function __ZN7WebCore21PageScriptDebugServer23runEventLoopWhilePausedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP8[i4] = 0;
 i5 = i1 + 116 | 0;
 if ((HEAP8[i5] & 1) != 0) {
  STACKTOP = i2;
  return;
 }
 while (1) {
  __ZN7WebCore9EventLoop5cycleEv(i3);
  if ((HEAP8[i5] & 1) != 0) {
   i6 = 5;
   break;
  }
  if ((HEAP8[i4] & 1) != 0) {
   i6 = 6;
   break;
  }
 }
 if ((i6 | 0) == 5) {
  STACKTOP = i2;
  return;
 } else if ((i6 | 0) == 6) {
  STACKTOP = i2;
  return;
 }
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
function __ZN7WebCore21PageScriptDebugServer19setJavaScriptPausedEPNS_4PageEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 __ZN7WebCore4Page16setDefersLoadingEb(i2, i3);
 i4 = HEAP32[i2 + 60 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i2 = i4;
 while (1) {
  __ZN7WebCore21PageScriptDebugServer19setJavaScriptPausedEPNS_5FrameEb(i1, i2, i3);
  i2 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i2 + 40 | 0, 0) | 0;
  if ((i2 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore21PageScriptDebugServer6sharedEv() {
 var i1 = 0, i2 = 0, i3 = 0;
 if (HEAP8[H_BASE + 88 | 0] | 0) {
  i1 = HEAP32[H_BASE + 96 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(224) | 0;
  i3 = i2;
  __ZN7WebCore17ScriptDebugServerC2Eb(i2, 0);
  HEAP32[i2 >> 2] = H_BASE + 16;
  _memset(i2 + 200 | 0, 0, 24) | 0;
  HEAP32[H_BASE + 96 >> 2] = i3;
  HEAP8[H_BASE + 88 | 0] = 1;
  i1 = i3;
  return i1 | 0;
 }
 return 0;
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
function viiiii___ZN7WebCore17ScriptDebugServer12sourceParsedEPN3JSC9ExecStateEPNS1_14SourceProviderEiRKN3WTF6StringE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore17ScriptDebugServer12sourceParsedEPN3JSC9ExecStateEPNS1_14SourceProviderEiRKN3WTF6StringE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore21PageScriptDebugServer21didRemoveLastListenerEPNS_4PageE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((HEAP32[i1 + 220 >> 2] | 0) == (i2 | 0)) {
  HEAP8[i1 + 116 | 0] = 1;
 }
 __ZN7WebCore17ScriptDebugServer27recompileAllJSFunctionsSoonEv(i1 | 0);
 __ZN7WebCore4Page11setDebuggerEPN3JSC8DebuggerE(i2, 0);
 return;
}
function viii___ZNK7WebCore17ScriptDebugServer36handleExceptionInBreakpointConditionEPN3JSC9ExecStateENS1_7JSValueE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore17ScriptDebugServer36handleExceptionInBreakpointConditionEPN3JSC9ExecStateENS1_7JSValueE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore17ScriptDebugServer11handlePauseEN3JSC8Debugger14ReasonForPauseEPNS1_14JSGlobalObjectE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore17ScriptDebugServer11handlePauseEN3JSC8Debugger14ReasonForPauseEPNS1_14JSGlobalObjectE(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZN7WebCore17ScriptDebugServer17needPauseHandlingEPN3JSC14JSGlobalObjectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore17ScriptDebugServer17needPauseHandlingEPN3JSC14JSGlobalObjectE(i1 | 0, i2 | 0) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function vii___ZN7WebCore17ScriptDebugServer19handleBreakpointHitERKN3JSC10BreakpointE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17ScriptDebugServer19handleBreakpointHitERKN3JSC10BreakpointE(i1 | 0, i2 | 0);
}
function iii___ZN7WebCore17ScriptDebugServer15isContentScriptEPN3JSC9ExecStateE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore17ScriptDebugServer15isContentScriptEPN3JSC9ExecStateE(i1 | 0, i2 | 0) | 0;
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function __ZN7WebCore21PageScriptDebugServerC2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17ScriptDebugServerC2Eb(i1 | 0, 0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 _memset(i1 + 200 | 0, 0, 24) | 0;
 return;
}
function __ZN7WebCore21PageScriptDebugServerC1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17ScriptDebugServerC2Eb(i1 | 0, 0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 _memset(i1 + 200 | 0, 0, 24) | 0;
 return;
}
function vi___ZN7WebCore17ScriptDebugServer34notifyDoneProcessingDebuggerEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17ScriptDebugServer34notifyDoneProcessingDebuggerEventsEv(i1 | 0);
}
function vii___ZN3JSC8Debugger6detachEPNS_14JSGlobalObjectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN3JSC8Debugger6detachEPNS_14JSGlobalObjectE(i1 | 0, i2 | 0);
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 7](i2 | 0, i3 | 0, i4 | 0);
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
 return FUNCTION_TABLE_iii[i1 & 7](i2 | 0, i3 | 0) | 0;
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
 FUNCTION_TABLE_vii[i1 & 15](i2 | 0, i3 | 0);
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b5() {
 abort(5);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,viiiii___ZN7WebCore17ScriptDebugServer12sourceParsedEPN3JSC9ExecStateEPNS1_14SourceProviderEiRKN3WTF6StringE__wrapper,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore21PageScriptDebugServerC2Ev,b1,vi___ZN7WebCore17ScriptDebugServer34notifyDoneProcessingDebuggerEventsEv__wrapper,b1,__ZN7WebCore21PageScriptDebugServer23runEventLoopWhilePausedEv,b1,__ZN7WebCore21PageScriptDebugServerD0Ev,b1,__ZN7WebCore21PageScriptDebugServerD2Ev,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore21PageScriptDebugServer11didContinueEPN3JSC14JSGlobalObjectE,b2,vii___ZN7WebCore17ScriptDebugServer19handleBreakpointHitERKN3JSC10BreakpointE__wrapper,b2,__ZN7WebCore21PageScriptDebugServer8didPauseEPN3JSC14JSGlobalObjectE,b2,vii___ZN3JSC8Debugger6detachEPNS_14JSGlobalObjectE__wrapper,b2,__ZN7WebCore21PageScriptDebugServer23recompileAllJSFunctionsEPNS_5TimerINS_17ScriptDebugServerEEE,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,viii___ZNK7WebCore17ScriptDebugServer36handleExceptionInBreakpointConditionEPN3JSC9ExecStateENS1_7JSValueE__wrapper,b4,viii___ZN7WebCore17ScriptDebugServer11handlePauseEN3JSC8Debugger14ReasonForPauseEPNS1_14JSGlobalObjectE__wrapper,b4,b4,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6,iii___ZN7WebCore17ScriptDebugServer17needPauseHandlingEPN3JSC14JSGlobalObjectE__wrapper,b6,__ZN7WebCore21PageScriptDebugServer27getListenersForGlobalObjectEPN3JSC14JSGlobalObjectE,b6,iii___ZN7WebCore17ScriptDebugServer15isContentScriptEPN3JSC9ExecStateE__wrapper,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore21PageScriptDebugServer11didContinueEPN3JSC14JSGlobalObjectE","_strlen","__ZN3WTF9HashTableIPN7WebCore19ScriptDebugListenerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZN7WebCore21PageScriptDebugServer14removeListenerEPNS_19ScriptDebugListenerEPNS_4PageE","__ZN7WebCore21PageScriptDebugServer19setJavaScriptPausedEPNS_5FrameEb","__ZN7WebCore21PageScriptDebugServer19setJavaScriptPausedERKNS_9PageGroupEb","__ZN7WebCore21PageScriptDebugServer23runEventLoopWhilePausedEv","__ZN7WebCore21PageScriptDebugServer19setJavaScriptPausedEPNS_4PageEb","__ZN7WebCore21PageScriptDebugServerD0Ev","_memset","__ZN7WebCore21PageScriptDebugServer11addListenerEPNS_19ScriptDebugListenerEPNS_4PageE","__ZN7WebCore21PageScriptDebugServer23recompileAllJSFunctionsEPNS_5TimerINS_17ScriptDebugServerEEE","__ZN3WTF9HashTableIPN7WebCore19ScriptDebugListenerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN7WebCore21PageScriptDebugServer27getListenersForGlobalObjectEPN3JSC14JSGlobalObjectE","__ZN7WebCore21PageScriptDebugServerD2Ev","__ZN3WTF9HashTableIPN7WebCore4PageENS_12KeyValuePairIS3_NS_6OwnPtrINS_7HashSetIPNS1_19ScriptDebugListenerENS_7PtrHashIS8_EENS_10HashTraitsIS8_EEEEEEEENS_24KeyValuePairKeyExtractorISF_EENS9_IS3_EENS_7HashMapIS3_SE_SI_NSB_IS3_EENSB_ISE_EEE18KeyValuePairTraitsESK_E3addINS_17HashMapTranslatorISN_SI_EERKS3_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS3_SF_SH_SI_SN_SK_EEEEOT0_OT1_","__ZN7WebCore21PageScriptDebugServer21didRemoveLastListenerEPNS_4PageE","__ZN7WebCore21PageScriptDebugServerC2Ev","__ZN7WebCore21PageScriptDebugServer8didPauseEPN3JSC14JSGlobalObjectE","__ZN3WTF7HashSetIPN7WebCore19ScriptDebugListenerENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN7WebCore21PageScriptDebugServer6sharedEv","__ZN7WebCore21PageScriptDebugServer19setJavaScriptPausedEPNS_9FrameViewEb","_memcpy","__ZN3WTF9HashTableIPN7WebCore4PageENS_12KeyValuePairIS3_NS_6OwnPtrINS_7HashSetIPNS1_19ScriptDebugListenerENS_7PtrHashIS8_EENS_10HashTraitsIS8_EEEEEEEENS_24KeyValuePairKeyExtractorISF_EENS9_IS3_EENS_7HashMapIS3_SE_SI_NSB_IS3_EENSB_ISE_EEE18KeyValuePairTraitsESK_E6rehashEiPSF_"]
