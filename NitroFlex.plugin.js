/**
 * @name NitroFlex
 * @authorLink https://github.com/lol219
 * @source https://github.com/lol219/NitroFlex
 * @invite TCuGtFNhpq
 */
/*@cc_on
@if (@_jscript)
    
    // Offer to self-install for clueless users that try to run this directly.
    var shell = WScript.CreateObject("WScript.Shell");
    var fs = new ActiveXObject("Scripting.FileSystemObject");
    var pathPlugins = shell.ExpandEnvironmentStrings("%APPDATA%\BetterDiscord\plugins");
    var pathSelf = WScript.ScriptFullName;
    // Put the user at ease by addressing them in the first person
    shell.Popup("It looks like you've mistakenly tried to run me directly. \n(Don't do that!)", 0, "I'm a plugin for BetterDiscord", 0x30);
    if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
        shell.Popup("I'm in the correct folder already.", 0, "I'm already installed", 0x40);
    } else if (!fs.FolderExists(pathPlugins)) {
        shell.Popup("I can't find the BetterDiscord plugins folder.\nAre you sure it's even installed?", 0, "Can't install myself", 0x10);
    } else if (shell.Popup("Should I copy myself to BetterDiscord's plugins folder for you?", 0, "Do you need some help?", 0x34) === 6) {
        fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true);
        // Show the user where to put plugins in the future
        shell.Exec("explorer " + pathPlugins);
        shell.Popup("I'm installed!", 0, "Successfully installed", 0x40);
    }
    WScript.Quit();
@else@*/
   // (([Plugin, Api]) => {

   
const Bapi = BdApi;

module.exports = (Plugin, Library) => {
     const {Patcher} = Library;
    return  class  NitroFlex extends Plugin {

        onStart() {
            Patcher.before(Logger, "log", (t, a) => {
                a[0] = "Patched Message: " + a[0];
            });
        }

        onStop() {
            Patcher.unpatchAll();
        }
    };
};
 /*this.__isPowerCord = !!window.powercord && typeof BdApi.__getPluginConfigPath === 'function' || typeof global.isTab !== 'undefined';
 let ZeresPluginLibraryOutdated = false;
    if (global.BdApi && BdApi.Plugins && typeof BdApi.Plugins.get === 'function' ) {
      const versionChecker = (a, b) => ((a = a.split('.').map(a => parseInt(a))), (b = b.split('.').map(a => parseInt(a))), !!(b[0] > a[0])) || !!(b[0] == a[0] && b[1] > a[1]) || !!(b[0] == a[0] && b[1] == a[1] && b[2] > a[2]);
      const isOutOfDate = (lib, minVersion) => lib && lib._config && lib._config.info && lib._config.info.version && versionChecker(lib._config.info.version, minVersion) || typeof global.isTab !== 'undefined';
      
      const iZeresPluginLibrary = BdApi.Plugins.get('ZeresPluginLibrary');*/
      
      
    //}
                 
             
class NitroFlex{
    getName() {return "NitroFlex";}
    getDescription() {return "A plugin that sends emotes' links when you click on them. with 1080 bypass screenshare ,Continued by Alexandro(Discontinued by Lemon)";}
    getVersion() {return "1.0.6";}
    getAuthor() {return "Alexandro";}

    start() {
        if (!global.ZeresPluginLibrary) return window.BdApi.alert("Library Missing",`The library plugin needed for ${this.getName()} is missing.<br /><br /> <a href="https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js" target="_blank">Click here to download the library!</a>`);
        ZLibrary.PluginUpdater.checkForUpdate(this.getName(), this.getVersion(), "https://raw.githubusercontent.com/lol219/NitroFlex/main/NitroFlex.plugin.js");
    }

    stop() {

    }
}

     
module.exports = (() => {



    const config = {
        "info": {
            "name":"NitroFlex",
            "authors": [
                {
                    "name":"Alexandro",
                    "discord_id":"820767057959321641",
                    "github_username":"lol219"
                }
            ],
            "version":"1.0.6",
            "description":
            "A plugin that sends emotes' links when you click on them. with 1080 bypass screenshare ,Continued by Alexandro(Discontinued by Lemon)",
            "github":"https://github.com/lol219/NitroFlex",
            "github_raw":"https://raw.githubusercontent.com/lol219/NitroFlex/main/NitroFlex.plugin.js"
        },
        "changelog":[
            {
                "title": 'fixed',
                "type": 'Fixed :',
                "items": [
                "**Popup** : Fixed the annoying popup when it asks you to download CrashRecovery plugin , if you have it it won't show the message again and never :D  "
                
                
                ]
            }
            
        ],   
        
        
        
        "main":"index.js"
    };
        
            
    /*for (let key in InternalBDFDB.defaults) InternalBDFDB.settings[key] = {};
    
    const LibraryConstants = {
        ToastIcons: {
            info: "INFO",
            danger: "CLOSE_CIRCLE",
            success: "CHECKMARK_CIRCLE",
            warning: "WARNING"
        },
        ToastPositions: {
            center: "toastscenter",
            left: "toastsleft",
            right: "toastsright"
        }
    };*/
    
    const PluginStores = {
        loaded: {},
        delayed: {
            loads: [],
            starts: []
        },
        updateData: {
            plugins: {},
            timeouts: [],
            downloaded: [],
            interval: null
        },
        patchQueues: {}
    };
    /*BDFDB.TimeUtils.timeout = function (callback, delay, ...args) {
        delay = parseFloat(delay);
        if (typeof callback != "function") return;
        if (isNaN(delay) || typeof delay != "number" || delay < 1) {
            let immediate = setImmediate(_ => BDFDB.TimeUtils.suppress(callback, "Immediate")(...[immediate, args].flat()));
            return immediate;
        }
        else {
            let start, paused = true, timeout = {
                pause: _ => {
                    if (paused) return;
                    paused = true;
                    BDFDB.TimeUtils.clear(timeout.timer);
                    delay -= performance.now() - start;
                },
                resume: _ => {
                    if (!paused) return;
                    paused = false;
                    start = performance.now();
                    timeout.timer = setTimeout(_ => BDFDB.TimeUtils.suppress(callback, "Timeout")(...[timeout, args].flat()), delay)
                }
            };
            timeout.resume();
            return timeout;
        }
    };*/


    return !global.ZeresPluginLibrary ? class {
        constructor() {
            this._config = config;
        }
        getName() {
            return config.info.name;
        }
        getAuthor() {
            return config.info.authors.map(a => a.name).join(", ");
        }
        getDescription() {
            return config.info.description;
        }
        getVersion() {
            return config.info.version;
        }
        load() {
            BdApi.showConfirmationModal("Library Missing", `The library plugin needed for ${config.info.name} is missing. Please click Download Now to install it.`, {
                confirmText: "Download Now",
                cancelText: "Cancel",
                onConfirm: () => {
                    require("request").get("https://rauenzi.github.io/BDPluginLibrary/release/0PluginLibrary.plugin.js", async (error, response, body) => {
                        if (error) return require("electron").shell.openExternal("https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js");
                        await new Promise(r => require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), body, r));
                    });
                }
            });
        }
        start() {}
        stop() {}
        load() {
            BdApi.showConfirmationModal("Plugin Needed for a better performance", `The library plugin needed for ${config.info.name} is missing. Please click Download Now to install it.`, {
                confirmText: "Download Now",
                cancelText: "Cancel",
                onConfirm: () => {
                    require("request").get("", async (error, response, body) => {
                        if (error) return require("electron").shell.openExternal("https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/lol219/AlexLib/main/AlexLib.plugin.js");
                        await new Promise(r => require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "CrashRecovery.plugin.js"), body, r));
                    });
                }
            });
        }
        start() {}
        stop() {}
        
           
        
        
       /*} : !(win
     } : !(window.Lightcord || window.LightCord) ? class {
        getName () {return config.info.name;}
        getAuthor () {return config.info.author;}
        getVersion () {return config.info.version;}
        getDescription () {return "Do not use LightCord!";}
        load () {BdApi.alert("Attention!", "By using LightCord you are risking your Discord Account, due to using a 3rd Party Client. Switch to an official Discord Client (https://discord.com/) with the proper BD Injection (https://betterdiscord.app/)");}*/
        } : !window.BDFDB_Global || (!window.BDFDB_Global.loaded && !window.BDFDB_Global.started) ? class {
        getName () {return config.info.name;}
        getAuthor () {return config.info.author;}
        getVersion () {return config.info.version;}
        getDescription () {return `The Library Plugin needed for ${config.info.name} is missing. Open the Plugin Settings to download it. \n\n${config.info.description}`;}
        
        downloadLibrary () {
            require("request").get("https://mwittrien.github.io/BetterDiscordAddons/Library/0BDFDB.plugin.js", (e, r, b) => {
                if (!e && b && r.statusCode == 200) require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0BDFDB.plugin.js"), b, _ => BdApi.showToast("Finished downloading BDFDB Library", {type: "success"}));
                else BdApi.alert("Error", "Could not download BDFDB Library Plugin. Try again later or download it manually from GitHub: https://mwittrien.github.io/downloader/?library");
            });
        }
        
        load(){
            if (!window.BDFDB_Global || !Array.isArray(window.BDFDB_Global.pluginQueue)) window.BDFDB_Global = Object.assign({}, window.BDFDB_Global, {pluginQueue: []});
            if (!window.BDFDB_Global.downloadModal) {
                window.BDFDB_Global.downloadModal = true;
                BdApi.showConfirmationModal("Library Missing", `The Library Plugin needed for ${config.info.name} is missing. Please click "Download Now" to install it.`, {
                    confirmText: "Download Now",
                    cancelText: "Cancel",
                    onCancel: _ => {delete window.BDFDB_Global.downloadModal;},
                    onConfirm: _ => {
                        delete window.BDFDB_Global.downloadModal;
                        this.downloadLibrary();
                    }
                });
            }
            if (!window.BDFDB_Global.pluginQueue.includes(config.info.name)) window.BDFDB_Global.pluginQueue.push(config.info.name);
        }
        start () {this.load();}
        stop () {}
    
    
    

    } : (([Plugin, Api]) => {
        const plugin = (Plugin,Api) => {
            

            
            const {
                Patcher,
                DiscordModules,
                DiscordAPI,
                Settings,
                Toasts,
                PluginUtilities
            } = Api;
            return class NitroFlex extends Plugin {
                defaultSettings = {
                    "emojiSize": "40",
                    "screenSharing": false,
                    "emojiBypass": true,
                    "clientsidePfp": false,
                    "pfpUrl": "",
                };
                settings = PluginUtilities.loadSettings(this.getName(), this.defaultSettings);
                originalNitroStatus = 0;
                clientsidePfp;
                screenShareFix;
                getSettingsPanel() {
                
                    let get_changelog = name => BdApi.Plugins.get(name)?.instance._config.changelog
                    

    
                    return Settings.SettingPanel.build(_ => this.saveAndUpdate(), ...[
                        new Settings.SettingGroup("Features").append(...[
                            new Settings.Switch("High Quality Screensharing", "Enable or disable 1080p/source @ 60fps screensharing. This adapts to your current nitro status.", this.settings.screenSharing, value => this.settings.screenSharing = value)
                        ]),
                        new Settings.SettingGroup("Emojis").append(
                            new Settings.Switch("Nitro Emotes Bypass", "Enable or disable using the Nitro Emote bypass.", this.settings.emojiBypass, value => this.settings.emojiBypass = value),
                            new Settings.Slider("Size", "The size of the emoji in pixels. 40 is recommended.", 16, 64, this.settings.emojiSize, size=>this.settings.emojiSize = size, {markers:[16,20,32,40,64], stickToMarkers:true})
                        ),
                            new Settings.Switch(
                                "Only Disabled Emojis", 
                                "Enable only for disabled emojis (grayed out emojis that you can't normally use because you don't have nitro).", 
                                this.settings.onlyDisabled, 
                                (e) => {this.settings.onlyDisabled = e}
                            ),
                            new Settings.SettingGroup("Profile Picture").append(...[
                                new Settings.Switch("Clientsided Profile Picture", "Enable or disable clientsided profile pictures.", this.settings.clientsidePfp, value => this.settings.clientsidePfp = value),
                                new Settings.Textbox("URL", "The direct URL that has the profile picture you want.", this.settings.pfpUrl,

                                    image => {
                                        try {
                                            new URL(image)
                                        } catch {
                                            return Toasts.error('This is an invalid URL!')
                                        }
                                        this.settings.pfpUrl = image
                                    }
                                )
                            ])
                    ])
                }

       
                
                saveAndUpdate() {
                    PluginUtilities.saveSettings(this.getName(), this.settings)
                    if (!this.settings.screenSharing) {
                        switch (this.originalNitroStatus) {
                            case 1:
                                BdApi.injectCSS("screenShare", `#app-mount > div.layerContainer-yqaFcK > div.layer-2KE1M9 > div > div > form > div:nth-child(2) > div > div > div.flex-1xMQg5.flex-1O1GKY.horizontal-1ae9ci.horizontal-2EEEnY.flex-1O1GKY.directionRow-3v3tfG.justifyStart-2NDFzi.alignStretch-DpGPf3.noWrap-3jynv6.modalContent-BM7Qeh > div:nth-child(1) > div > button:nth-child(4) {
                                    display: none;
                                  }`)
                                this.screenShareFix = setInterval(()=>{
                                    document.querySelector("#app-mount > div.layerContainer-yqaFcK > div.layer-2KE1M9 > div > div > form > div:nth-child(2) > div > div > div.flex-1xMQg5.flex-1O1GKY.horizontal-1ae9ci.horizontal-2EEEnY.flex-1O1GKY.directionRow-3v3tfG.justifyStart-2NDFzi.alignStretch-DpGPf3.noWrap-3jynv6.modalContent-BM7Qeh > div:nth-child(1) > div > button:nth-child(3)").click()
                                    clearInterval(this.screenShareFix)
                                }, 100)
                                break;
                            default: //if user doesn't have nitro?
                                BdApi.injectCSS("screenShare", `#app-mount > div.layerContainer-yqaFcK > div.layer-2KE1M9 > div > div > form > div:nth-child(2) > div > div > div.flex-1xMQg5.flex-1O1GKY.horizontal-1ae9ci.horizontal-2EEEnY.flex-1O1GKY.directionRow-3v3tfG.justifyStart-2NDFzi.alignStretch-DpGPf3.noWrap-3jynv6.modalContent-BM7Qeh > div:nth-child(1) > div > button:nth-child(4) {
                                    display: none;
                                  }
                                  #app-mount > div.layerContainer-yqaFcK > div.layer-2KE1M9 > div > div > form > div:nth-child(2) > div > div > div.flex-1xMQg5.flex-1O1GKY.horizontal-1ae9ci.horizontal-2EEEnY.flex-1O1GKY.directionRow-3v3tfG.justifyStart-2NDFzi.alignStretch-DpGPf3.noWrap-3jynv6.modalContent-BM7Qeh > div:nth-child(1) > div > button:nth-child(3) {
                                    display: none;
                                  }
                                  #app-mount > div.layerContainer-yqaFcK > div.layer-2KE1M9 > div > div > form > div:nth-child(2) > div > div > div.flex-1xMQg5.flex-1O1GKY.horizontal-1ae9ci.horizontal-2EEEnY.flex-1O1GKY.directionRow-3v3tfG.justifyStart-2NDFzi.alignStretch-DpGPf3.noWrap-3jynv6.modalContent-BM7Qeh > div:nth-child(2) > div > button:nth-child(3) {
                                    display: none;
                                  }`)
                                this.screenShareFix = setInterval(()=>{
                                    document.querySelector("#app-mount > div.layerContainer-yqaFcK > div.layer-2KE1M9 > div > div > form > div:nth-child(2) > div > div > div.flex-1xMQg5.flex-1O1GKY.horizontal-1ae9ci.horizontal-2EEEnY.flex-1O1GKY.directionRow-3v3tfG.justifyStart-2NDFzi.alignStretch-DpGPf3.noWrap-3jynv6.modalContent-BM7Qeh > div:nth-child(1) > div > button:nth-child(2)").click()
                                    document.querySelector("#app-mount > div.layerContainer-yqaFcK > div.layer-2KE1M9 > div > div > form > div:nth-child(2) > div > div > div.flex-1xMQg5.flex-1O1GKY.horizontal-1ae9ci.horizontal-2EEEnY.flex-1O1GKY.directionRow-3v3tfG.justifyStart-2NDFzi.alignStretch-DpGPf3.noWrap-3jynv6.modalContent-BM7Qeh > div:nth-child(2) > div > button:nth-child(2)").click()
                                    clearInterval(this.screenShareFix)
                                }, 100)
                            break;
                        }
                    }

                    if (this.settings.screenSharing) BdApi.clearCSS("screenShare")

                    if (this.settings.emojiBypass) {
                        //fix emotes with bad method
                        Patcher.before(DiscordModules.MessageActions, "sendMessage", (_, [, msg]) => {
                            msg.validNonShortcutEmojis.forEach(emoji => {
                                if (emoji.url.startsWith("/assets/")) return;
                                msg.content = msg.content.replace(`<${emoji.animated ? "a" : ""}${emoji.allNamesString.replace(/~\d/g, "")}${emoji.id}>`, emoji.url + `&size=${this.settings.emojiSize} `)
                            })
                        });
                        //for editing message also
                        Patcher.before(DiscordModules.MessageActions, "editMessage", (_,obj) => {
                            let msg = obj[2].content
                            if (msg.search(/\d{18}/g) == -1) return;
                            msg.match(/<a:.+?:\d{18}>|<:.+?:\d{18}>/g).forEach(idfkAnymore=>{
                                obj[2].content = obj[2].content.replace(idfkAnymore, `https://cdn.discordapp.com/emojis/${idfkAnymore.match(/\d{18}/g)[0]}?size=${this.settings.emojiSize}`)
                            })
                        });
                    }

                    if(!this.settings.emojiBypass) Patcher.unpatchAll(DiscordModules.MessageActions)

                    if (this.settings.clientsidePfp && this.settings.pfpUrl) {
                        this.clientsidePfp = setInterval(()=>{
                            document.querySelectorAll(`[src="${DiscordAPI.currentUser.discordObject.avatarURL.replace(".png", ".webp")}"]`).forEach(avatar=>{
                                avatar.src = this.settings.pfpUrl
                            })
                            document.querySelectorAll(`[src="${DiscordAPI.currentUser.discordObject.avatarURL}"]`).forEach(avatar=>{
                                avatar.src = this.settings.pfpUrl
                            })
                            document.querySelectorAll(`.avatarContainer-28iYmV.avatar-3tNQiO.avatarSmall-1PJoGO`).forEach(avatar=>{
                                if (!avatar.style.backgroundImage.includes(DiscordAPI.currentUser.discordObject.avatarURL)) return;
                                avatar.style = `background-image: url("${this.settings.pfpUrl}");`
                            })
                        }, 100)
                    }
                    if (!this.settings.clientsidePfp) this.removeClientsidePfp()
                }
                removeClientsidePfp() {
                    clearInterval(this.clientsidePfp)
                    document.querySelectorAll(`[src="${this.settings.pfpUrl}"]`).forEach(avatar=>{
                        avatar.src = DiscordAPI.currentUser.discordObject.avatarURL
                    })
                    document.querySelectorAll(`[src="${this.settings.pfpUrl}"]`).forEach(avatar=>{
                        avatar.src = DiscordAPI.currentUser.discordObject.avatarURL
                    })
                    document.querySelectorAll(`.avatarContainer-28iYmV.avatar-3tNQiO.avatarSmall-1PJoGO`).forEach(avatar=>{
                        if (!avatar.style.backgroundImage.includes(this.settings.pfpUrl)) return;
                        avatar.style = `background-image: url("${DiscordAPI.currentUser.discordObject.avatarURL}");`
                    })
                }
                onStart() {
                    this.originalNitroStatus = DiscordAPI.currentUser.discordObject.premiumType;
                    this.saveAndUpdate()
                    DiscordAPI.currentUser.discordObject.premiumType = 2
                }

                onStop() {
                    DiscordAPI.currentUser.discordObject.premiumType = this.originalNitroStatus;
                    this.removeClientsidePfp()
                    Patcher.unpatchAll();
                }
            };
        };
       
        return plugin(Plugin, Api);
    })(global.ZeresPluginLibrary.buildPlugin(config));
})();
/*@end@*/
       
       

        
