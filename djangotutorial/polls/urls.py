from ninja import NinjaAPI, ModelSchema, Schema
from polls.models import Game, Player
from django.utils import timezone
from polls.services import create_game

api = NinjaAPI()


# class AddQuestionSchema(Schema):
#      question_text: str
#      choices: list[str]

# @api.post("/create_question", response=QuestionSchema)
# def add(request, add_question: AddQuestionSchema):
#     question = Question.objects.create(question_text=add_question.question_text)

#     for choice in add_question.choices:
#         Choice.objects.create(
#             choice_text=choice,
#             question=question,
#         )
    
#     return question

# @api.get("/question/{question_id}", response=QuestionSchema)
# def get(request, question_id: int):
#     return Question.objects.get(pk=question_id)

class PlayerSchema(ModelSchema):
    class Meta:
        model = Player
        fields = [
            "id",
            "name",
            "score"
        ]

class GameSchema(ModelSchema):
    class Meta:
        model = Game
        fields = [
            "id",
            "name",
            "turn",
            "ended"
        ]

class AddGameSchema(Schema):
     game: str
     players: list[str]

@api.post("/create_game", response=GameSchema)
def add(request, add_game: AddGameSchema):
    return create_game(add_game.game , add_game.players)


# @api.delete("/delete_question/{question_id}")
# def delete_question(request, question_id: int):
#     question = Question.objects.delete(Question, pk=question_id)
#     question.delete()
#     return
