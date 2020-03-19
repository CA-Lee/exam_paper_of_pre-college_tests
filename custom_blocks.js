Blockly.Blocks['loop_of_continuous_year'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("從 民國")
            .appendField(new Blockly.FieldNumber(98, 98, 109, 1), "start_year")
            .appendField("年 到 民國")
            .appendField(new Blockly.FieldNumber(108, 98, 109, 1), "end_year")
            .appendField("年 的")
            .appendField(new Blockly.FieldDropdown([["學測", "gsat"], ["統測", "tje4"], ["指考", "ast"]]), "category");
        this.appendStatementInput("sequence_of_sheets")
            .setCheck(null);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['test_papers'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("題目");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['answers'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("答案");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(180);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['explanations'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("解析");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(270);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};