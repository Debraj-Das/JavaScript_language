const promise = (_work_, _then_, _catch_) => {
  if (!_work_) throw new Error("Promise must have a Work function");
  const p1 = new Promise((resolve, reject) => _work_(resolve, reject));
  if (_then_ && _catch_) return p1.then(_then_).catch(_catch_);
  else if (_then_) return p1.then(_then_);
  else if (_catch_) return p1.catch(_catch_);
  else return p1;
};

const Promise_function = (_work_) =>
  new Promise((resolve, reject) => _work_(resolve, reject));

