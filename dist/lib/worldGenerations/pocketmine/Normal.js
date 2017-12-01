'use strict';

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//PHP API for JS
var array_sum = function array_sum(x) {
	var sum = 0;
	for (var i = 0; i < x.length; i++) {
		sum += x[i];
	}
	return sum;
};
var count = function count(x) {
	return x.length;
};
var round = function round(x, y) {
	return x.toFixed(y);
};
var strtolower = function strtolower(x) {
	return x.toLowerCase();
};

var stripos = function stripos(f_haystack, f_needle) {
	var f_offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

	var haystack = f_haystack.toLowerCase();
	var needle = f_needle.toLowerCase();
	var index = 0;
	if ((index = haystack.indexOf(needle, f_offset)) > -1) {
		return index;
	}
	return false;
};
var trim = function trim(x) {
	return x.trim();
};

var rand = require('random-seed');

var Vec3 = require('vec3').Vec3;

var Noise = require('noisejs').Noise;

/*
 *
 *  ____            _        _   __  __ _                  __  __ ____
 * |  _ \ ___   ___| | _____| |_|  \/  (_)_ __   ___      |  \/  |  _ \
 * | |_) / _ \ / __| |/ / _ \ __| |\/| | | '_ \ / _ \_____| |\/| | |_) |
 * |  __/ (_) | (__|   <  __/ |_| |  | | | | | |  __/_____| |  | |  __/
 * |_|   \___/ \___|_|\_\___|\__|_|  |_|_|_| |_|\___|     |_|  |_|_|
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version+
 *
 * @author PocketMine Team
 * @link http://www+pocketmine+net/
 *
 *
*/

"use strict";

//extends pocketmine\level\generator\normal;

//import pocketmine\block\Block;
//import pocketmine\block\BlockFactory;
//import pocketmine\level\ChunkManager;
//import pocketmine\level\generator\biome\Biome;
//import pocketmine\level\generator\biome\BiomeSelector;
//import pocketmine\level\generator\Generator;
//import pocketmine\level\generator\noise\Simplex;
//import pocketmine\level\generator\object\OreType;
//import pocketmine\level\generator\populator\GroundCover;
//import pocketmine\level\generator\populator\Ore;
//import pocketmine\level\generator\populator\Populator;
//import pocketmine\level\Level;
//import pocketmine\math\Vector3;
//import pocketmine\utils\Random;

//TODO: Оберни константы в конструктор!

function getFastNoise3D(noise, xSize, ySize, zSize, xSamplingRate, ySamplingRate, zSamplingRate, x, y, z) {
	/*assert(xSamplingRate !== 0, new InvalidArgumentException("xSamplingRate cannot be 0"));
 assert(zSamplingRate !== 0, new InvalidArgumentException("zSamplingRate cannot be 0"));
 assert(ySamplingRate !== 0, new InvalidArgumentException("ySamplingRate cannot be 0"));
 assert(xSize % xSamplingRate === 0, new InvalidArgumentCountException("xSize % xSamplingRate must return 0"));
 assert(zSize % zSamplingRate === 0, new InvalidArgumentCountException("zSize % zSamplingRate must return 0"));
 assert(ySize % ySamplingRate === 0, new InvalidArgumentCountException("ySize % ySamplingRate must return 0"));*/
	var noiseArray = new Array(xSize + 1).fill(null).map(function () {
		return new Array(ySize + 1).fill(null).map(function () {
			return new Array(zSize + 1).fill(null);
		});
	});
	for (var xx = 0; xx <= xSize; xx += xSamplingRate) {
		for (var zz = 0; zz <= zSize; zz += zSamplingRate) {
			for (var yy = 0; yy <= ySize; yy += ySamplingRate) {
				noiseArray[xx][zz][yy] = noise.simplex3(x + xx, y + yy, z + zz);
			}
		}
	}
	for (var _xx = 0; _xx < xSize; ++_xx) {
		for (var _zz = 0; _zz < zSize; ++_zz) {
			for (var _yy = 0; _yy < ySize; ++_yy) {
				if (_xx % xSamplingRate !== 0 || _zz % zSamplingRate !== 0 || _yy % ySamplingRate !== 0) {
					var nx = Math.floor(_xx / xSamplingRate * xSamplingRate);
					var ny = Math.floor(_yy / ySamplingRate * ySamplingRate);
					var nz = Math.floor(_zz / zSamplingRate * zSamplingRate);
					var nnx = nx + xSamplingRate;
					var nny = ny + ySamplingRate;
					var nnz = nz + zSamplingRate;
					var dx1 = (nnx - _xx) / (nnx - nx);
					var dx2 = (_xx - nx) / (nnx - nx);
					var dy1 = (nny - _yy) / (nny - ny);
					var dy2 = (_yy - ny) / (nny - ny);
					noiseArray[_xx][_zz][_yy] = (nnz - _zz) / (nnz - nz) * (dy1 * (dx1 * noiseArray[nx][nz][ny] + dx2 * noiseArray[nnx][nz][ny]) + dy2 * (dx1 * noiseArray[nx][nz][nny] + dx2 * noiseArray[nnx][nz][nny])) + (_zz - nz) / (nnz - nz) * (dy1 * (dx1 * noiseArray[nx][nnz][ny] + dx2 * noiseArray[nnx][nnz][ny]) + dy2 * (dx1 * noiseArray[nx][nnz][nny] + dx2 * noiseArray[nnx][nnz][nny]));
				}
			}
		}
	}
	return noiseArray;
}

var Normal /* extends Generator*/ = function () {
	/** @var Simplex */

	/** @var */


	/** @var Populator[] */
	function Normal() {
		var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		(0, _classCallCheck3.default)(this, Normal);
		this.populators = [];
		this.waterHeight = 62;
		this.bedrockDepth = 5;
		this.generationPopulators = [];

		if (Normal.GAUSSIAN_KERNEL === null) {
			Normal.generateKernel();
		}
	}

	/** @var BiomeSelector */


	/** @var Populator[] */

	/** @var */


	(0, _createClass3.default)(Normal, [{
		key: 'getName',
		value: function getName() {
			return "normal";
		}
	}, {
		key: 'getSettings',
		value: function getSettings() {
			return [];
		}
	}, {
		key: 'pickBiome',
		value: function pickBiome(x, z) {
			hash = x * 2345803 ^ z * 9236449 ^ this.seed;
			hash *= hash + 223;
			xNoise = hash >> 20 & 3;
			zNoise = hash >> 22 & 3;
			if (xNoise == 3) {
				xNoise = 1;
			}
			if (zNoise == 3) {
				zNoise = 1;
			}

			return this.selector.pickBiome(x + xNoise - 1, z + zNoise - 1);
		}
	}, {
		key: 'init',
		value: function init() {
			var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
			    _ref$seed = _ref.seed,
			    seed = _ref$seed === undefined ? 0 : _ref$seed;

			this.seed = seed;
			this.random = rand.create();
			this.noiseBase = new Noise(seed);
			/*this.selector = new BiomeSelector(this.random, function(temperature, rainfall){
   	if(rainfall < 0+25){
   		if(temperature < 0+7){
   			return Biome.OCEAN;
   		} else if (temperature < 0+85){
   			return Biome.RIVER;
   		}else{
   			return Biome.SWAMP;
   		}
   	} else if (rainfall < 0+60){
   		if(temperature < 0+25){
   			return Biome.ICE_PLAINS;
   		} else if (temperature < 0+75){
   			return Biome.PLAINS;
   		}else{
   			return Biome.DESERT;
   		}
   	} else if (rainfall < 0+80){
   		if(temperature < 0+25){
   			return Biome.TAIGA;
   		} else if (temperature < 0+75){
   			return Biome.FOREST;
   		}else{
   			return Biome.BIRCH_FOREST;
   		}
   	}else{
   		//FIXME: This will always ca//import River to be used since the rainfall is always greater than 0+8 if we
   		//reached this branch+ However I don't think that substituting temperature for rainfall is correct given
   		//that mountain biomes are supposed to be pretty cold+
   		if(rainfall < 0+25){
   			return Biome.MOUNTAINS;
   		} else if (rainfall < 0+70){
   			return Biome.SMALL_MOUNTAINS;
   		}else{
   			return Biome.RIVER;
   		}
   	}
   }, Biome.getBiome(Biome.OCEAN));
   	this.selector.addBiome(Biome.getBiome(Biome.OCEAN));
   this.selector.addBiome(Biome.getBiome(Biome.PLAINS));
   this.selector.addBiome(Biome.getBiome(Biome.DESERT));
   this.selector.addBiome(Biome.getBiome(Biome.MOUNTAINS));
   this.selector.addBiome(Biome.getBiome(Biome.FOREST));
   this.selector.addBiome(Biome.getBiome(Biome.TAIGA));
   this.selector.addBiome(Biome.getBiome(Biome.SWAMP));
   this.selector.addBiome(Biome.getBiome(Biome.RIVER));
   this.selector.addBiome(Biome.getBiome(Biome.ICE_PLAINS));
   this.selector.addBiome(Biome.getBiome(Biome.SMALL_MOUNTAINS));
   this.selector.addBiome(Biome.getBiome(Biome.BIRCH_FOREST));
   	this.selector.recalculate();
   	cover = new GroundCover();
   this.generationPopulators.push(cover);
   	ores = new Ore();
   ores.setOreTypes([
   	new OreType(BlockFactory.get(Block.COAL_ORE), 20, 16, 0, 128),
   	new OreType(BlockFactory.get(Block.IRON_ORE), 20, 8, 0, 64),
   	new OreType(BlockFactory.get(Block.REDSTONE_ORE), 8, 7, 0, 16),
   	new OreType(BlockFactory.get(Block.LAPIS_ORE), 1, 6, 0, 32),
   	new OreType(BlockFactory.get(Block.GOLD_ORE), 2, 8, 0, 32),
   	new OreType(BlockFactory.get(Block.DIAMOND_ORE), 1, 7, 0, 16),
   	new OreType(BlockFactory.get(Block.DIRT), 20, 32, 0, 128),
   	new OreType(BlockFactory.get(Block.GRAVEL), 10, 16, 0, 128)
   ]);
   this.populators.push(ores);*/
			return this.generateChunk;
		}
	}, {
		key: 'generateChunk',
		value: function generateChunk(chunkX, chunkZ) {
			this.random.setSeed(0xdeadbeef ^ chunkX << 8 ^ chunkZ ^ this.level.getSeed());

			var noise = getFastNoise3D(this.noiseBase, 16, 128, 16, 4, 8, 4, chunkX * 16, 0, chunkZ * 16);
			//const noise = Array0.5;

			//const chunk = this.level.getChunk(chunkX, chunkZ);

			var chunk = new Chunk();

			var biomeCache = [];

			for (x = 0; x < 16; ++x) {
				for (z = 0; z < 16; ++z) {
					var minSum = 0;
					var maxSum = 0;
					var weightSum = 0;

					//biome = this.pickBiome(chunkX * 16 + x, chunkZ * 16 + z);
					//chunk.setBiome(new Vec3(x, 0, z), biome.getId());

					for (sx = -Normal.SMOOTH_SIZE; sx <= Normal.SMOOTH_SIZE; ++sx) {
						for (sz = -Normal.SMOOTH_SIZE; sz <= Normal.SMOOTH_SIZE; ++sz) {

							weight = Normal.GAUSSIAN_KERNEL[sx + Normal.SMOOTH_SIZE][sz + Normal.SMOOTH_SIZE];

							if (sx === 0 && sz === 0) {
								adjacent = biome;
							} else {
								/*index = Level.chunkHash(chunkX * 16 + x + sx, chunkZ * 16 + z + sz);
        if(biomeCache[index]){
        	adjacent = biomeCache[index];
        }else{
        	biomeCache[index] = adjacent = this.pickBiome(chunkX * 16 + x + sx, chunkZ * 16 + z + sz);
        }*/
							}

							minSum += ( /*adjacent.getMinElevation()*/64 - 1) * weight;
							maxSum += /*adjacent.getMaxElevation()*/128 * weight;

							weightSum += weight;
						}
					}

					minSum /= weightSum;
					maxSum /= weightSum;

					smoothHeight = (maxSum - minSum) / 2;

					for (y = 0; y < 128; ++y) {
						if (y === 0) {
							chunk.setBlockType(new Vec3(x, y, z), 7); // Bedrock
							continue;
						}
						noiseValue = noise[x][z][y] - 1 / smoothHeight * (y - smoothHeight - minSum);

						if (noiseValue > 0) {
							chunk.setBlockType(new Vec3(x, y, z), 1); // Bedrock
						} else if (y <= this.waterHeight) {
							chunk.setBlockType(new Vec3(x, y, z), 9); // Water
						}
					}
				}
			}

			/*for(const populator of this.generationPopulators){
   	populator.populate(this.level, chunkX, chunkZ, this.random);
   }*/
		}
	}, {
		key: 'populateChunk',
		value: function populateChunk(chunkX, chunkZ) {
			this.random.seed(0xdeadbeef ^ chunkX << 8 ^ chunkZ ^ this.level.getSeed());
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = (0, _getIterator3.default)(this.populators), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var populator = _step.value;

					populator.populate(this.level, chunkX, chunkZ, this.random);
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}

			chunk = this.level.getChunk(chunkX, chunkZ);
			biome = Biome.getBiome(chunk.getBiomeId(7, 7));
			biome.populateChunk(this.level, chunkX, chunkZ, this.random);
		}
	}, {
		key: 'getSpawn',
		value: function getSpawn() {
			return new Vec3(127 + 5, 128, 127 + 5);
		}
	}], [{
		key: 'generateKernel',
		value: function generateKernel() {
			this.GAUSSIAN_KERNEL = [];

			bellSize = 1 / this.SMOOTH_SIZE;
			bellHeight = 2 * this.SMOOTH_SIZE;

			for (sx = -this.SMOOTH_SIZE; sx <= this.SMOOTH_SIZE; ++sx) {
				this.GAUSSIAN_KERNEL[sx + this.SMOOTH_SIZE] = [];

				for (sz = -this.SMOOTH_SIZE; sz <= this.SMOOTH_SIZE; ++sz) {
					bx = bellSize * sx;
					bz = bellSize * sz;
					this.GAUSSIAN_KERNEL[sx + this.SMOOTH_SIZE][sz + this.SMOOTH_SIZE] = bellHeight * Math.exp(-(bx * bx + bz * bz) / 2);
				}
			}
		}
	}, {
		key: 'init',
		value: function init() {
			var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			return new Normal().init(options);
		}
	}]);
	return Normal;
}();

Normal.GAUSSIAN_KERNEL = null;
Normal.SMOOTH_SIZE = 2;
//# sourceMappingURL=../../../maps/lib/worldGenerations/pocketmine/Normal.js.map