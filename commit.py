def commit(s):
    import os
    os.system("git add .")
    os.system(f"git commit -m \"{s}\"")
    os.system("git push origin master")



message = "Learning JavaScript completed 20 lectures"


commit(message)
print("Commit successful")

