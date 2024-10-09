const { untilIsLocated, untilIsVisible, reloadAndWaitForElement } = require("../../core/interactions/conditions");
const { clickOn, setValue, getColumnTexts } = require("../../core/interactions/action");
const { myByCss } = require("../../core/interactions/myBy");

class ChannelPage {

    joinChannel = myByCss('div#C07MDGJF951 button[data-qa="join-channel"]')
    leaveChannel = myByCss('div#C07MDGJF951 button[data-qa="leave-channel"]')
    searchInput = myByCss('div.ql-editor[contenteditable="true"]')
    firstOprionFilter = myByCss('li[data-index="0"]')
    typeFilter = myByCss('div[data-qa="channel_search_result"]')

    existData = myByCss('svg[data-qa="channel"]') 
    emptyAlert = myByCss('[data-qa="virtual-list-item"] [data-qa="empty_state_wrapper"]')
    
    optionChannelNames = myByCss('[data-qa="virtual-list-item"] .c-mrkdwn__highlight')

    async isLeaveVisible() {
        await untilIsLocated(this.leaveChannel)
    }
    async isfilterVisible() {
        await untilIsLocated(this.existData)
        await untilIsVisible(this.existData)

    }
    async isemptyAlertVisible() {
        await untilIsLocated(this.emptyAlert)
        await untilIsVisible(this.emptyAlert)

    }
    async istypefilterVisible() {
        await untilIsLocated(this.typeFilter)

    }
    async isJoinVisible() {
        await untilIsLocated(this.joinChannel)
    }





    async setCredentials(channel) {
        await untilIsVisible(this.searchInput);
        await setValue(this.searchInput, channel);
    }
    async clickjoinChannel() {
        await untilIsVisible(this.joinChannel)
        await clickOn(this.joinChannel)
    }
    async clickleaveChannel() {
        await untilIsVisible(this.leaveChannel)
        await clickOn(this.leaveChannel)
    }
    async clickfirstOprionFilter() {
        await untilIsVisible(this.firstOprionFilter)
        await clickOn(this.firstOprionFilter)
    }

    //Filters Selects
    allChannelSelect = myByCss('button[data-qa="search-filters-all-channels-filter_trigger"]') 
    typeChannelSelect = myByCss('button[data-qa="search-filters-channel-type-filter_trigger"]') 
    orgChannelSelect = myByCss('button[data-qa="search-filters-org-filter_trigger"]') 
    orderChannelSelect = myByCss('button[data-qa="sort-explorer-select"]')

    alltypeoptionChannelSelect = myByCss('span[data-qa="all"]')
    publictypeoptionChannelSelect = myByCss('span[data-qa="private_exclude"]')
    privatetypeoptionChannelSelect = myByCss('span[data-qa="private"]')
    archivedtypeoptionChannelSelect = myByCss('span[data-qa="archived"]')
    sharedtypeoptionChannelSelect = myByCss('span[data-qa="shared"]')
   
    alloptionChannelSelect = myByCss('span[data-qa="all_channels"]')
    myoptionChannelSelect = myByCss('div[data-qa="undefined_option_1"]')
    otheroptionChannelSelect = myByCss('div[data-qa="undefined_option_2"]')
    
    sharedtypeoptionChannelSelect = myByCss('span[data-qa="shared"]')

    
    async clickallChannelSelect() {
        await untilIsVisible(this.allChannelSelect)
        await clickOn(this.allChannelSelect)
    }
    async clicktypeChannelSelect() {
        await untilIsVisible(this.typeChannelSelect)
        await clickOn(this.typeChannelSelect)
    }
    async clickorgChannelSelect() {
        await untilIsVisible(this.orgChannelSelect)
        await clickOn(this.orgChannelSelect)
    }
    async clickorderChannelSelect() {
        await untilIsVisible(this.orderChannelSelect)
        await clickOn(this.orderChannelSelect)
    }


    async clickprivatetypeoptionChannelSelect() {
        await untilIsVisible(this.privatetypeoptionChannelSelect)
        await clickOn(this.privatetypeoptionChannelSelect)
    }
    
    async clickmyoptionChannelSelect() {
        await untilIsVisible(this.myoptionChannelSelect)
        await clickOn(this.myoptionChannelSelect)
    }
    async clickotheroptionChannelSelect() {
        await untilIsVisible(this.otheroptionChannelSelect)
        await clickOn(this.otheroptionChannelSelect)
    }

    async clickprivatetypeoptionChannelSelect() {
        await untilIsVisible(this.privatetypeoptionChannelSelect)
        await clickOn(this.privatetypeoptionChannelSelect)
    }

    async getNameChannelsSearch(){
        return getColumnTexts(this.optionChannelNames)
      }
}

module.exports = new ChannelPage(); 
