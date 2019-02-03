import os
def install():
    os.rename(os.path.abspath(__file__), os.path.dirname(os.path.dirname(os.path.abspath(__file__)))+"\\packages\\"+os.path.basename(__file__))
    print("done!")
def use():
    print("Use func")
    
