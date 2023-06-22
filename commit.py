def commit(s):
    import os
    os.system("git add .")
    os.system(f"git commit -m \"{s}\"")
    os.system("git push origin master")



message = "Learning JavaScript and Practice Problems"


commit(message)
print("Commit successful")

