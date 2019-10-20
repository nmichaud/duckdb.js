/* eslint-disable */
import { flatbuffers } from "flatbuffers";
// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @enum {number}
 */
export enum DuckDBType{
  DUCKDB_TYPE_INVALID= 0,
  DUCKDB_TYPE_BOOLEAN= 1,
  DUCKDB_TYPE_TINYINT= 2,
  DUCKDB_TYPE_SMALLINT= 3,
  DUCKDB_TYPE_INTEGER= 4,
  DUCKDB_TYPE_BIGINT= 5,
  DUCKDB_TYPE_FLOAT= 6,
  DUCKDB_TYPE_DOUBLE= 7,
  DUCKDB_TYPE_TIMESTAMP= 8,
  DUCKDB_TYPE_DATE= 9,
  DUCKDB_TYPE_TIME= 10,
  DUCKDB_TYPE_VARCHAR= 11
};

/**
 * @constructor
 */
export class DuckDBDate {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns DuckDBDate
 */
__init(i:number, bb:flatbuffers.ByteBuffer):DuckDBDate {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @returns number
 */
year():number {
  return this.bb!.readInt32(this.bb_pos);
};

/**
 * @returns number
 */
month():number {
  return this.bb!.readInt8(this.bb_pos + 4);
};

/**
 * @returns number
 */
day():number {
  return this.bb!.readInt8(this.bb_pos + 5);
};

/**
 * @param flatbuffers.Builder builder
 * @param number year
 * @param number month
 * @param number day
 * @returns flatbuffers.Offset
 */
static createDuckDBDate(builder:flatbuffers.Builder, year: number, month: number, day: number):flatbuffers.Offset {
  builder.prep(4, 8);
  builder.pad(2);
  builder.writeInt8(day);
  builder.writeInt8(month);
  builder.writeInt32(year);
  return builder.offset();
};

}
/**
 * @constructor
 */
export class DuckDBTime {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns DuckDBTime
 */
__init(i:number, bb:flatbuffers.ByteBuffer):DuckDBTime {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @returns number
 */
hour():number {
  return this.bb!.readInt8(this.bb_pos);
};

/**
 * @returns number
 */
min():number {
  return this.bb!.readInt8(this.bb_pos + 1);
};

/**
 * @returns number
 */
sec():number {
  return this.bb!.readInt8(this.bb_pos + 2);
};

/**
 * @returns number
 */
msec():number {
  return this.bb!.readInt16(this.bb_pos + 4);
};

/**
 * @param flatbuffers.Builder builder
 * @param number hour
 * @param number min
 * @param number sec
 * @param number msec
 * @returns flatbuffers.Offset
 */
static createDuckDBTime(builder:flatbuffers.Builder, hour: number, min: number, sec: number, msec: number):flatbuffers.Offset {
  builder.prep(2, 6);
  builder.writeInt16(msec);
  builder.pad(1);
  builder.writeInt8(sec);
  builder.writeInt8(min);
  builder.writeInt8(hour);
  return builder.offset();
};

}
/**
 * @constructor
 */
export class DuckDBTimestamp {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns DuckDBTimestamp
 */
__init(i:number, bb:flatbuffers.ByteBuffer):DuckDBTimestamp {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param DuckDBDate= obj
 * @returns DuckDBDate|null
 */
date(obj?:DuckDBDate):DuckDBDate|null {
  return (obj || new DuckDBDate).__init(this.bb_pos, this.bb!);
};

/**
 * @param DuckDBTime= obj
 * @returns DuckDBTime|null
 */
time(obj?:DuckDBTime):DuckDBTime|null {
  return (obj || new DuckDBTime).__init(this.bb_pos + 8, this.bb!);
};

/**
 * @param flatbuffers.Builder builder
 * @param number date_year
 * @param number date_month
 * @param number date_day
 * @param number time_hour
 * @param number time_min
 * @param number time_sec
 * @param number time_msec
 * @returns flatbuffers.Offset
 */
static createDuckDBTimestamp(builder:flatbuffers.Builder, date_year: number, date_month: number, date_day: number, time_hour: number, time_min: number, time_sec: number, time_msec: number):flatbuffers.Offset {
  builder.prep(4, 16);
  builder.pad(2);
  builder.prep(2, 6);
  builder.writeInt16(time_msec);
  builder.pad(1);
  builder.writeInt8(time_sec);
  builder.writeInt8(time_min);
  builder.writeInt8(time_hour);
  builder.prep(4, 8);
  builder.pad(2);
  builder.writeInt8(date_day);
  builder.writeInt8(date_month);
  builder.writeInt32(date_year);
  return builder.offset();
};

}
/**
 * @constructor
 */
export class DuckDBColumn {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns DuckDBColumn
 */
__init(i:number, bb:flatbuffers.ByteBuffer):DuckDBColumn {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param DuckDBColumn= obj
 * @returns DuckDBColumn
 */
static getRootAsDuckDBColumn(bb:flatbuffers.ByteBuffer, obj?:DuckDBColumn):DuckDBColumn {
  return (obj || new DuckDBColumn).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param number index
 * @returns number
 */
data(index: number):number|null {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint8(this.bb!.__vector(this.bb_pos + offset) + index) : 0;
};

/**
 * @returns number
 */
dataLength():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns Uint8Array
 */
dataArray():Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? new Uint8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @param number index
 * @returns boolean
 */
nullmask(index: number):boolean|null {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? !!this.bb!.readInt8(this.bb!.__vector(this.bb_pos + offset) + index) : false;
};

/**
 * @returns number
 */
nullmaskLength():number {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns Int8Array
 */
nullmaskArray():Int8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? new Int8Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
};

/**
 * @returns DuckDBType
 */
type():DuckDBType {
  var offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? /**  */ (this.bb!.readUint8(this.bb_pos + offset)) : DuckDBType.DUCKDB_TYPE_INVALID;
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
name():string|null
name(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
name(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param flatbuffers.Builder builder
 */
static startDuckDBColumn(builder:flatbuffers.Builder) {
  builder.startObject(4);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset dataOffset
 */
static addData(builder:flatbuffers.Builder, dataOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, dataOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param Array.<number> data
 * @returns flatbuffers.Offset
 */
static createDataVector(builder:flatbuffers.Builder, data:number[] | Uint8Array):flatbuffers.Offset {
  builder.startVector(1, data.length, 1);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt8(data[i]);
  }
  return builder.endVector();
};

/**
 * @param flatbuffers.Builder builder
 * @param number numElems
 */
static startDataVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(1, numElems, 1);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset nullmaskOffset
 */
static addNullmask(builder:flatbuffers.Builder, nullmaskOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, nullmaskOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param Array.<boolean> data
 * @returns flatbuffers.Offset
 */
static createNullmaskVector(builder:flatbuffers.Builder, data:boolean[]):flatbuffers.Offset {
  builder.startVector(1, data.length, 1);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addInt8(+data[i]);
  }
  return builder.endVector();
};

/**
 * @param flatbuffers.Builder builder
 * @param number numElems
 */
static startNullmaskVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(1, numElems, 1);
};

/**
 * @param flatbuffers.Builder builder
 * @param DuckDBType type
 */
static addType(builder:flatbuffers.Builder, type:DuckDBType) {
  builder.addFieldInt8(2, type, DuckDBType.DUCKDB_TYPE_INVALID);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset nameOffset
 */
static addName(builder:flatbuffers.Builder, nameOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, nameOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endDuckDBColumn(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

static createDuckDBColumn(builder:flatbuffers.Builder, dataOffset:flatbuffers.Offset, nullmaskOffset:flatbuffers.Offset, type:DuckDBType, nameOffset:flatbuffers.Offset):flatbuffers.Offset {
  DuckDBColumn.startDuckDBColumn(builder);
  DuckDBColumn.addData(builder, dataOffset);
  DuckDBColumn.addNullmask(builder, nullmaskOffset);
  DuckDBColumn.addType(builder, type);
  DuckDBColumn.addName(builder, nameOffset);
  return DuckDBColumn.endDuckDBColumn(builder);
}
}
/**
 * @constructor
 */
export class DuckDBResult {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns DuckDBResult
 */
__init(i:number, bb:flatbuffers.ByteBuffer):DuckDBResult {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param DuckDBResult= obj
 * @returns DuckDBResult
 */
static getRootAsDuckDBResult(bb:flatbuffers.ByteBuffer, obj?:DuckDBResult):DuckDBResult {
  return (obj || new DuckDBResult).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param number index
 * @param DuckDBColumn= obj
 * @returns DuckDBColumn
 */
columns(index: number, obj?:DuckDBColumn):DuckDBColumn|null {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new DuckDBColumn).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
};

/**
 * @returns number
 */
columnsLength():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @returns number
 */
rows():number {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
errorMessage():string|null
errorMessage(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
errorMessage(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param flatbuffers.Builder builder
 */
static startDuckDBResult(builder:flatbuffers.Builder) {
  builder.startObject(3);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset columnsOffset
 */
static addColumns(builder:flatbuffers.Builder, columnsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, columnsOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param Array.<flatbuffers.Offset> data
 * @returns flatbuffers.Offset
 */
static createColumnsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param flatbuffers.Builder builder
 * @param number numElems
 */
static startColumnsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param flatbuffers.Builder builder
 * @param number rows
 */
static addRows(builder:flatbuffers.Builder, rows:number) {
  builder.addFieldInt32(1, rows, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset errorMessageOffset
 */
static addErrorMessage(builder:flatbuffers.Builder, errorMessageOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, errorMessageOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endDuckDBResult(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

static createDuckDBResult(builder:flatbuffers.Builder, columnsOffset:flatbuffers.Offset, rows:number, errorMessageOffset:flatbuffers.Offset):flatbuffers.Offset {
  DuckDBResult.startDuckDBResult(builder);
  DuckDBResult.addColumns(builder, columnsOffset);
  DuckDBResult.addRows(builder, rows);
  DuckDBResult.addErrorMessage(builder, errorMessageOffset);
  return DuckDBResult.endDuckDBResult(builder);
}
}