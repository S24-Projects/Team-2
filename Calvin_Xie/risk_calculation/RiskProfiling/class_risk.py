class RiskQuestion:
    def __init__(self, questionText, weight=1):
        self.questionText = questionText
        self.weight = weight
        self.answers = []

class RiskQuestionAnswer:
    def __init__(self, answerText, score, selected = False):
        self.answerText = answerText
        self.score = score
        self.selected = selected

class RiskQuestionnaire:
    def __init__(self):
        self.questions = []
        
