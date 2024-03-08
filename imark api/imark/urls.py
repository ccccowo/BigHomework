"""
URL configuration for imark project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import path
from api.views import  AddTestViews,SelectTestViews,AddMarkViews
urlpatterns = [

    
    #添加试题类型
    path('quesKind/add/',AddTestViews.AddQuesKindView.as_view()),
    #添加试题
    path('ques/add/',AddTestViews.AddQuesView.as_view()),
    #添加答题
    path('answer/add/',AddTestViews.AddAnswerView.as_view()),
    #添加准考证
    path('certify/add/',AddTestViews.AddCertifyView.as_view()),
    #添加试卷
    path('paper/add/',AddTestViews.AddPaperView.as_view()),
    #添加考试
    path('exam/add/',AddTestViews.AddExamView.as_view()),
    
    
    #显示所有试题
    path('showQues/all/',SelectTestViews.ShowAllQuesView.as_view()),
    #根据题型查询试题
    path('showQues/byQuesKindId/',SelectTestViews.ShowQuesByQuesKindIdView.as_view()),
    #显示所有考试
    path('showExam/all/',SelectTestViews.ShowAllExamView.as_view()),
    #试卷名称模糊查询
    path('showPaper/fuzzyByPaperName/',SelectTestViews.ShowFuzzyPaperByPaperNameView.as_view()),
    
    
    
    #添加阅卷任务
    path('mark/add/',AddMarkViews.AddMarkView.as_view()),
   
   
   
    
    

]
