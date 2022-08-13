import Post from '../models/post.js'

export const getPosts = async (req, res) => {
  try {
    const post = await Post.find()

    res.status(200).json(post)
  } catch (err) {
    res.status(404).send({ messege: err.message })
  }
}

export const createPost = async (req, res) => {
  const post = req.body
  const newPost = new Post(post)
  try {
    await newPost.save()

    res.status(200).json(newPost)
  } catch (err) {
    res.status(409).send({ messege: err.message })
  }
}
