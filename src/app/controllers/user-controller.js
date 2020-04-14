const userRepository = require("./../repositories/user-repository");

exports.post = async (req, res) => {
  try {
    const user = await userRepository.post(req.body);

    res.status(201).json({ message: "Usuário criado com sucesso!", user });
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar usuário!", error });
  }
};

exports.getAll = async (req, res) => {
  try {
    const users = await userRepository.get();

    res.json({
      message: "Usuário listados com sucesso!",
      users,
      count: users.length,
    });
  } catch (error) {
    res.status(500).json({ message: "Erro ao listar usuários!", error });
  }
};

exports.get = async (req, res) => {
  try {
    const user = await userRepository.getById(req.params.userId);

    if (user) {
      res.status(200).json({
        message: "Usuário encontrado com sucesso!",
        user,
      });

      return;
    }

    res.status(404).json({
      message: "Usuário não encontrado!",
    });
  } catch (error) {
    res.status(500).json({ message: "Erro ao listar usuários!", error });
  }
};

exports.put = async (req, res) => {
  try {
    const id = req.params.userId;
    const user = await userRepository.put(id, req.body);

    res.status(200).send({
      message: "Usuário atualizado com sucesso",
      user,
    });
  } catch (error) {
    res.status(500).send({
      message: "Falha na requisição",
      error,
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const id = req.params.userId;

    console.log(id);

    await userRepository.delete(id);

    res.status(200).send({
      message: "Usuário removido com sucesso",
    });
  } catch (error) {
    res.status(500).send({
      message: "Falha na requisição",
      error,
    });
  }
};
