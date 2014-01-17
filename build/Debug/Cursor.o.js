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
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore6Cursor8fromTypeENS0_4TypeE(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 switch (i1 | 0) {
 case 6:
  {
   i2 = __ZN7WebCore16eastResizeCursorEv() | 0;
   break;
  }
 case 7:
  {
   i2 = __ZN7WebCore17northResizeCursorEv() | 0;
   break;
  }
 case 8:
  {
   i2 = __ZN7WebCore21northEastResizeCursorEv() | 0;
   break;
  }
 case 9:
  {
   i2 = __ZN7WebCore21northWestResizeCursorEv() | 0;
   break;
  }
 case 10:
  {
   i2 = __ZN7WebCore17southResizeCursorEv() | 0;
   break;
  }
 case 11:
  {
   i2 = __ZN7WebCore21southEastResizeCursorEv() | 0;
   break;
  }
 case 12:
  {
   i2 = __ZN7WebCore21southWestResizeCursorEv() | 0;
   break;
  }
 case 13:
  {
   i2 = __ZN7WebCore16westResizeCursorEv() | 0;
   break;
  }
 case 14:
  {
   i2 = __ZN7WebCore22northSouthResizeCursorEv() | 0;
   break;
  }
 case 15:
  {
   i2 = __ZN7WebCore20eastWestResizeCursorEv() | 0;
   break;
  }
 case 16:
  {
   i2 = __ZN7WebCore30northEastSouthWestResizeCursorEv() | 0;
   break;
  }
 case 17:
  {
   i2 = __ZN7WebCore30northWestSouthEastResizeCursorEv() | 0;
   break;
  }
 case 18:
  {
   i2 = __ZN7WebCore18columnResizeCursorEv() | 0;
   break;
  }
 case 19:
  {
   i2 = __ZN7WebCore15rowResizeCursorEv() | 0;
   break;
  }
 case 20:
  {
   i2 = __ZN7WebCore19middlePanningCursorEv() | 0;
   break;
  }
 case 21:
  {
   i2 = __ZN7WebCore17eastPanningCursorEv() | 0;
   break;
  }
 case 22:
  {
   i2 = __ZN7WebCore18northPanningCursorEv() | 0;
   break;
  }
 case 23:
  {
   i2 = __ZN7WebCore22northEastPanningCursorEv() | 0;
   break;
  }
 case 24:
  {
   i2 = __ZN7WebCore22northWestPanningCursorEv() | 0;
   break;
  }
 case 25:
  {
   i2 = __ZN7WebCore18southPanningCursorEv() | 0;
   break;
  }
 case 26:
  {
   i2 = __ZN7WebCore22southEastPanningCursorEv() | 0;
   break;
  }
 case 27:
  {
   i2 = __ZN7WebCore22southWestPanningCursorEv() | 0;
   break;
  }
 case 28:
  {
   i2 = __ZN7WebCore17westPanningCursorEv() | 0;
   break;
  }
 case 29:
  {
   i2 = __ZN7WebCore10moveCursorEv() | 0;
   break;
  }
 case 30:
  {
   i2 = __ZN7WebCore18verticalTextCursorEv() | 0;
   break;
  }
 case 31:
  {
   i2 = __ZN7WebCore10cellCursorEv() | 0;
   break;
  }
 case 32:
  {
   i2 = __ZN7WebCore17contextMenuCursorEv() | 0;
   break;
  }
 case 33:
  {
   i2 = __ZN7WebCore11aliasCursorEv() | 0;
   break;
  }
 case 34:
  {
   i2 = __ZN7WebCore14progressCursorEv() | 0;
   break;
  }
 case 35:
  {
   i2 = __ZN7WebCore12noDropCursorEv() | 0;
   break;
  }
 case 36:
  {
   i2 = __ZN7WebCore10copyCursorEv() | 0;
   break;
  }
 case 37:
  {
   i2 = __ZN7WebCore10noneCursorEv() | 0;
   break;
  }
 case 38:
  {
   i2 = __ZN7WebCore16notAllowedCursorEv() | 0;
   break;
  }
 case 0:
  {
   i2 = __ZN7WebCore13pointerCursorEv() | 0;
   break;
  }
 case 1:
  {
   i2 = __ZN7WebCore11crossCursorEv() | 0;
   break;
  }
 case 2:
  {
   i2 = __ZN7WebCore10handCursorEv() | 0;
   break;
  }
 case 3:
  {
   i2 = __ZN7WebCore11iBeamCursorEv() | 0;
   break;
  }
 case 4:
  {
   i2 = __ZN7WebCore10waitCursorEv() | 0;
   break;
  }
 case 5:
  {
   i2 = __ZN7WebCore10helpCursorEv() | 0;
   break;
  }
 case 39:
  {
   i2 = __ZN7WebCore12zoomInCursorEv() | 0;
   break;
  }
 case 40:
  {
   i2 = __ZN7WebCore13zoomOutCursorEv() | 0;
   break;
  }
 case 41:
  {
   i2 = __ZN7WebCore10grabCursorEv() | 0;
   break;
  }
 case 42:
  {
   i2 = __ZN7WebCore14grabbingCursorEv() | 0;
   break;
  }
 default:
  {
   i2 = __ZN7WebCore13pointerCursorEv() | 0;
  }
 }
 return i2 | 0;
}
function __ZN7WebCore16determineHotSpotEPNS_5ImageERKNS_8IntPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i7;
 i9 = i2;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 48 >> 2] & 1](i6, i2);
 do {
  if ((HEAP32[i6 >> 2] | 0) >= 1) {
   if ((HEAP32[i6 + 4 >> 2] | 0) < 1) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 48 >> 2] & 1](i5, i2);
   i10 = HEAP32[i5 >> 2] | 0;
   i11 = HEAP32[i5 + 4 >> 2] | 0;
   i12 = HEAP32[i3 >> 2] | 0;
   i13 = HEAP32[i3 + 4 >> 2] | 0;
   do {
    if ((i12 | 0) >= 0) {
     if ((i10 | 0) <= (i12 | 0) | (i13 | 0) < 0) {
      break;
     }
     if ((i11 | 0) <= (i13 | 0)) {
      break;
     }
     i14 = i3;
     i15 = i1;
     i16 = HEAP32[i14 + 4 >> 2] | 0;
     HEAP32[i15 >> 2] = HEAP32[i14 >> 2];
     HEAP32[i15 + 4 >> 2] = i16;
     STACKTOP = i4;
     return;
    }
   } while (0);
   i13 = i7;
   HEAP32[i13 >> 2] = 0;
   i12 = i8 + 4 | 0;
   HEAP32[i12 >> 2] = 0;
   do {
    if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i2 >> 2] | 0) + 52 >> 2] & 1](i2, i8) | 0) {
     i16 = HEAP32[i13 >> 2] | 0;
     i15 = HEAP32[i12 >> 2] | 0;
     if ((i16 | 0) < 0) {
      break;
     }
     if ((i10 | 0) <= (i16 | 0) | (i15 | 0) < 0) {
      break;
     }
     if ((i11 | 0) <= (i15 | 0)) {
      break;
     }
     i15 = i1;
     i16 = HEAP32[i7 + 4 >> 2] | 0;
     HEAP32[i15 >> 2] = HEAP32[i7 >> 2];
     HEAP32[i15 + 4 >> 2] = i16;
     STACKTOP = i4;
     return;
    }
   } while (0);
   HEAP32[i1 >> 2] = 0;
   HEAP32[i1 + 4 >> 2] = 0;
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 STACKTOP = i4;
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
 FUNCTION_TABLE_vii[i1 & 1](i2 | 0, i3 | 0);
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
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function b1(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(1);
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
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
}
function b3() {
 abort(3);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore6Cursor8fromTypeENS0_4TypeE","_strlen","__ZN7WebCore16determineHotSpotEPNS_5ImageERKNS_8IntPointE","_memcpy","_memset"]