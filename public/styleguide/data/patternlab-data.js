var config = {"paths":{"source":{"root":"./source/","patterns":"./source/_patterns/","data":"./source/_data/","meta":"./source/_meta/","annotations":"./source/_annotations/","styleguide":"./node_modules/styleguidekit-assets-default/dist/","patternlabFiles":"./node_modules/styleguidekit-mustache-default/views/","js":"./source/js","images":"./source/images","fonts":"./source/fonts","css":"./source/css/"},"public":{"root":"./public/","patterns":"./public/patterns/","data":"./public/styleguide/data/","annotations":"./public/annotations/","styleguide":"./public/styleguide/","js":"./public/js","images":"./public/images","fonts":"./public/fonts","css":"./public/css"}},"styleGuideExcludes":["templates","pages"],"defaultPattern":"all","cleanPublic":true,"patternExtension":"mustache","ignored-extensions":["scss","DS_Store","less"],"ignored-directories":["scss"],"debug":false,"ishControlsHide":{"s":false,"m":false,"l":false,"full":false,"random":false,"disco":false,"hay":true,"mqs":false,"find":false,"views-all":true,"views-annotations":false,"views-code":false,"views-new":false,"tools-all":false,"tools-docs":false},"ishMinimum":"240","ishMaximum":"2600","patternStateCascade":["inprogress","inreview","complete"],"patternExportPatternPartials":[],"patternExportDirectory":"./pattern_exports/","baseurl":"","cacheBust":true,"starterkitSubDir":"dist","outputFileSuffixes":{"rendered":".rendered","rawTemplate":"","markupOnly":".markup-only"}};
var ishControls = {"ishControlsHide":{"s":false,"m":false,"l":false,"full":false,"random":false,"disco":false,"hay":true,"mqs":false,"find":false,"views-all":true,"views-annotations":false,"views-code":false,"views-new":false,"tools-all":false,"tools-docs":false}};
var navItems = {"patternTypes": [{"patternTypeLC":"atoms","patternTypeUC":"Atoms","patternType":"00-atoms","patternTypeDash":"atoms","patternTypeItems":[{"patternSubtypeLC":"colors","patternSubtypeUC":"Colors","patternSubtype":"colors","patternSubtypeDash":"colors","patternSubtypeItems":[{"patternPartial":"viewall-atoms-colors","patternName":"View All","patternPath":"00-atoms-colors/index.html","patternType":"00-atoms","order":0},{"patternPartial":"atoms-brand-colors","patternName":"Brand Colors","patternState":"","patternSrcPath":"00-atoms/colors/brand-colors","patternPath":"00-atoms-colors/00-atoms-colors.html","order":9007199254740991}]},{"patternSubtypeLC":"images","patternSubtypeUC":"Images","patternSubtype":"images","patternSubtypeDash":"images","patternSubtypeItems":[{"patternPartial":"viewall-atoms-images","patternName":"View All","patternPath":"00-atoms-images/index.html","patternType":"00-atoms","order":0},{"patternPartial":"atoms-logos","patternName":"Logos","patternState":"","patternSrcPath":"00-atoms/images/logos","patternPath":"00-atoms-images/00-atoms-images.html","order":9007199254740991}]}],"patternItems":[{"patternPartial":"viewall-atoms-all","patternName":"View All","patternPath":"00-atoms/index.html","order":-9007199254740991}]},{"patternTypeLC":"molecules","patternTypeUC":"Molecules","patternType":"01-molecules","patternTypeDash":"molecules","patternTypeItems":[{"patternSubtypeLC":"form-controls","patternSubtypeUC":"Form-controls","patternSubtype":"form-controls","patternSubtypeDash":"form-controls","patternSubtypeItems":[{"patternPartial":"viewall-molecules-form-controls","patternName":"View All","patternPath":"01-molecules-form-controls/index.html","patternType":"01-molecules","order":0},{"patternPartial":"molecules-sw-custom-multiselect","patternName":"Sw Custom Multiselect","patternState":"","patternSrcPath":"01-molecules/form-controls/sw-custom-multiselect","patternPath":"01-molecules-form-controls/01-molecules-form-controls.html","order":9007199254740991},{"patternPartial":"molecules-sw-numeric-input","patternName":"Sw Numeric Input","patternState":"","patternSrcPath":"01-molecules/form-controls/sw-numeric-input","patternPath":"01-molecules-form-controls/01-molecules-form-controls.html","order":9007199254740991}]}],"patternItems":[{"patternPartial":"viewall-molecules-all","patternName":"View All","patternPath":"01-molecules/index.html","order":-9007199254740991}]},{"patternTypeLC":"organisms","patternTypeUC":"Organisms","patternType":"02-organisms","patternTypeDash":"organisms","patternTypeItems":[{"patternSubtypeLC":"angular","patternSubtypeUC":"Angular","patternSubtype":"angular","patternSubtypeDash":"angular","patternSubtypeItems":[{"patternPartial":"viewall-organisms-angular","patternName":"View All","patternPath":"02-organisms-angular/index.html","patternType":"02-organisms","order":0},{"patternPartial":"organisms-material","patternName":"Material","patternState":"","patternSrcPath":"02-organisms/angular/material","patternPath":"02-organisms-angular/02-organisms-angular.html","order":9007199254740991},{"patternPartial":"organisms-sw-grid-dashboard","patternName":"Sw Grid Dashboard","patternState":"","patternSrcPath":"02-organisms/angular/sw-grid-dashboard","patternPath":"02-organisms-angular/02-organisms-angular.html","order":9007199254740991}]}],"patternItems":[{"patternPartial":"viewall-organisms-all","patternName":"View All","patternPath":"02-organisms/index.html","order":-9007199254740991}]},{"patternTypeLC":"templates","patternTypeUC":"Templates","patternType":"03-templates","patternTypeDash":"templates","patternTypeItems":[{"patternSubtypeLC":"angular","patternSubtypeUC":"Angular","patternSubtype":"angular","patternSubtypeDash":"angular","patternSubtypeItems":[{"patternPartial":"viewall-templates-angular","patternName":"View All","patternPath":"03-templates-angular/index.html","patternType":"03-templates","order":0},{"patternPartial":"templates-tooltip","patternName":"Tooltip","patternState":"","patternSrcPath":"03-templates/angular/tooltip","patternPath":"03-templates-angular/03-templates-angular.html","order":9007199254740991}]}],"patternItems":[{"patternPartial":"viewall-templates-all","patternName":"View All","patternPath":"03-templates/index.html","order":-9007199254740991}]}], "ishControlsHide": {"s":false,"m":false,"l":false,"full":false,"random":false,"disco":false,"hay":true,"mqs":false,"find":false,"views-all":true,"views-annotations":false,"views-code":false,"views-new":false,"tools-all":false,"tools-docs":false}};
var patternPaths = {"atoms":{"brand-colors":"00-atoms-colors-brand-colors","logos":"00-atoms-images-logos"},"molecules":{"sw-custom-multiselect":"01-molecules-form-controls-sw-custom-multiselect","sw-numeric-input":"01-molecules-form-controls-sw-numeric-input"},"organisms":{"material":"02-organisms-angular-material","sw-grid-dashboard":"02-organisms-angular-sw-grid-dashboard"},"templates":{"tooltip":"03-templates-angular-tooltip"}};
var viewAllPaths = {"atoms":{"colors":"00-atoms-colors","all":"00-atoms","images":"00-atoms-images"},"molecules":{"form-controls":"01-molecules-form-controls","all":"01-molecules"},"organisms":{"angular":"02-organisms-angular","all":"02-organisms"},"templates":{"angular":"03-templates-angular","all":"03-templates"}};
var plugins = [];
var theme = undefined;
var defaultShowPatternInfo = false;
var defaultPattern = "all";
