(function(){ 
    this.replaceAvatar = function(entityID) {
        MyAvatar.useFullAvatarURL(Entities.getEntityProperties(entityID,"description").description);
    };
    this.replaceAvatarByMouse = function(entityID, mouseEvent) {
        if (mouseEvent.isLeftButton) {
            this.replaceAvatar(entityID);
        }
    };
    this.clickDownOnEntity = this.replaceAvatarByMouse; 
    this.startFarTrigger = this.replaceAvatar; 
    this.startNearTrigger = this.replaceAvatar; 
})