const portfolioController = {

    init() {
        portfolioView.renderProjects(portfolioModel.projects);
    }
};

portfolioController.init();