def commit(s):
    import os
    os.system("git add .")
    os.system(f"git commit -m \"{s}\"")
    os.system("git push origin master")



message = "Learning JavaScript completed 47 to 65 lectures"


commit(message)
print("Commit successful")

