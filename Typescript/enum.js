var ApplicationState;
(function (ApplicationState) {
    ApplicationState[ApplicationState["INIT"] = 0] = "INIT";
    ApplicationState[ApplicationState["PAYMENT_DONE"] = 1] = "PAYMENT_DONE";
    ApplicationState[ApplicationState["TEST_DONE"] = 2] = "TEST_DONE";
    ApplicationState[ApplicationState["FINISHED"] = 3] = "FINISHED";
})(ApplicationState || (ApplicationState = {}));
var currentStage = ApplicationState.INIT;
console.log(currentStage);
