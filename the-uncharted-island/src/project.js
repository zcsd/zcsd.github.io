window.__require=function e(t,n,r){function i(o,a){if(!n[o]){if(!t[o]){var s=o.split("/");if(s=s[s.length-1],!t[s]){var u="function"==typeof __require&&__require;if(!a&&u)return u(s,!0);if(c)return c(s,!0);throw new Error("Cannot find module '"+o+"'")}}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){return i(t[o][1][e]||e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var c="function"==typeof __require&&__require,o=0;o<r.length;o++)i(r[o]);return i}({DoDiffusionTest:[function(e,t,n){"use strict";cc._RF.push(t,"7f3d8aEJl9GmrTCiwVDYKcA","DoDiffusionTest"),cc.Class({extends:cc.Component,properties:{nameLabel:{default:null,type:cc.Label},avatarSprite:{default:null,type:cc.Sprite},diffusion:{default:null,type:cc.Node}},onLoad:function(){var e=cc.find("player").getComponent("Player");this.nameLabel.string=e.nickName;var t=this;cc.loader.loadRes(e.avatarImgDir+"_s",cc.SpriteFrame,function(e,n){t.avatarSprite.spriteFrame=n})},backToMapScene:function(){cc.director.loadScene("LevelMap")},readyToDiffuse:function(){this.diffusion.getComponent(cc.Animation).play("diffusionAni")},resetScene:function(){},start:function(){}}),cc._RF.pop()},{}],DoOsmosisTest:[function(e,t,n){"use strict";cc._RF.push(t,"643fdDwJdxFvLqYaBj6333z","DoOsmosisTest"),cc.Class({extends:cc.Component,properties:{nameLabel:{default:null,type:cc.Label},avatarSprite:{default:null,type:cc.Sprite},osmosis:{default:null,type:cc.Node}},onLoad:function(){var e=cc.find("player").getComponent("Player");this.nameLabel.string=e.nickName;var t=this;cc.loader.loadRes(e.avatarImgDir+"_s",cc.SpriteFrame,function(e,n){t.avatarSprite.spriteFrame=n})},start:function(){},backToMapScene:function(){cc.director.loadScene("LevelMap")},readyToOsmosis:function(){this.osmosis.getComponent(cc.Animation).play("osmosisAni")}}),cc._RF.pop()},{}],LevelMap:[function(e,t,n){"use strict";cc._RF.push(t,"f9f88DE3JFF9IHNf9zR9atg","LevelMap"),cc.Class({extends:cc.Component,properties:{nameLabel:{default:null,type:cc.Label},avatarSprite:{default:null,type:cc.Sprite},standSprite:{default:null,type:cc.Sprite}},onLoad:function(){var e=cc.find("player").getComponent("Player");this.nameLabel.string=e.nickName;var t=this;cc.loader.loadRes(e.avatarImgDir,cc.SpriteFrame,function(e,n){t.standSprite.spriteFrame=n}),cc.loader.loadRes(e.avatarImgDir+"_s",cc.SpriteFrame,function(e,n){t.avatarSprite.spriteFrame=n})},start:function(){},goToDiffScene:function(){cc.director.loadScene("DoDiffusionTest")},goToOsmosisScene:function(){cc.director.loadScene("DoOsmosisTest")}}),cc._RF.pop()},{}],Player:[function(e,t,n){"use strict";cc._RF.push(t,"78e20iBzjdI5IKlaT6IseD6","Player"),cc.Class({extends:cc.Component,properties:{nickName:"",gender:"boy",avatarImgDir:"boy_0"},onLoad:function(){cc.game.addPersistRootNode(this.node)},start:function(){}}),cc._RF.pop()},{}],SetAvatar:[function(e,t,n){"use strict";cc._RF.push(t,"82a83Mtt4NKPqqC6sQ8GU8M","SetAvatar"),cc.Class({extends:cc.Component,properties:{nameEditBox:{default:null,type:cc.EditBox},genderToggleContainer:{default:null,type:cc.ToggleContainer},frontSprite:{default:null,type:cc.Sprite},nextButton:{default:null,type:cc.Button},player:cc.Node,coinsLabel:cc.Label,currentGender:"boy",currentImgPosition:0,currentImgDir:"boy_0"},onLoad:function(){this.resetScene()},getInputName:function(){},changeAvatar:function(){var e=["boy_0","boy_1"];this.currentImgPosition+=1,this.currentImgPosition==e.length&&(this.currentImgPosition=0),"boy"==this.currentGender?this.currentImgDir=e[this.currentImgPosition]:"girl"==this.currentGender&&(this.currentImgDir=["girl_0","girl_1"][this.currentImgPosition]);var t=this;cc.loader.loadRes(this.currentImgDir,cc.SpriteFrame,function(e,n){t.frontSprite.spriteFrame=n})},changeGender:function(){this.genderToggleContainer.toggleItems[0].isChecked?this.currentGender="boy":this.genderToggleContainer.toggleItems[1].isChecked&&(this.currentGender="girl"),this.currentImgPosition=-1,this.changeAvatar()},resetScene:function(){this.currentGender="boy",this.currentImgPosition=0,this.currentImgDir="boy_0",this.nameEditBox.string="",this.genderToggleContainer.toggleItems[0].isChecked=!0,this.changeGender(),this.coinsLabel.string="200",this.nextButton.interactable=!1},goToNextScene:function(){if(0==this.nameEditBox.string.length||0==this.nameEditBox.string.trim().length)console.log("Empty name input.");else{var e=cc.find("player").getComponent("Player");e.nickName=this.nameEditBox.string,e.gender=this.currentGender,e.avatarImgDir=this.currentImgDir,cc.director.loadScene("LevelMap")}},start:function(){},update:function(e){0==this.nameEditBox.string.length||0==this.nameEditBox.string.trim().length?this.nextButton.interactable=!1:this.nextButton.interactable=!0}}),cc._RF.pop()},{}],StarGame:[function(e,t,n){"use strict";cc._RF.push(t,"ea8f5djBEpGuaWin7QDBo/U","StarGame"),cc.Class({extends:cc.Component,properties:{startButton:{default:null,type:cc.Button},isAvatarExisted:!1},goToNextScene:function(){this.isAvatarExisted?console.log("Avatar is already created."):cc.director.loadScene("SetAvatar")},start:function(){}}),cc._RF.pop()},{}]},{},["DoDiffusionTest","DoOsmosisTest","LevelMap","Player","SetAvatar","StarGame"]);